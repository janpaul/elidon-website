#!/opt/homebrew/bin/zsh

src="$HOME/Documents/videos"
dest="$HOME/Downloads/xvideos"
threshold=60

mkdir -p "$dest"

[[ ! -d "$src" ]] && echo "Source directory does not exist: $src" && exit 1

pushd || exit
cd "$src" || exit

for f in *.mp4; do
  dur=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$f")
  echo "${f} = ${dur}"
  if (( $(echo "$dur <= ${threshold}" | bc -l) )); then
    cp "$f" "$dest"
  fi
done

popd || exit