#!/bin/bash

word=$(rofi -dmenu -p 'Type in the word to search')
sdcv -n "$word" | rofi -dmenu -p 'Dictionary lookup result'
