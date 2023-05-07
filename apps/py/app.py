from flask import Flask
import requests
import os

from opentelemetry import trace
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

trace.set_tracer_provider(
    TracerProvider(
        resource=Resource.create({SERVICE_NAME: "py-service"})
    )
)
tracer = trace.get_tracer(__name__)

jaeger_exporter = JaegerExporter(
    agent_host_name='jaeger',
    agent_port=6831,
    collector_endpoint='http://jaeger:14268/api/traces',
)

# Create a BatchSpanProcessor and add the exporter to it
span_processor = BatchSpanProcessor(jaeger_exporter)

trace.get_tracer_provider().add_span_processor(span_processor)
with tracer.start_as_current_span('foo'):
    print('Hello world!')


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
