from flask import Blueprint, jsonify, request
import output.audio as audio
import output.lights as lights

mode_api = Blueprint('mode_api', 'mode_api')

@mode_api.route('/<mode>', methods=['POST'])
def set_mode(mode):
	audio.play_playlist(mode)

	if mode == 'romantic':
		lights.on()

	return jsonify({"a": "v"})


@mode_api.route('/', methods=['DELETE'])
def stop_mode():
	audio.stop()
	lights.off()
	return jsonify()
