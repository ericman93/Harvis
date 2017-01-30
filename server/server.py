from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from routes.weather_api import weather_api
from routes.facts_api import fact_api
from routes.modes_api import mode_api
from routes.core_api import core_api

def create_app():
    app = Flask(__name__)

    app.register_blueprint(weather_api, url_prefix='/weather')
    app.register_blueprint(fact_api, url_prefix='/fact')
    app.register_blueprint(mode_api, url_prefix='/mode')
    app.register_blueprint(core_api)
    
    CORS(app)
    return app

app = create_app()

if __name__ == '__main__':
    app.run(host= '0.0.0.0', debug=True)