#!/bin/bash

# Default warning and critical temperature values
t_warn=70  # Warning temperature threshold
t_crit=90  # Critical temperature threshold

# Fetching temperature using sensors command
temperature=$(sensors | grep 'CPU' | awk '{print $2}' | sed 's/[^0-9\.]*//g' | xargs printf "%.*f\n" 0)

# Check if temperature was read successfully
if [ -z "$temperature" ]; then
    echo "{\"error\":\"Cannot find temperature\"}"
    exit 1
fi

# Determine label and status based on temperature
label="😀"  # Default label
status="good"  # Assume status is good initially
if [ "$temperature" -lt 45 ]; then
  label=''  # Cooler
elif [ "$temperature" -lt 55 ]; then
  label=''  # Cool
elif [ "$temperature" -lt 65 ]; then
  label=''  # Warm
elif [ "$temperature" -lt 75 ]; then
  label=''  # Hot
else
  label=''  # Very Hot
  status="degraded"  # Temperature is in the warning range
fi

if [ "$temperature" -ge "$t_crit" ]; then
    status="bad"  # Temperature is in the critical range
fi

# Output the temperature, label, and status in JSON format
echo "{\"temperature\":\"${temperature}°C\", \"label\":\"${label}\", \"status\":\"${status}\"}"

exit 0
