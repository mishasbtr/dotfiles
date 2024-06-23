#!/bin/bash

function list_devices() {
	udiskie-info -a
}

function get_mount_point() {
	local device="$1"
	lsblk -o NAME,MOUNTPOINT | grep -w "$(basename "$device")" | awk '{print $2}'
}

function mount_device() {
	local device_path="$1"
	if udiskie-mount "$device_path"; then
		echo "Mounted $device_path"
	else
		echo "Failed to mount $device_path"
	fi
}

function unmount_device() {
	local device_path="$1"
	if udiskie-umount "$device_path"; then
		echo "Unmounted $device_path"
	else
		echo "Failed to unmount $device_path"
	fi
}

function open_terminal() {
	local mount_point="$1"
	alacritty --working-directory="$mount_point" &
}

function display_device_options() {
	local device_path="$1"
	local mount_point="$2"

	if [ -n "$mount_point" ]; then
		options="Open terminal at $mount_point\nUnmount\nGo back"
	else
		options="Mount\nGo back"
	fi

	selected_option=$(echo -e "$options" | rofi -dmenu -i -p "Select option")

	if [ -z "$selected_option" ]; then
		echo "No option selected, returning to main menu."
		main_menu
		return
	fi

	case "$selected_option" in
	"Open terminal at $mount_point")
		open_terminal "$mount_point"
		;;
	"Unmount")
		unmount_device "$device_path"
		;;
	"Mount")
		mount_device "$device_path"
		;;
	"Go back")
		main_menu
		;;
	*)
		echo "Invalid option."
		main_menu
		;;
	esac
}

function main_menu() {
	devices=$(list_devices)

	device_list=""
	while IFS= read -r device; do
		mount_point=$(get_mount_point "$device")
		if [ -n "$mount_point" ]; then
			status="Mounted at $mount_point"
		else
			status="Unmounted"
		fi
		device_list+="$device - $status\n"
	done <<<"$devices"

	device_list=$(echo -e "$device_list" | sed '/^$/d')

	selected=$(echo -e "$device_list" | rofi -dmenu -i -p "Select device")

	if [ -z "$selected" ]; then
		echo "No device selected."
		exit 1
	fi

	device_path=$(echo "$selected" | awk '{print $1}')

	mount_point=$(get_mount_point "$device_path")

	display_device_options "$device_path" "$mount_point"
}

main_menu
