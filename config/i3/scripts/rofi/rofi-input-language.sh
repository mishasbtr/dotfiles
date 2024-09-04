#!/bin/bash

readonly menu_option_us="🇺🇸 English (US)"
readonly menu_option_ru="🇷🇺 Russian"
readonly menu_option_ua="🇺🇦 Ukrainian"
readonly menu_option_pl="🇵🇱 Polish"

readonly us_value="us"
readonly ru_value="ru"
readonly ua_value="ua"
readonly pl_value="pl"

readonly lang_options="$menu_option_us\n$menu_option_ru\n$menu_option_ua\n$menu_option_pl"

chosen_language=$(echo -e "$lang_options" | rofi -dmenu -i -p "Select input language")

if [ -z "$chosen_language" ]; then
  exit 0
fi

case $chosen_language in
"$menu_option_us")
  setxkbmap $us_value
  ;;
"$menu_option_ru")
  setxkbmap $ru_value
  ;;
"$menu_option_ua")
  setxkbmap $ua_value
  ;;
"$menu_option_pl")
  setxkbmap $pl_value
  ;;
*)
  rofi -e "Unknown option selected."
  exit 1
  ;;
esac

dunstify -t 2000 -r 26428394 -u normal "Keyboard language switched" "$chosen_language"
