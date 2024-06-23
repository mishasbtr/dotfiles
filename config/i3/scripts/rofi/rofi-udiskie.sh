#!/bin/bash

# Function to list devices using udiskie-info
list_devices() {
	udiskie-info -a
}

# Function to check mount status using lsblk
get_mount_point() {
	local device="$1"
	lsblk -o NAME,MOUNTPOINT | grep -w "$(basename "$device")" | awk '{print $2}'
}

# Function to mount a device
mount_device() {
	local device_path="$1"
	if udiskie-mount "$device_path"; then
		echo "Mounted $device_path"
	else
		echo "Failed to mount $device_path"
	fi
}

# Function to unmount a device
unmount_device() {
	local device_path="$1"
	if udiskie-umount "$device_path"; then
		echo "Unmounted $device_path"
	else
		echo "Failed to unmount $device_path"
	fi
}

# Function to open the mount directory in alacritty terminal
open_terminal() {
	local mount_point="$1"
	alacritty --working-directory="$mount_point" &
}

# Function to display the device options menu
display_device_options() {
	local device_path="$1"
	local mount_point="$2"

	if [ -n "$mount_point" ]; then
		options="Open terminal at $mount_point\nUnmount\nGo back"
	else
		options="Mount\nGo back"
	fi

	selected_option=$(echo -e "$options" | rofi -dmenu -i -p "Select option")
	echo "Selected option: $selected_option" # Debug print

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

# Main menu function
main_menu() {
	# Get the list of devices
	devices=$(list_devices)
	echo "Devices: $devices" # Debug print

	# Prepare the device list for rofi
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

	# Remove the trailing newline
	device_list=$(echo -e "$device_list" | sed '/^$/d')

	echo -e "$device_list" # Debug print

	# Show the list of devices using rofi
	selected=$(echo -e "$device_list" | rofi -dmenu -i -p "Select device")
	echo "Selected: $selected" # Debug print

	# Check if a device was selected
	if [ -z "$selected" ]; then
		echo "No device selected."
		exit 1
	fi

	# Extract the device path from the selection
	device_path=$(echo "$selected" | awk '{print $1}')
	echo "Device path: $device_path" # Debug print

	# Get the mount point of the selected device
	mount_point=$(get_mount_point "$device_path")
	echo "Mount point: $mount_point" # Debug print

	# Display the device options menu
	display_device_options "$device_path" "$mount_point"
}

# Start the main menu
main_menu
