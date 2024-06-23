#!/bin/bash

bar_color="#ebdbb2"

brightness_step=5

function set_brightness() {
	xbacklight -set "$1" -time 0
}

function get_brightness() {
	xbacklight -get | grep -Po '[0-9]{1,3}' | head -n 1
}

function show_brightness_notif {
	local brightness_icon=""
	local brightness
	brightness=$(get_brightness)
	dunstify -t 1000 -r 2593 -u normal "$brightness_icon  $brightness%" -h int:value:"$brightness" -h string:hlcolor:$bar_color
}

function increase_brightness {
	local current_brightness
	local new_brightness
	current_brightness=$(get_brightness)
	new_brightness=$(echo "$current_brightness + $brightness_step" | bc)
	new_brightness=$(printf "%.0f" "$new_brightness")
	if [ "$new_brightness" -gt 100 ]; then
		new_brightness=100
	fi
	set_brightness "$new_brightness"
}

function decrease_brightness {
	local current_brightness
	local new_brightness
	current_brightness=$(get_brightness)
	new_brightness=$(echo "$current_brightness - $brightness_step" | bc)
	new_brightness=$(printf "%.0f" "$new_brightness")
	if [ "$new_brightness" -lt 0 ]; then
		new_brightness=0
	fi
	set_brightness "$new_brightness"
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

set_brightness)
	set_brightness "$2"
	show_brightness_notif
	;;

esac
