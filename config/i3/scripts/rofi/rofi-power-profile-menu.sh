#!/bin/bash

performance_menu_option="󱐋  performance"
balanced_menu_option="  balanced"
power_saver_menu_option="  power saver"

readonly performance_value="performance"
readonly balanced_value="balanced"
readonly power_saver_value="power-saver"

# Get the current active profile
current_profile=$(powerprofilesctl get)

# Highlight the active profile
if [ "$current_profile" == "$performance_value" ]; then
  performance_menu_option="* $performance_menu_option"
elif [ "$current_profile" == "$balanced_value" ]; then
  balanced_menu_option="* $balanced_menu_option"
elif [ "$current_profile" == "$power_saver_value" ]; then
  power_saver_menu_option="* $power_saver_menu_option"
fi

readonly profiles="$performance_menu_option\n$balanced_menu_option\n$power_saver_menu_option"

chosen_profile=$(echo -e "$profiles" | rofi -dmenu -p "Select power profile")

if [ -z "$chosen_profile" ]; then
  exit 0
fi

# Remove the indicator before comparison
chosen_profile=$(echo "$chosen_profile" | sed 's/^\* //')

case $chosen_profile in
"$performance_menu_option")
  powerprofilesctl set $performance_value
  ;;
"$balanced_menu_option")
  powerprofilesctl set $balanced_value
  ;;
"$power_saver_menu_option")
  powerprofilesctl set $power_saver_value
  ;;
esac

dunstify -t 2000 -r 282828 -u normal "Power profile switched" "$chosen_profile"
