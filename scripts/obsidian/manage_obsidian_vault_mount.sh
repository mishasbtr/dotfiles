#!/bin/bash

source "$HOME/scripts/obsidian_vault_config.sh"

if mountpoint -q "$MOUNT_POINT"; then
  CHOICE=$(echo -e "Yes\nNo" | rofi -dmenu -p "Vault is mounted. Unmount it?")
  if [ "$CHOICE" = "Yes" ]; then
    fusermount -u "$MOUNT_POINT"
    if mountpoint -q "$MOUNT_POINT"; then
      notify-send "Failed to unmount the vault."
      exit 1
    else
      notify-send "Vault unmounted successfully."
      exit 0
    fi
  else
    notify-send "Vault remains mounted."
    exit 0
  fi
else
  CHOICE=$(echo -e "Yes\nNo" | rofi -dmenu -p "Vault is not mounted. Mount it?")
  if [ "$CHOICE" = "Yes" ]; then
    ATTEMPT=1
    while [ $ATTEMPT -le "$MAX_PASSWORD_ATTEMPTS" ]; do
      PASSWORD=$(rofi -dmenu -password -p "Enter vault password")
      if [ -z "$PASSWORD" ]; then
        notify-send "Vault mounting canceled."
        exit 1
      fi
      exec 3<<<"$PASSWORD"
      gocryptfs --passfile /dev/fd/3 "$ENCRYPTED_DIR" "$MOUNT_POINT"
      exec 3<&-
      unset PASSWORD
      if mountpoint -q "$MOUNT_POINT"; then
        notify-send "Vault mounted successfully."
        CHOICE=$(echo -e "Yes\nNo" | rofi -dmenu -p "Open Obsidian?")
        if [ "$CHOICE" = "Yes" ]; then
          $OBSIDIAN_APP "$MOUNT_POINT" &
        else
          notify-send "Obsidian not opened."
        fi
        exit 0
      else
        notify-send "Incorrect password. Attempt $ATTEMPT of $MAX_PASSWORD_ATTEMPTS."
        ((ATTEMPT++))
        if [ $ATTEMPT -gt "$MAX_PASSWORD_ATTEMPTS" ]; then
          notify-send "Failed to mount the vault after $MAX_PASSWORD_ATTEMPTS attempts."
          exit 1
        fi
      fi
    done
  else
    notify-send "Vault remains unmounted."
    exit 0
  fi
fi
