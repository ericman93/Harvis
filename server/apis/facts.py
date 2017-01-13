import requests
from random import randint

class FunFactProvider(object):
	def __init__(self):
		self.providers = [
			RandomYearFact()
		]

	def get_fact(self):
		provider_index = randint(0, len(self.providers) - 1)
		return self.providers[provider_index].get_fact()

class RandomYearFact(object):
	def get_fact(self):
		response = requests.get('http://numbersapi.com/random/date')
		return response.text
		

class ReditTILProvider(object):
	def get_fact(self):
		# Get fact from TIL subreddit 
		pass