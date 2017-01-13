import requests
from config import apis_config

tel_aviv_id = 293397
#tel_aviv_district_id = 293396

def get_weather():
	url = 'http://api.openweathermap.org/data/2.5/weather?id={city_id}&appid={api_key}&units=metric'.format(city_id=tel_aviv_id, api_key=apis_config['openweathermap'])
	response = requests.get(url)

	return response.json()
