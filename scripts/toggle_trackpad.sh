#!/bin/bash

device_id=9
notification_id=234789

enabled_flag=$(xinput list-props $device_id | grep "Device Enabled" | grep -o "[01]$")

if [ "$enabled_flag" -eq 1 ]; then
  xinput disable $device_id
  dunstify -r $notification_id "Trackpad Disabled"
else
  xinput enable $device_id
  dunstify -r $notification_id "Trackpad Enabled"
fi
