import dotenv from "dotenv";
dotenv.config();
export interface Config {
    port: number;
}

function getConfig(): Config {
    const requiredEnvVars = ["PORT"];
    requiredEnvVars.forEach((envVar) => {
        if (!process.env[envVar]) {
            throw new Error(`${envVar} is not set`);
        }
    });
    const config: Config = {
        port: Number(process.env.PORT),
    };
    return config;
}

export default getConfig;
