# elidon.net — home server

2018 iMac running Fedora 44, behind the Fritz!Box. Caddy serves two things:

| Domain           | What                      | How                                                       |
| ---------------- | ------------------------- | --------------------------------------------------------- |
| `elidon.net`     | Next.js site (standalone) | Caddy → `reverse_proxy 127.0.0.1:3000` → `node server.js` |
| `www.elidon.net` | redirect                  | 301 to `https://elidon.net`                               |
| `cdn.elidon.net` | static files              | Caddy `file_server` from `/var/www/cdn`                   |

Caddy handles HTTPS certificates automatically (Let's Encrypt).

## Outside world

- **DNS** (TransIP): A records for `elidon.net`, `www` and `cdn` point to the home IP.
- **Fritz!Box**: ports 80 + 443 forwarded to the iMac.

## Deploy flow (automatic)

```
push to main on GitHub
   ↓  (within 15 minutes)
elidon-deploy.timer  →  elidon-deploy.service  →  /usr/local/bin/elidon-deploy
```

The timer fires 5 minutes after boot, then 15 minutes after each previous run. A run where main hasn't changed costs next to nothing.

The script runs as user `elidon` and does the following:

1. `git fetch` in `/srv/elidon/repo`. If `origin/main` matches `/srv/elidon/app/REVISION`, it exits right away.
2. `git reset --hard` to the new commit, then `npm ci` and `npm run build`.
3. Three rsyncs into `/srv/elidon/app`:
   - `.next/standalone/` (the server itself)
   - `.next/static/`
   - `public/`

   The last two are copied separately because standalone output doesn't include them.

4. Update `REVISION` and run `sudo systemctl restart elidon`.

## Files

| Path                                              | What                                                                         |
| ------------------------------------------------- | ---------------------------------------------------------------------------- |
| `/etc/systemd/system/elidon-deploy.timer`         | check every 15 minutes                                                       |
| `/etc/systemd/system/elidon-deploy.service`       | oneshot that runs the script                                                 |
| `/usr/local/bin/elidon-deploy`                    | the deploy script                                                            |
| `/etc/systemd/system/elidon.service`              | Node server (`node server.js`, port 3000, localhost only)                    |
| `/srv/elidon/repo`                                | git checkout + build                                                         |
| `/srv/elidon/app`                                 | live version + `REVISION`                                                    |
| `/srv/elidon/env`                                 | optional env vars for the site                                               |
| `/etc/caddy/Caddyfile`                            | only imports `Caddyfile.d/*.caddyfile`                                       |
| `/etc/caddy/Caddyfile.d/elidon.net.caddyfile`     | site + www redirect                                                          |
| `/etc/caddy/Caddyfile.d/cdn.elidon.net.caddyfile` | CDN (CORS `*`, 1-day cache, noindex)                                         |
| sudoers rule                                      | `elidon` may run `systemctl restart elidon` (check with `sudo -l -U elidon`) |

## Handy commands

```bash
# When is the next check?
systemctl list-timers elidon-deploy.timer

# Check and deploy right now (no-op if main hasn't changed)
sudo systemctl start elidon-deploy

# Force a deploy even if main hasn't changed
sudo rm /srv/elidon/app/REVISION && sudo systemctl start elidon-deploy

# Logs
journalctl -u elidon-deploy -n 50 --no-pager   # deploys
journalctl -u elidon -f                         # the site itself
journalctl -u caddy -f                          # Caddy

# Which commit is live?
cat /srv/elidon/app/REVISION

# Changed the Caddy config?
caddy validate --config /etc/caddy/Caddyfile && sudo systemctl reload caddy
```

## Rollback

The script always deploys `origin/main`, so roll back through git: `git revert` + push, and the next run picks it up. Don't want to wait? Run `sudo systemctl start elidon-deploy` afterwards.

## CDN

There's no deploy process. Files live directly in `/var/www/cdn`: drop them in and you're done, no restart needed.
