#!/bin/bash

current=$(xbacklight -get)
# Round the current brightness to the nearest integer
current=$(printf "%.0f" "$current")
new_brightness=$(rofi -dmenu -p "Set brightness (current: $current%)" -lines 0)

if [ -z "$new_brightness" ]; then
	exit 0
fi

if ! [[ "$new_brightness" =~ ^[0-9]+$ ]] || [ "$new_brightness" -lt 0 ] || [ "$new_brightness" -gt 100 ]; then
	rofi -e "Invalid input. Please enter a number between 0 and 100."
	exit 1
fi

~/.config/i3/scripts/brightness_control.sh set_brightness "$new_brightness"
