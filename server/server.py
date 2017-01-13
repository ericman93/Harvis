from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from routes.weather_api import weather_api
from routes.facts_api import fact_api

def create_app():
    app = Flask(__name__)

    app.register_blueprint(weather_api, url_prefix='/weather')
    app.register_blueprint(fact_api, url_prefix='/fact')
    
    CORS(app)
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)