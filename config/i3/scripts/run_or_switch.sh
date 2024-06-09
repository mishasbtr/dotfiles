#!/bin/bash

APP_NAME=$1
APP_WINDOW_INFO=$(wmctrl -xl | grep -i "$APP_NAME")

if [ -z "$APP_WINDOW_INFO" ]; then
	i3-msg exec "$APP_NAME"
	exit 0
fi

APP_WINDOW_ID=$(echo "$APP_WINDOW_INFO" | awk '{print $1}')
i3-msg "[id=$APP_WINDOW_ID] focus"
