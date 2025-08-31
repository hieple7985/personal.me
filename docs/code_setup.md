# Nuxt 3 + Firebase - Setup Guide

This project uses Nuxt 3 and Firebase. Refer to the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) for more details.

## Project Structure

- **Framework**: Nuxt 3 (Vue.js)
- **Hosting**: Firebase Hosting
- **Backend Services**: Firebase (Authentication, Firestore, Storage)

## Environment Setup

1. Copy the `.env.example` file to `.env` and fill in your Firebase information:


2. Install dependencies:

```bash
yarn install
```

## Development Server

Start the development server at `http://localhost:3000`:

```bash
yarn dev --open
```

## Production Environment

Build the application for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

## Deploying to Firebase Hosting

To deploy your Nuxt 3 application to Firebase Hosting, follow these steps:

1. Install Firebase CLI globally (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project (if not already done):
   ```bash
   firebase init
   ```
   Select "Hosting" when prompted for features.

4. Deploy to Firebase:
   ```bash
   yarn deploy
   ```

Note: The `deploy` script in `package.json` combines both the build and deploy steps:
```json
"deploy": "nuxt generate && firebase deploy --only hosting"
```

## Firebase Configuration

The project uses the Firebase client plugin to initialize and provide Firebase services to the application. The services used include:

- Authentication (user authentication)
- Firestore (database)
- Storage (file storage)

Firebase configuration is read from environment variables through `useRuntimeConfig()`.

## Nuxt Configuration

The project is configured with:
- SSR: false (Single Page Application)
- Target: static (for deployment on Firebase Hosting)
- Plugins: firebase.client.ts