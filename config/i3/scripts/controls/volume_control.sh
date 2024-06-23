#!/bin/bash

volume_step=1
max_volume=100

function get_volume() {
	pactl get-sink-volume @DEFAULT_SINK@ | grep -Po '[0-9]{1,3}(?=%)' | head -1
}

function get_mute() {
	pactl get-sink-mute @DEFAULT_SINK@ | grep -Po '(?<=Mute: )(yes|no)'
}

function get_volume_icon() {
	local volume=$1
	local mute
	mute=$(get_mute)
	if [ "$volume" -eq 0 ] || [ "$mute" == "yes" ]; then
		volume_icon=""
	elif [ "$volume" -lt 50 ]; then
		volume_icon=""
	else
		volume_icon=""
	fi
}

function show_volume_notif() {
	local notification_id=2593
	local bar_color="#ebdbb2"
	local volume
	volume=$(get_volume)
	get_volume_icon "$volume"
	dunstify -t 1000 -r $notification_id -u normal "$volume_icon  $volume%" -h int:value:"$volume" -h string:hlcolor:$bar_color
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
