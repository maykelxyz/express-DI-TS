import getConfig from "./config";
import createServer from "./server";

async function bootstrap() {
    try {
        const config = getConfig();
        const server = createServer(config);
        server.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

bootstrap();
