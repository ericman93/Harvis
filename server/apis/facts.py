import requests
import feedparser
from random import randint

class FunFactProvider(object):
	def __init__(self):
		self.providers = [
			#RandomYearFact()
			('ltr', ReditTILProvider()),
			('rtl', SnipFact())
		]

	def get_fact(self):
		provider_index = randint(0, len(self.providers) - 1)
		selected_provider = self.providers[provider_index]
		return selected_provider[1].get_fact(), selected_provider[0]

class RandomYearFact(object):
	def get_fact(self):
		response = requests.get('http://numbersapi.com/random/date')
		return response.text
		

class SnipFact(object):
	def get_fact(self):
		feed = feedparser.parse('https://snip.today/content/rss/')
		items = feed['items']

		return items[randint(0, len(items) - 1)]['title']


class ReditTILProvider(object):
	def get_fact(self):
		feed = feedparser.parse('https://www.reddit.com/r/todayilearned/.rss')
		items = feed['items']

		return items[randint(0, len(items) - 1)]['title']	