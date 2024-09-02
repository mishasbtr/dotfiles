#!/bin/bash

THRESHOLD=100
notification_id=1234

BATTERY_LEVEL=$(acpi -b | grep -P -o '[0-9]+(?=%)')

if [ "$BATTERY_LEVEL" -le "$THRESHOLD" ]; then
  dunstify -r $notification_id -u critical "Low Battery" "Battery level is at ${BATTERY_LEVEL}%"
fi
