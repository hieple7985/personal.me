# Personal Me v2 — Nuxt 3 + Firebase

> Website cá nhân xây dựng bằng Nuxt 3 (Vue 3), build tĩnh và triển khai trên Firebase Hosting. Ứng dụng dùng Firebase Authentication, Firestore và Storage qua plugin client.

## 🔗 Sản phẩm (Production)
- https://personal-me-v2.web.app/

## 🧭 Tổng quan
- SPA (ssr: false), target: `static` để dễ dàng deploy lên Firebase Hosting
- Cấu hình runtime đọc biến môi trường từ `.env` (mục runtimeConfig trong `nuxt.config.ts`)
- Firebase được khởi tạo tại `plugins/firebase.client.ts` và được inject vào Nuxt app

## 🛠️ Công nghệ chính
- Nuxt 3 + Vue 3 + TypeScript
- Firebase (Auth, Firestore, Storage)
- Triển khai: Firebase Hosting

## 🗂️ Cấu trúc thư mục (rút gọn)
- `app.vue`, `app.config.ts`
- `nuxt.config.ts` — cấu hình Nuxt (ssr=false, target='static', plugins, runtimeConfig)
- `pages/` — trang và routing
- `plugins/firebase.client.ts` — khởi tạo Firebase và provide `$auth`, `$firestore`, `$storage`
- `public/` — static assets (favicon, robots.txt, ...)
- `server/` — cấu hình TypeScript server-side (nếu dùng)
- `docs/` — tài liệu đi kèm

## ✅ Yêu cầu hệ thống
- Node.js >= 18
- Yarn (khuyến nghị) hoặc npm
- (Triển khai) Firebase CLI: `npm i -g firebase-tools`

## 🚀 Bắt đầu
Cài đặt phụ thuộc:

```bash
yarn install
# hoặc
npm install
```

Chạy môi trường development (mặc định http://localhost:3000):

```bash
yarn dev --open
# hoặc
npm run dev -- --open
```

Build production và preview cục bộ:

```bash
yarn build && yarn preview
# hoặc
npm run build && npm run preview
```

Sinh site tĩnh (static generation):

```bash
yarn generate
# hoặc
npm run generate
```

## 🔐 Biến môi trường (.env)
Tạo file `.env` ở gốc dự án và điền các biến sau (đồng bộ với `runtimeConfig.public` trong `nuxt.config.ts`):

```bash
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

## 🔥 Firebase trong Nuxt
Firebase được khởi tạo ở `plugins/firebase.client.ts` và được inject vào app. Bạn có thể sử dụng trong component/composable như sau:

```ts
const { $auth, $firestore, $storage } = useNuxtApp()
```

## 🚢 Triển khai lên Firebase Hosting
1) Cài Firebase CLI (nếu chưa có):
```bash
npm i -g firebase-tools
```
2) Đăng nhập:
```bash
firebase login
```
3) (Lần đầu) Khởi tạo dự án Firebase trong repo nếu cần:
```bash
firebase init
```
Chọn "Hosting" khi được hỏi tính năng.

4) Deploy:
```bash
yarn deploy
# hoặc
npm run deploy
```
Script `deploy` chạy `nuxt generate` rồi `firebase deploy --only hosting` (xem `package.json`).

## 📚 Tài liệu bổ sung
- Hướng dẫn thiết lập chi tiết: `docs/code_setup.md`
- Tổng hợp tính năng website (v2): `docs/features_v2.md`

---
Cần thêm mục nào trong README (CI/CD, test, conventions, v.v.) bạn báo mình cập nhật nhé!