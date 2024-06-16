#!/bin/bash
MUSIC_DIR="$HOME/Music"

file="$(mpc --format %file% current)"
album_dir="${file%/*}"
album_art="$MUSIC_DIR/$album_dir/cover.jpg"

if [ ! -e "$album_art" ]; then
	echo "No album art found for the current song."
	exit 1
fi

nsxiv "$album_art" &
