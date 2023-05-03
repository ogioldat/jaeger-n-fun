from flask import Flask
import requests
import os

def get_nodejs_service_url():
    url = os.environ['NODEJS_SERVICE_URL']

    if url is None:
        raise Exception('No NODEJS_SERVICE_URL')
    return url

app = Flask(__name__)

@app.route('/')
def ping():
    return 'Hello from Python app!'

@app.route('/nodejs-service')
def ping_nodejs_service():
    service_url = get_nodejs_service_url()
    ping_url = f'http://{service_url}'
    res = requests.get(ping_url)

    return res.text