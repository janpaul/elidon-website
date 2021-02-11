import { Fragment } from 'react'
import Head from 'next/head'
import { Layout, Title } from '../components'
import tableStyles from './table.module.css'
import styles from './tvshows.module.css'
import tvshows from '../data/tvshows'

const sortedShows = tvshows.sort(({ title: atitle }, { title: btitle }) => atitle.localeCompare(btitle))

const _showUrl = (showId, episodeId, format = 'mp4') =>
  `https://media-tvshows.ams3.digitaloceanspaces.com/${showId}/${episodeId}.${format}`

const Tvshows = () => (
  <Layout>
    <Head>
      <title>jp: tv shows</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <Title>TV Shows</Title>
      <section className={styles.quickLinks}>
        {sortedShows.map(({ title, id }) => (
          <a href={`#${id}`}>{title}</a>
        ))}
      </section>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Season</th>
            <th>Episode</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sortedShows.map(({ title: showTitle, id: showId, format, transformer, seasons }) => {
            return (
              <Fragment key={showId}>
                {seasons
                  .sort(({ n: an }, { n: bn }) => an - bn)
                  .map(({ n: seasonNumber, episodes }) => {
                    const aepisodes = Array(episodes)
                      .fill(0)
                      .map((_, i) => i + 1)
                    return aepisodes.map((episodeNumber, i) => {
                      return (
                        <tr key={`${transformer(seasonNumber, episodeNumber)}-${i}`}>
                          <td>
                            {seasonNumber === 1 && episodeNumber && <a id={showId} />}
                            {showTitle}
                          </td>
                          <td>{seasonNumber}</td>
                          <td>{episodeNumber}</td>
                          <td>
                            <a
                              href={_showUrl(showId, transformer(seasonNumber, episodeNumber), format)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Watch
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  })}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </section>
  </Layout>
)

export default Tvshows
