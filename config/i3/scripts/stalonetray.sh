#!/bin/bash

function get_stalonetray_window_id {
	xdotool search --class stalonetray
}

function get_screen_dimensions() {
	local screen_info screen_width screen_height
	screen_info=$(xrandr | awk '/ connected/ {getline; print $1}')
	screen_width=$(echo "$screen_info" | cut -d 'x' -f1)
	screen_height=$(echo "$screen_info" | cut -d 'x' -f2)
	echo "$screen_width $screen_height"
}

function get_window_dimensions() {
	local width height
	local window_id=$1
	width=$(xwininfo -id "$window_id" | grep 'Width:' | awk '{print $2}')
	height=$(xwininfo -id "$window_id" | grep 'Height:' | awk '{print $2}')
	echo "$width $height"
}

function calculate_center_position() {
	local screen_width=$1
	local screen_height=$2
	local window_width=$3
	local window_height=$4
	local x=$(((screen_width / 2) - (window_width / 2)))
	local y=$(((screen_height / 2) - (window_height / 2)))
	echo "$x $y"
}

function move_window() {
	local window_id=$1
	local x=$2
	local y=$3
	xdotool windowmove "$window_id" "$x" "$y"
}

function center_window() {
	local window_id
	window_id=$(get_stalonetray_window_id)
	read -r screen_width screen_height <<<"$(get_screen_dimensions)"
	read -r window_width window_height <<<"$(get_window_dimensions "$window_id")"
	read -r x y <<<"$(calculate_center_position "$screen_width" "$screen_height" "$window_width" "$window_height")"
	move_window "$window_id" "$x" "$y"
}

function show_stalonetray {
	local window_id screen_width screen_height x y
	window_id=$(get_stalonetray_window_id)
	xdotool windowmap "$window_id"
}

function hide_stalonetray {
	xdotool windowunmap "$(get_stalonetray_window_id)"
}

function focus_stalonetray {
	xdotool windowfocus "$(get_stalonetray_window_id)"
}

function get_is_window_mapped {
	local window_id
	local window_info
	local mapped_state
	local is_mapped

	window_id="$(get_stalonetray_window_id)"
	if [ -z "$window_id" ]; then
		return
	fi
	window_info=$(xwininfo -id "$window_id")
	mapped_state=$(echo "$window_info" | grep "Map State" | awk '{print $3}')
	is_mapped=$(echo "$mapped_state" | grep "IsViewable")

	if [ -n "$is_mapped" ]; then
		echo 1
	else
		echo 0
	fi
}

function toggle_stalonetray {
	if [ "$(get_is_window_mapped)" -eq 1 ]; then
		hide_stalonetray
	else
		show_stalonetray
		center_window
		focus_stalonetray
	fi
}

function run_stalonetray {
	nohup stalonetray &>/dev/null &
	while ! get_stalonetray_window_id >/dev/null 2>&1; do
		sleep 0.1
	done
	hide_stalonetray
	disown
}

COMMAND="$1"

case $COMMAND in
show)
	show_stalonetray
	;;
hide)
	hide_stalonetray
	;;
run)
	run_stalonetray
	;;
toggle)
	toggle_stalonetray
	;;
esac
