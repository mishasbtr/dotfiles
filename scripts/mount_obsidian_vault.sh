#!/bin/bash

source "$HOME/scripts/obsidian_vault_config.sh"

is_obsidian_running() {
  pgrep -x obsidian >/dev/null 2>&1
}

if mountpoint -q "$MOUNT_POINT"; then
  MOUNTED_BY_SCRIPT=false
else
  MOUNTED_BY_SCRIPT=true
  ATTEMPT=1
  while [ $ATTEMPT -le $MAX_PASSWORD_ATTEMPTS ]; do
    PASSWORD=$(rofi -dmenu -password -p "Enter vault password")
    if [ -z "$PASSWORD" ]; then
      notify-send "Vault unlocking canceled."
      exit 1
    fi
    exec 3<<<"$PASSWORD"
    gocryptfs --passfile /dev/fd/3 "$ENCRYPTED_DIR" "$MOUNT_POINT"
    exec 3<&-
    unset PASSWORD
    if mountpoint -q "$MOUNT_POINT"; then
      notify-send "Vault mounted successfully."
      break
    else
      notify-send "Incorrect password. Attempt $ATTEMPT of $MAX_PASSWORD_ATTEMPTS."
      ((ATTEMPT++))
      if [ $ATTEMPT -gt $MAX_PASSWORD_ATTEMPTS ]; then
        notify-send "Failed to mount the vault after $MAX_PASSWORD_ATTEMPTS attempts."
        exit 1
      fi
    fi
  done
fi

if is_obsidian_running; then
  notify-send "Obsidian is already running. Vault will remain mounted."
  $OBSIDIAN_APP "$MOUNT_POINT" &
  exit 0
else
  $OBSIDIAN_APP "$MOUNT_POINT"
  if [ "$MOUNTED_BY_SCRIPT" = true ]; then
    fusermount -u "$MOUNT_POINT"
    notify-send "Vault unmounted after Obsidian closed."
  fi
  exit 0
fi
