from flask import Blueprint, jsonify, request
from apis.facts import FunFactProvider

fact_api = Blueprint('fact_api', 'fact_api')

@fact_api.route('/', methods=['GET'])
def get_fun_fact():
	fact = FunFactProvider().get_fact()
	
	return jsonify({
		'fact': fact[0],
		'dir': fact[1]
	})

