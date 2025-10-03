# Issues

## Current Issues

* **Issue-1**: Default Firebase index.html conflicts with Nuxt application
  * The `/public/index.html` file contains Firebase's default welcome page which may conflict with the Nuxt application's routing
  * This file should be removed or replaced with a minimal placeholder

* **Issue-2**: Incomplete Nuxt configuration
  * The `nuxt.config.ts` file contains commented placeholders (`// ... other configurations ...`) without actual implementation
  * Configuration needs to be completed with proper values

* **Issue-3**: Missing Firebase Analytics configuration
  * The `.env.example` file has a commented out `measurementId` for Google Analytics
  * Firebase Analytics integration is referenced in public/index.html but not properly configured in the application

* **Issue-4**: Potential security issue with Firebase configuration
  * Firebase API keys and configuration are exposed in client-side code
  * Consider implementing proper security rules for Firestore and Storage

* **Issue-5**: Minimal error handling in Firebase initialization
  * The `firebase.client.ts` plugin lacks proper error handling for initialization failures
  * No fallback mechanism if Firebase services are unavailable

* **Issue-6**: Incomplete documentation
  * The `code_setup.md` file has incomplete sections (e.g., "## Firebase Configuration" followed by "...")
  * Documentation should be completed with detailed information

* **Issue-7**: Unused components in app.vue
  * The `app.vue` file includes `NuxtWelcome` component which is typically used for development
  * Should be replaced with actual application layout

* **Issue-8**: Minimal content in index.vue
  * The main page contains only placeholder content
  * Needs to be developed with actual application content

* **Issue-9**: No type definitions for Firebase services
  * TypeScript integration with Firebase services lacks proper type definitions
  * Consider adding type interfaces for better type safety

* **Issue-10**: No testing framework or tests
  * The project lacks any testing setup or test files
  * Consider implementing unit and integration tests

## Recommendations

* Implement proper error handling throughout the application
* Complete the documentation with detailed information
* Add proper type definitions for better TypeScript integration
* Set up a testing framework and write tests
* Implement proper security rules for Firebase services
* Replace placeholder content with actual application content

## Status Update (2025-10-03)

Resolved:
- [x] Issue-1: Firebase default index.html conflict (no public/index.html; using Nuxt generate)
- [x] Issue-2: Nuxt configuration completed (modules, css, content, ssr=false, routeRules)
- [x] Issue-5: Firebase initialization guard + try/catch
- [x] Issue-7: Removed NuxtWelcome from app.vue

Open:
- [ ] Issue-3: GA measurement ID integration (optional)
- [ ] Issue-8: Expand index.vue content
- [ ] Issue-9: Add type definitions/usages for Firebase services
- [ ] Issue-10: Testing setup

New follow-ups:
- [ ] Dark Mode toggle (now implementing)
- [ ] Navigation: active state + mobile menu
- [ ] Code highlighting with Shiki
- [ ] Fine-tune typography scale
