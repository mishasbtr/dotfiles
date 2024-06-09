#!/bin/bash

PERFORMANCE_MENU_OPTION="󱐋 performance"
BALANCED_MENU_OPTION=" balanced"
POWER_SAVER_MENU_OPTION=" power saver"

PERFORMANCE_VALUE="performance"
BALANCED_VALUE="balanced"
POWER_SAVER_VALUE="power-saver"

profiles="$PERFORMANCE_MENU_OPTION\n$BALANCED_MENU_OPTION\n$POWER_SAVER_MENU_OPTION"

chosen=$(echo -e "$profiles" | rofi -dmenu -p "Select power profile")

if [ -z "$chosen" ]; then
	exit 0
fi

# case switch for chosen profile
case $chosen in
"$PERFORMANCE_MENU_OPTION")
	powerprofilesctl set $PERFORMANCE_VALUE
	;;
"$BALANCED_MENU_OPTION")
	powerprofilesctl set $BALANCED_VALUE
	;;
"$POWER_SAVER_MENU_OPTION")
	powerprofilesctl set $POWER_SAVER_VALUE
	;;
esac

notify-send "Power Profile" "Power profile switched to $chosen"
