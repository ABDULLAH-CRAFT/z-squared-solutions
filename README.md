
# Z Squared Solutions

**Powering Your Next Stage of Growth.**

A responsive business website for Z Squared Solutions, a B2B agency providing lead generation, recruitment support, and sales development.

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- TanStack Query
- React Router

### Backend
- NestJS
- TypeScript
- TypeORM
- PostgreSQL

## Project Structure

- `frontend/` — React web application
- `backend/` — NestJS API
- `docs/` — Architecture and project documentation

## Prerequisites

- Node.js LTS
- npm
- PostgreSQL

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd z-squared-solutions
```

### 2. Install frontend dependencies

```bash
cd frontend
npm ci
```

Copy `.env.example` to `.env` and configure the frontend environment variables.

### 3. Install backend dependencies

```bash
cd ../backend
npm ci
```

Copy `.env.example` to `.env` and configure your local PostgreSQL credentials.

### 4. Start the applications

Frontend, from `frontend/`:

```bash
npm run dev
```

Backend, from `backend/`:

```bash
npm run start:dev
```

## Environment Variables

Never commit real environment files, passwords, API keys, or other secrets.

Use the committed `.env.example` files as configuration templates.

## Database

PostgreSQL is used for persistent data. Database migrations and production configuration will be documented as they are implemented.

## Testing and Builds

Run the scripts defined in each application's `package.json`. Add the project's automated testing commands here as the test suite is implemented.

## Deployment

The frontend can be deployed to Vercel, Netlify, or Cloudflare Pages. The backend requires a compatible Node.js host and a reachable PostgreSQL database.

Production deployment instructions will be added after the application and contact workflow are implemented.

## Business Contact

zubair@z2solution.com

## Project Status

Under development. The website should not be considered live until it has been deployed and verified.
