#!/bin/bash

brightness_vcp_code=10
brightness_step=20

function get_brightness {
	ddcutil --display 1 getvcp $brightness_vcp_code | awk '{print $9}' | sed 's/,$//'
}

function set_brightness {
	ddcutil --display 1 setvcp $brightness_vcp_code $1
}

function increase_brightness {
	brightness=$(get_brightness)
	if [ $brightness -lt 100 ]; then
		brightness=$((brightness + $brightness_step))
		set_brightness $brightness
	else
		set_brightness 100
	fi

}

function decrease_brightness {
	brightness=$(get_brightness)
	if [ $brightness -gt 0 ]; then
		brightness=$((brightness - $brightness_step))
		set_brightness $brightness
	else
		set_brightness 0
	fi
}

function show_brightness_notif {
	bar_color="#ebdbb2"
	brightness_icon=""

	brightness=$(get_brightness)
	dunstify -t 1000 -r 2593 -u normal "$brightness_icon   $brightness%" -h int:value:$brightness -h string:hlcolor:$bar_color
}

function set_brightness_full {
	set_brightness 100
}

case $1 in
brightness_up)
	increase_brightness
	show_brightness_notif
	;;

brightness_down)
	decrease_brightness
	show_brightness_notif
	;;

brightness_full)
	set_brightness_full
	show_brightness_notif
	;;

esac
