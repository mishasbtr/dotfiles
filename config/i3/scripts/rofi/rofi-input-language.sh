#!/bin/bash

language_names=("🇺🇸 English (US)" "🇷🇺 Russian" "🇺🇦 Ukrainian" "🇵🇱 Polish")
language_codes=("us" "ru" "ua" "pl")

lang_options=""
for key in "${language_names[@]}"; do
  lang_options+="$key\n"
done

chosen_language=$(echo -e "$lang_options" | rofi -dmenu -i -p "Select input language")

if [ -z "$chosen_language" ]; then
  exit 0
fi

handle_unknown_option() {
  rofi -e "Unknown option selected."
  exit 1
}

for index in "${!language_names[@]}"; do
  if [ "$chosen_language" == "${language_names[$index]}" ]; then
    xkb-switch -s "${language_codes[$index]}"
    dunstify -t 2000 -r 26428394 -u normal "Keyboard language switched" "$chosen_language"
    exit 0
  fi
done

handle_unknown_option
