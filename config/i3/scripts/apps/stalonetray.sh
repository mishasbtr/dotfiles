#!/bin/bash

function get_stalonetray_window_id {
	xdotool search --class stalonetray
}

function get_mouse_position() {
	local mouse_position
	mouse_position=$(xdotool getmouselocation --shell)
	echo "$mouse_position" | grep -oP '(?<=X=)\d+' | tr '\n' ' '
	echo "$mouse_position" | grep -oP '(?<=Y=)\d+' | tr '\n' ' '
}

function move_window() {
	local window_id=$1
	local x=$2
	local y=$3
	xdotool windowmove "$window_id" "$x" "$y"
}

function move_window_to_mouse() {
	local window_id
	local x y
	window_id=$(get_stalonetray_window_id)
	read -r x y <<<"$(get_mouse_position)"
	move_window "$window_id" "$x" "$y"
}

function show_stalonetray {
	local window_id
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
		move_window_to_mouse
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
