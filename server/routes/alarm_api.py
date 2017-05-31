from flask import Blueprint, jsonify, request

alarm_api = Blueprint('alarm_api', 'alarm_api')

@alarm_api.route('/', methods=['POST'])
def set_alarm():
	pass

@alarm_api.route('/', methods=['GET'])
def get_alarms():
	pass

