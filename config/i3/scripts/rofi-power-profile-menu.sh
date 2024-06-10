#!/bin/bash

performance_menu_option="󱐋 performance"
balanced_menu_option=" balanced"
power_saver_menu_option=" power saver"

performance_value="performance"
balanced_value="balanced"
power_saver_value="power-saver"

profiles="$performance_menu_option\n$balanced_menu_option\n$power_saver_menu_option"

chosen=$(echo -e "$profiles" | rofi -dmenu -p "Select power profile")

if [ -z "$chosen" ]; then
	exit 0
fi

# case switch for chosen profile
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

notify-send "Power Profile" "Power profile switched to $chosen"
