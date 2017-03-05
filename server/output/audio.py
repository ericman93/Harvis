from random import shuffle
from proccess import current_process
from pygame import mixer # Should installed seperatly
from multiprocessing import Process
import os
import pafy
import random
import subprocess
import os 

class LocalFile(object):
	def __init__(self):
		self.mixer.init()
		self.fade_timout = 700

	def play_playlist(self, playlist):
		playlist_dir = os.path.join('data', 'audio', playlist)
		files = [os.path.join(playlist_dir, f) for f in os.listdir(playlist_dir) if os.path.isfile(os.path.join(playlist_dir, f)) and f.endswith('.mp3')]
		
		shuffle(files)

		self.__play_songs__(files)
		# p = Process(target=.self.__play_songs__, args=(files,))
		# p.start()
		# p.join()

	def stop(self):
		self.mixer.music.fadeout(self.fade_timout)

	def __play_songs__(self, songs):
		self.mixer.music.fadeout(self.fade_timout)

		song = songs[0]
		self.mixer.music.load(os.path.realpath(song))
		self.mixer.music.play()

		for song in songs[1:]:
			self.mixer.music.queue(os.path.realpath(song))

class Youtube(object):
	def __init__(self):
		self.playlists = {
			'morning': 'https://www.youtube.com/watch?v=MGAjlqg5URg&list=PLOkT4Kw_fkkXxhKh1AWp40N_g4XVm4TAL',
			'romantic': 'https://www.youtube.com/playlist?list=PLOkT4Kw_fkkUiJzrmXrLu0-sQ15MpornY',
			'dev': 'https://www.youtube.com/playlist?list=PLOkT4Kw_fkkU0agDS5usF9KNmtHmWEdw4'
		}

	def play_playlist(self, playlist_name):
		playlist = pafy.get_playlist(self.playlists[playlist_name])
		
		urls = [item['pafy'].getbest().url for item in playlist['items']]
		random.shuffle(urls)

		self.stop()

		process = subprocess.Popen(['mpv', '--no-video', urls[0]])
		self.process_id = process.pid 
		

	def stop(self):
		if self.process_id is not None:
			os.system("kill %s" % self.process_id)


# local_fiels = LocalFile()
youtube = Youtube()

def stop():
	youtube.stop()
	# local_fiels.stop()
