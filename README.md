# Routine Revo - Mobile App

This is the **Member-facing mobile application** for the **Routine Revo** platform. It is built with **React Native (Expo)** and allows gym members to view their assigned workout routines, track their progress, and manage their profiles.

## 📱 Project Overview

* **Target Audience:** Gym Members (Clients).
* **Goal:** Replace paper workout cards with a digital interface for viewing exercises and logging sets, reps, and loads.
* **Platform:** Android (Primary target) & iOS via Expo.

---

## 🎨 Design System

The app follows a specific color palette to ensure consistency with the web dashboard:

* **Background:** `#ffffff` (White)
* **Text / Primary:** `#333333` (Dark Gray)
* **Secondary Accent:** `#fd9248` (Orange - Highlights/Secondary info)
* **Primary Action:** `#fa1768` (Pink/Red - Buttons/CTAs)

---

## 🛠️ Tech Stack

This project uses the **Expo Managed Workflow** with a modern React stack:

* **Framework:** [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
* **Language:** TypeScript
* **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
* **State Management:** [TanStack Query](https://tanstack.com/query/latest) (React Query) for server state.
* **Forms:** React Hook Form + Zod Validation.
* **Storage:** Expo Secure Store (for JWT persistence).
* **HTTP Client:** Axios.

---

## 📦 Key Features

### 🔐 Authentication
* **Login:** Secure JWT-based authentication.
* **Password Recovery:** Native flow to request password resets via email.

### 🏋️‍♂️ Workout Experience
* **My Routines:** List of assigned routines with visual alerts for expired plans.
* **Workout Detail:** View exercises, prescribed sets/reps, and images.
* **Workout Logging:** Interactive inputs to record **Load**, **Reps**, and **Sets** performed.
* **Completion:** "Finish Workout" action triggers server-side adherence calculations.

### 👤 Profile
* **My Profile:** View and edit personal contact information.

---

## 📂 Project Structure

We follow a **Feature-based Architecture** to keep domain logic organized:
```
routine-revo-mobile
├── app/                   # Expo Router (Screens/Navigation)
│   ├── (auth)/            # Auth Group (Login, Reset)
│   │   ├── login.tsx
│   │   └── _layout.tsx
│   ├── (app)/             # Main App Group (Protected)
│   │   ├── index.tsx      # Home (Routines List)
│   │   ├── profile.tsx
│   │   └── _layout.tsx
│   └── _layout.tsx        # Root Layout
│
├── src/
│   ├── components/        # Reusable UI (Buttons, Inputs)
│   │   ├── ui/
│   │   └── forms/
│   │
│   ├── features/          # Feature-based logic (matches Backend)
│   │   ├── auth/
│   │   │   ├── api/       # React Query hooks (useLogin)
│   │   │   └── schemas/   # Zod schemas
│   │   ├── routines/      # Routine viewing logic
│   │   └── workout/       # Execution/Logging logic
│   │
│   ├── lib/               # Configs (axios, query-client)
│   └── types/             # Global TS types
│
├── tailwind.config.js
└── babel.config.js
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
