from flask import Blueprint, jsonify, request
import output.lights as lights

lights_api = Blueprint('lights_api', 'lights_api')

@lights_api.route('/', methods=['POST'])
def lights_on():
    lights.on()
    
    return jsonify({})

@lights_api.route('/', methods=['DELETE'])
def lights_off():
    lights.off()
    
    return jsonify({})


@lights_api.route('/', methods=['GET'])
def light_status():
    return jsonify({
    	'status': True	
	})
