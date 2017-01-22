from flask import Blueprint, jsonify, request
from output.audio import AudioPlayer

mode_api = Blueprint('mode_api', 'mode_api')
audio_player = AudioPlayer()

@mode_api.route('/<mode>', methods=['POST'])
def set_mode(mode):
	audio_player.play_playlist(mode)

	return jsonify({"a": "v"})


@mode_api.route('/', methods=['DELETE'])
def stop_mode():
	audio_player.stop()
	return jsonify()
