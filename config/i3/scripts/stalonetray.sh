#!/bin/bash

function get_stalonetray_window_id {
	xdotool search --class stalonetray
}

function show_stalonetray {
	xdotool windowmap "$(get_stalonetray_window_id)"
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
