from flask import Blueprint, jsonify, request
from apis.weather import get_weather

weather_api = Blueprint('weather_api', 'weather_api')

@weather_api.route('/', methods=['GET'])
def get_current_weather():
	weather = get_weather()

	return jsonify({
		'temperature': weather['main']['temp'],
		'desc': weather['weather'][0]['main']
	})