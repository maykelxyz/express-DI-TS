#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const program = new Command();

function copyTemplateFile(templatePath: string, targetPath: string) {
    const content = fs.readFileSync(path.join(__dirname, "templates", templatePath), "utf-8");
    const targetFilePath = targetPath.replace(".template", "");
    const targetDir = path.dirname(targetFilePath);

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetFilePath, content);
}

program
    .name("create-express-di-ts")
    .description("Create a new Express application with TypeScript and Dependency Injection")
    .argument("[project-name]", "Name of your project")
    .option("-y, --yes", "Skip prompts and use defaults")
    .action(async (projectName = "express-di-ts-app", options) => {
        try {
            console.log("Creating a new Express DI TypeScript application...");

            // Create project directory
            const projectDir = path.resolve(process.cwd(), projectName);
            if (fs.existsSync(projectDir)) {
                console.error(`Directory ${projectName} already exists!`);
                process.exit(1);
            }
            fs.mkdirSync(projectDir, { recursive: true });
            process.chdir(projectDir);

            // Initialize package.json
            console.log("Initializing package.json...");
            const packageJson = {
                name: projectName,
                version: "1.0.0",
                description: "Express application with TypeScript and Dependency Injection",
                main: "dist/main.js",
                scripts: {
                    start: "node dist/main.js",
                    dev: "tsx watch src/main.ts",
                    build: "tsc -p .",
                    clean: "rimraf dist",
                    prebuild: "npm run clean",
                },
                keywords: ["typescript", "express", "dependency injection", "nodejs"],
                author: "",
                license: "ISC",
                dependencies: {
                    "@types/cors": "^2.8.17",
                    "@types/express": "^5.0.0",
                    "@types/node": "^22.13.5",
                    cors: "^2.8.5",
                    dotenv: "^16.4.7",
                    express: "^4.21.2",
                    tsx: "^4.19.3",
                    typescript: "^5.7.3",
                },
                devDependencies: {
                    rimraf: "^6.0.1",
                },
            };
            fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

            // Create project structure
            console.log("Creating project structure...");

            // Copy template files
            const templates = [
                "main.ts.template",
                "config.ts.template",
                "server.ts.template",
                "interfaces/IDBRepository.ts.template",
                "interfaces/IUserServices.ts.template",
                "controllers/UserController.ts.template",
                "services/UserServices.ts.template",
                "repository/DBRepository.ts.template",
                "routes/UserRoutes.ts.template",
            ];

            templates.forEach((template) => {
                copyTemplateFile(template, path.join("src", template));
            });

            // Create additional directories
            const additionalDirs = ["src/middleware"];

            additionalDirs.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

            // Create basic configuration files
            console.log("Creating configuration files...");

            // tsconfig.json
            const tsConfig = {
                compilerOptions: {
                    target: "ES2020",
                    module: "commonjs",
                    outDir: "./dist",
                    rootDir: "./src",
                    strict: true,
                    esModuleInterop: true,
                    skipLibCheck: true,
                    forceConsistentCasingInFileNames: true,
                },
                include: ["src/**/*"],
                exclude: ["node_modules"],
            };
            fs.writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));

            // .env
            fs.writeFileSync(".env", "PORT=3000\n");

            // .gitignore
            const gitignore = `node_modules/
dist/
.env
`;
            fs.writeFileSync(".gitignore", gitignore);

            // Install dependencies
            console.log("Installing dependencies...");
            execSync("npm install", { stdio: "inherit" });

            console.log("\nSuccess! Created", projectName, "at", projectDir);
            console.log("\nInside that directory, you can run several commands:");
            console.log("\n  npm run dev");
            console.log("    Starts the development server with hot reload");
            console.log("\n  npm run build");
            console.log("    Builds the app for production");
            console.log("\n  npm start");
            console.log("    Runs the built app in production mode");
            console.log("\nWe suggest that you begin by typing:");
            console.log("\n  cd", projectName);
            console.log("  npm run dev\n");
        } catch (error) {
            console.error("Failed to create project:", error);
            process.exit(1);
        }
    });

program.parse();
