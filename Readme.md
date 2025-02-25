# Express TypeScript Dependency Injection Boilerplate

A lightweight, scalable Express.js boilerplate with TypeScript and Dependency Injection that follows clean architecture principles.

## Features

-   TypeScript support
-   Dependency Injection
-   Minimal setup
-   Confgiuration Management
-   Development ready

## Project Structure

```├── src/
│   ├── config.ts                # Application configuration management
│   ├── controllers/             # HTTP request handlers
│   │   └── UserController.ts    # Example controller
│   ├── interfaces/              # TypeScript interfaces
│   │   ├── IDBRepository.ts     # Repository interface
│   │   └── IUserServices.ts     # Service interface
│   ├── main.ts                  # Application entry point
│   ├── repository/              # Data access layer
│   │   └── DBRepository.ts      # Database operations implementation
│   ├── routes/                  # Express routes as factory functions
│   │   └── UserRoutes.ts        # User-related routes
│   ├── server.ts                # Express server setup with DI container
│   └── services/                # Business logic layer
│       └── UserServices.ts      # User-related business logic
├── .env                         # Environment variables (not in repo)
├── .env.example                 # Environment variables template
├── package.json                 # Project dependencies
└── tsconfig.json                # TypeScript configuration
```

## Getting Started

### Prerequisites

-   Node.js (v14+)
-   TypeScript (v5+)
-   Express (v4+)

### Installation

1. Clone the repository

```bash
git clone https://github.com/maykelxyz/express-di-ts.git
cd express-express-di-ts
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on the `.env.example`

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

## Available Scripts

-   `npm run dev`: Start the development server
-   `npm run build`: Build the project
-   `npm run start`: Start the production server
-   `npm run clean`: Clean the dist directory

## Adding new Features

### Creating a new Route

1. Define your service interface in `interfaces/`
2. Implement your servince in `services/`
3. Create a controller in `controllers/`
4. Create a route factory in `routes/`
5. Add the route to the server in `server.ts`
