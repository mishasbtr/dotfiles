#!/bin/bash

TEMP_SCRIPT="/path/to/temp_script.sh"

i3status | while IFS= read -r line; do
    # Capture the temp script's output as JSON
    temp_data=$($TEMP_SCRIPT)

    # Integrate the temperature data into the i3status output, capturing stderr
    new_line=$(echo $line | jq --argjson temp_data "$temp_data" '. + [$temp_data]' 2>&1)

    # Check if jq command was successful
    if [ $? -eq 0 ]; then
        echo "$new_line"
    else
        echo "Error processing JSON data: $new_line"
        exit 1
    fi
done
