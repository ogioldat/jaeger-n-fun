const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
    AlwaysOnSampler,
    BatchSpanProcessor,
} = require('@opentelemetry/sdk-trace-base');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')

const resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'nodejs-service',
});

const instrumentations = [
    new ExpressInstrumentation(),
    getNodeAutoInstrumentations()
];

const spanProcessor = new BatchSpanProcessor(
    new JaegerExporter({
        endpoint: 'http://jaeger:14268/api/traces'
    }),
);

const sampler = new AlwaysOnSampler();

const sdk = new NodeSDK({
    sampler,
    resource,
    instrumentations,
    spanProcessor,
})

sdk.start()