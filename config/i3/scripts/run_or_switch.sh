#!/bin/bash

app_name=$1
app_window_info=$(wmctrl -xl | grep -i "$app_name")

if [ -z "$app_window_info" ]; then
	i3-msg exec "$app_name"
	exit 0
fi

"$(dirname "$0")"/switch_to_last_of_app.sh "$app_name"
