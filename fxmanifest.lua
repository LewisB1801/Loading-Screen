-- Resource Metadata
fx_version 'adamant'
games { 'gta5' }

author 'LewisB1801'
description 'FiveM Loading Screen'
version '1.0.0'

client_script 'client.lua'
loadscreen 'index.html'

files {
    'index.html',
    'styles.css',
    'script.js',
    'Assets/logo.png',
    'Assets/icons/alt.png',
    'Assets/icons/f1.png',
    'Assets/icons/f2.png',
    'Assets/icons/space.png',
    'Assets/icons/tab.png',
    'Assets/icons/z.png',
    'Assets/music.mp3',
}

loadscreen_manual_shutdown 'yes'

lua54 'yes'