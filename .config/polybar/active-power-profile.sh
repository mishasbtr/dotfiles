#!/bin/sh

power_profile_print() {
    powerprofilesctl get | while read -r REPLY; do
      case $REPLY in
        "performance")
          printf "󱐋"
          ;;
        "balanced")
          printf " "
          ;;
        "power-saver")
          printf " "
          ;;
        *)
          printf "power profile: $REPLY"
          ;;
      esac
    done
}

power_profile_print

