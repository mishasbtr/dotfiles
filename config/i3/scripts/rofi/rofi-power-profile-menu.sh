#!/bin/bash

readonly performance_menu_option="󱐋  performance"
readonly balanced_menu_option="  balanced"
readonly power_saver_menu_option="  power saver"

readonly performance_value="performance"
readonly balanced_value="balanced"
readonly power_saver_value="power-saver"

readonly profiles="$performance_menu_option\n$balanced_menu_option\n$power_saver_menu_option"

chosen=$(echo -e "$profiles" | rofi -dmenu -p "Select power profile")

if [ -z "$chosen" ]; then
	exit 0
fi

case $chosen in
"$performance_menu_option")
	powerprofilesctl set $performance_value
	;;
"$balanced_menu_option")
	powerprofilesctl set $balanced_value
	;;
"$power_saver_menu_option")
	powerprofilesctl set $power_saver_value
	;;
esac

dunstify -t 2000 -r 282828 -u normal "Power profile switched to $chosen"
