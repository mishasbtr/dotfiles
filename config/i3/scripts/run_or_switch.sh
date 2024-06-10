#!/bin/bash

app_name=$1
app_window_info=$(wmctrl -xl | grep -i "$app_name")

if [ -z "$app_window_info" ]; then
	i3-msg exec "$app_name"
	exit 0
fi

app_window_id=$(echo "$app_window_info" | awk '{print $1}')
i3-msg "[id=$app_window_id] focus"
