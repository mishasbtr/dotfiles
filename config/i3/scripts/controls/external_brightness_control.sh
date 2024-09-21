#!/bin/bash

readonly lockfile="/tmp/external_brightness_control.lock"
readonly brightness_vcp_code=10

function get_connected_displays() {
  ddcutil detect | awk '
        /^Display [0-9]+/ { 
            display = $2
        }
        /Mfg id:/ { 
            mfg = $3
        }
        /Model:/ { 
            model = $3
        }
        /VCP version:/ { 
            # Remove any commas or special characters from model
            gsub(/,/, "", model)
            # Combine mfg and model for display name
            display_name = mfg " " model
            print display ":" display_name
        }
    '
}

function list_displays() {
  get_connected_displays
}

function get_brightness() {
  local display="$1"
  ddcutil --display "$display" getvcp $brightness_vcp_code | awk '{print $9}' | sed 's/,$//'
}

function set_brightness() {
  local display="$1"
  local brightness="$2"
  ddcutil --display "$display" setvcp $brightness_vcp_code "$brightness"
}

function show_brightness_notif() {
  local display="$1"
  local display_name="$2"
  ~/.config/i3/scripts/utils/show_control_notification.sh " $display_name" "$(get_brightness "$display")"
}

(
  flock -n 9 || exit 0

  case $1 in
  list_displays)
    list_displays
    ;;
  get_brightness)
    if [[ -z "$2" ]]; then
      echo "Error: No display specified."
      exit 1
    fi
    get_brightness "$2"
    ;;
  set_brightness)
    if [[ -z "$2" ]] || [[ -z "$3" ]]; then
      echo "Error: Missing arguments."
      exit 1
    fi
    set_brightness "$2" "$3"
    show_brightness_notif "$2" "$4"
    ;;
  esac
) 9>"$lockfile"
