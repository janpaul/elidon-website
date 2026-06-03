#!/bin/bash

dir="$HOME/Downloads/gif"

set -e
shopt -s nullglob
trap 'rm -f "$out"; exit 1' INT TERM

mkdir -p "$dir/web"
cd "$dir"

pwd

for f in *.mp4; do

  out="web/${f%.mp4}.mp4"

  if [[ -f "$out" ]]; then
    echo "Skipping $f (output $out exists)"
    continue
  fi

  echo "Converting $f -> $out"
  ffmpeg -hide_banner -loglevel error -stats \
    -i "$f" \
    -vf "scale='min(800,iw)':-2,format=gray" \
    -c:v libx264 -crf 28 -preset slow \
    -an -movflags +faststart \
    "$out"
done

echo "Done."