import { Resource } from "@otel/resources";
import { SemanticResourceAttributes } from "@otel/semantic-conventions";
import { NodeTracerProvider } from "@otel/sdk-trace-node";
import { registerInstrumentations } from "@otel/instrumentation";
import { ConsoleSpanExporter, BatchSpanProcessor } from "@otel/sdk-trace-base";
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express'

export function instrument() {
    // Optionally register instrumentation libraries
    registerInstrumentations({
        instrumentations: [
            new HttpInstrumentation(),
            new ExpressInstrumentation()
        ],
    });

    const resource =
        Resource.default().merge(
            new Resource({
                [SemanticResourceAttributes.SERVICE_NAME]: "nodejs-service",
                [SemanticResourceAttributes.SERVICE_VERSION]: "0.1.0",
            })
        );

    const provider = new NodeTracerProvider({
        resource,
    });
    const exporter = new ConsoleSpanExporter();
    const processor = new BatchSpanProcessor(exporter);

    provider.addSpanProcessor(processor);
    provider.register();
}
