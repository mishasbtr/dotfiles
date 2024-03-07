#!/bin/bash

# Define the battery level threshold
THRESHOLD=20

# Retrieve the current battery level
BATTERY_LEVEL=$(acpi -b | grep -P -o '[0-9]+(?=%)')

# Check if the battery level is below the threshold
if [ "$BATTERY_LEVEL" -le "$THRESHOLD" ]; then
	# Use dunstify if available for more control, otherwise fall back to notify-send
	if command -v dunstify &>/dev/null; then
		dunstify -u critical -i battery-low "Low Battery" "Your battery is at ${BATTERY_LEVEL}%, please charge it."
	else
		notify-send "Low Battery" "Your battery is at ${BATTERY_LEVEL}%, please charge it." --icon=battery-low
	fi
fi
