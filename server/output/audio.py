from random import shuffle
from proccess import current_process
from pygame import mixer # Should installed seperatly
from multiprocessing import Process
import os

mixer.init()
fade_timout = 700

def play_playlist(playlist):
	playlist_dir = os.path.join('data', 'audio', playlist)
	files = [os.path.join(playlist_dir, f) for f in os.listdir(playlist_dir) if os.path.isfile(os.path.join(playlist_dir, f)) and f.endswith('.mp3')]
	
	shuffle(files)

	__play_songs__(files)
	# p = Process(target=.__play_songs__, args=(files,))
	# p.start()
	# p.join()

def stop():
	mixer.music.fadeout(fade_timout)

def __play_songs__(songs):
	mixer.music.fadeout(fade_timout)

	song = songs[0]
	mixer.music.load(os.path.realpath(song))
	mixer.music.play()

	for song in songs[1:]:
		mixer.music.queue(os.path.realpath(song))