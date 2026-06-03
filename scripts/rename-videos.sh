#!/opt/homebrew/bin/zsh

DIR="${HOME}/Documents/videos"

find "$DIR" -maxdepth 1 -type f \( \
  -iname "*.gif" -o -iname "*.mp4" -o -iname "*.mp4" -o -iname "*.MP4" \
  -iname "*.mov" -o -iname "*.webm" \
\) | while read -r filepath; do
  ext="${filepath##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  hash=$(md5sum "$filepath" | cut -c1-24)
  newname="${DIR}/${hash}.${ext_lower}"

  if [ "$filepath" = "$newname" ]; then
    echo "Skipping (already named correctly): $filepath"
  elif [ -f "$newname" ]; then
    echo "Removing duplicate: $filepath"
    rm "$filepath"
  else
    echo "Renaming: $filepath -> $newname"
    mv "$filepath" "$newname"
  fi
done