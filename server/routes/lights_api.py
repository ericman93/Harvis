from flask import Blueprint, jsonify, request
from output.lights import change_color

light_api = Blueprint('light_api', 'light_api')

@fact_api.route('/<color>', methods=['POST'])
def get_fun_fact(hex_color):
    red = int(hex_color[0:2])
    green = int(hex_color[2:4])
    blue = int(hex_color[4:6])
    rgb = (red, green, blue)
    
    return jsonify({
        'rgc': str(rgb)
    })
