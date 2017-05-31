from flask import Blueprint, jsonify, request
from output.audio import audio_manager
import output.lights as lights

mode_api = Blueprint('mode_api', 'mode_api')

@mode_api.route('/<mode>', methods=['POST'])
def set_mode(mode):
	audio_manager.play_playlist(mode)

	if mode == 'romantic':
		lights.on()

	return jsonify({"a": "v"})


@mode_api.route('/', methods=['DELETE'])
def stop_mode():
	audio_manager.stop()
	lights.off()
	return jsonify()
