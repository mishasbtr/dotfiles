#!/bin/bash

word=$(rofi -dmenu -p 'Type in the word to search')
[ -z "$word" ] && exit
sdcv -n "$word" | rofi -dmenu -p 'Dictionary lookup result'
