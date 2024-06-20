#!/bin/bash

app_name=$1
command=$2

app_window_info=$(wmctrl -xl | grep -i "$app_name")

if [ -z "$app_window_info" ]; then
	if [ -n "$command" ]; then
		$command
		exit 0
	else
		i3-msg exec "$app_name"
		exit 0
	fi
fi

"$(dirname "$0")"/switch_to_last_of_app.sh "$app_name"
