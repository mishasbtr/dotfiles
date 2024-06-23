#!/bin/bash

readonly brightness_vcp_code=10

function get_brightness {
	ddcutil --display 1 getvcp $brightness_vcp_code | awk '{print $9}' | sed 's/,$//'
}

function set_brightness {
	ddcutil --display 1 setvcp $brightness_vcp_code "$1"
}

function show_brightness_notif {
	~/.config/i3/scripts/utils/show_control_notification.sh "" "$(get_brightness)"
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
