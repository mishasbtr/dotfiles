#!/bin/bash

brightness_vcp_code=10

function get_brightness {
	ddcutil --display 1 getvcp $brightness_vcp_code | awk '{print $9}' | sed 's/,$//'
}

function set_brightness {
	ddcutil --display 1 setvcp $brightness_vcp_code "$1"
}

function show_brightness_notif {
	local notification_id=2593
	bar_color="#ebdbb2"
	brightness_icon=""
	brightness=$(get_brightness)
	dunstify -t 1000 -r $notification_id -u normal "$brightness_icon   $brightness%" -h int:value:"$brightness" -h string:hlcolor:$bar_color
}

case $1 in
get_brightness)
	get_brightness
	;;

set_brightness)
	set_brightness "$2"
	show_brightness_notif
	;;
esac
