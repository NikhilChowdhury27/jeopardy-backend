# My App

This is a Node.js application using Express, Sequelize with PostgreSQL for database management, Bull with Redis for queuing, and Redis for caching. The application also uses dotenv for environment variables and Winston for logging.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Running the Application Locally

### 1. Clone the Repository

```bash
git clone <repository-url>
cd my-app
```

### Install Dependencies

```bash
npm i
```

### Configure Environment Variables

```bash
NODE_ENV=development
PORT=3000

DATABASE_URL=postgres://postgres:password@localhost:5432/mydatabase
REDIS_URL=redis://localhost:6379

JWT_SECRET=your_jwt_secret_key
LOG_LEVEL=info
```

## Running app with Docker 

### Start PostgreSQL and Redis Containers Individually

```bash
docker run --name my-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres:13


docker run --name my-redis -p 6379:6379 -d redis:6

npm run dev

```

## Running the Application with Docker Compose

```bash
docker-compose up --build
 
docker-compose down

```