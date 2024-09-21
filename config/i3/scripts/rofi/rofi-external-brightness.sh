#!/bin/bash

script_path=~/.config/i3/scripts/controls/external_brightness_control.sh

# Get connected displays with names
connected_displays_info=$($script_path list_displays)
connected_displays=()
display_options=()
declare -A display_names

while IFS= read -r line; do
  display_number=$(echo "$line" | cut -d':' -f1)
  display_name=$(echo "$line" | cut -d':' -f2-)
  connected_displays+=("$display_number")
  display_names["$display_number"]="$display_name"
  display_options+=("$display_name")
done <<<"$connected_displays_info"

num_displays=${#connected_displays[@]}

if [ "$num_displays" -eq 0 ]; then
  rofi -e "No external monitors connected."
  exit 1
fi

if [ "$num_displays" -eq 1 ]; then
  display="${connected_displays[0]}"
  display_name="${display_names[$display]}"
else
  # Multiple displays connected, prompt the user to select one or all
  options=("${display_options[@]}" "All")

  chosen=$(printf '%s\n' "${options[@]}" | rofi -dmenu -p "Select display")
  if [ -z "$chosen" ]; then
    exit 0
  fi

  if [ "$chosen" == "All" ]; then
    display="all"
    display_name="All Displays"
  else
    # Find the display number associated with the chosen name
    for d in "${connected_displays[@]}"; do
      if [ "${display_names[$d]}" == "$chosen" ]; then
        display="$d"
        display_name="${display_names[$d]}"
        break
      fi
    done
  fi
fi

# Get current brightness
if [ "$display" == "all" ]; then
  current="Multiple"
else
  current=$($script_path get_brightness "$display")
  current=$(printf "%.0f" "$current")
fi

# Prompt user for new brightness value
new_brightness=$(rofi -dmenu -p "Set brightness for $display_name (current: $current%)" -lines 0)

if [ -z "$new_brightness" ]; then
  exit 0
fi

if ! [[ "$new_brightness" =~ ^[0-9]+$ ]] || [ "$new_brightness" -lt 0 ] || [ "$new_brightness" -gt 100 ]; then
  rofi -e "Invalid input. Please enter a number between 0 and 100."
  exit 1
fi

# Set brightness
if [ "$display" == "all" ]; then
  for d in "${connected_displays[@]}"; do
    display_name="${display_names[$d]}"
    $script_path set_brightness "$d" "$new_brightness" "$display_name"
  done
else
  $script_path set_brightness "$display" "$new_brightness" "$display_name"
fi
