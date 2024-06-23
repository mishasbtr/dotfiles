#!/bin/bash

readonly volume_step=1
readonly max_volume=100

function get_volume() {
	pactl get-sink-volume @DEFAULT_SINK@ | grep -Po '[0-9]{1,3}(?=%)' | head -1
}

function get_mute() {
	pactl get-sink-mute @DEFAULT_SINK@ | grep -Po '(?<=Mute: )(yes|no)'
}

function get_volume_icon() {
	local volume=$1
	if [ "$volume" -eq 0 ] || [ "$(get_mute)" == "yes" ]; then
		echo ""
	elif [ "$volume" -lt 50 ]; then
		echo ""
	else
		echo ""
	fi
}

function show_volume_notif() {
	local volume
	volume=$(get_volume)
	~/.config/i3/scripts/utils/show_control_notification.sh "$(get_volume_icon "$volume")" "$volume"
}

case $1 in
volume_up)
	pactl set-sink-mute @DEFAULT_SINK@ 0
	volume=$(get_volume)
	if [ $(("$volume" + "$volume_step")) -gt $max_volume ]; then
		pactl set-sink-volume @DEFAULT_SINK@ $max_volume%
	else
		pactl set-sink-volume @DEFAULT_SINK@ +$volume_step%
	fi
	show_volume_notif
	;;

volume_down)
	pactl set-sink-volume @DEFAULT_SINK@ -$volume_step%
	show_volume_notif
	;;

volume_mute)
	pactl set-sink-mute @DEFAULT_SINK@ toggle
	show_volume_notif
	;;

esac
