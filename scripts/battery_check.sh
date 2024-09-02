#!/bin/bash

threshold=20
notification_id=1234

battery_level=$(acpi -b | grep -P -o '[0-9]+(?=%)')

if [ "$battery_level" -le "$threshold" ]; then
  dunstify -t 5000 -r $notification_id -u critical "Low Battery" "Battery level is at ${battery_level}%"
fi
