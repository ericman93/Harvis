from flask import Blueprint, jsonify, request
from output.audio import stop as stop_music
from output.lights import off as stop_lights

core_api = Blueprint('core_api', 'core_api')

@core_api.route('/stop', methods=['POST'])
def stop_all_outputs():
	stop_music()
	stop_lights()
	
	return jsonify({})

