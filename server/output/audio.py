from random import shuffle
from proccess import current_process
from pygame import mixer # Should installed seperatly
from multiprocessing import Process
import os

class AudioPlayer(object):
	def __init__(self):
		mixer.init()
		self.fade_timout = 700

	def play_playlist(self, playlist):
		playlist_dir = os.path.join('data', 'audio', playlist)
		files = [os.path.join(playlist_dir, f) for f in os.listdir(playlist_dir) if os.path.isfile(os.path.join(playlist_dir, f)) and f.endswith('.mp3')]
		
		shuffle(files)

		self.__play_songs__(files)
		# p = Process(target=self.__play_songs__, args=(files,))
		# p.start()
		# p.join()

	def stop(self):
		mixer.music.fadeout(self.fade_timout)

	def __play_songs__(self, songs):
		mixer.music.fadeout(self.fade_timout)


		song = songs[0]
		mixer.music.load(os.path.realpath(song))
		mixer.music.play()

		for song in songs[1:]:
			mixer.music.queue(os.path.realpath(song))


# class LinuxAudioPlayer(AudioPlayer):
# 	pass

# class WindowsAudioPlayer(AudioPlayer): 
# 	pass

