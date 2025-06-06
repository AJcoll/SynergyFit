# SynergyFit AI: Execution Plan

This document outlines the development strategy for the SynergyFit AI application, focusing on an iterative, phased approach.

---

## Phase 1: Minimum Viable Product (MVP)

The primary goal of Phase 1 is to rapidly develop and launch a core set of features to validate the product idea and gather user feedback. This phase corresponds to the "Freemium" tier defined in the PRD.

### Key Features for MVP:
- **FR 1.1-1.3: Onboarding & Goal Setting:** User data collection.
- **FR 2: Manual Macronutrient & Calorie Tracking:** Core food logging loop.
- **FR 3: Manual Workout Log & Planner:** Core workout logging loop.
- **FR 5: Basic Progress Tracking:** Simple dashboard and charts.
- **FR 7: Core User Experience:** An intuitive and clean UI.

### Technical Stack for MVP:
- **Cross-Platform Framework:** React Native
- **Backend-as-a-Service (BaaS):** Supabase (for Auth, Database, Storage)
- **Database:** PostgreSQL (managed by Supabase)

---

## Phase 2: Premium AI & Integration Features

Once the MVP is stable, we will develop the core premium features.

### Key Features for Phase 2:
- **FR 4.1-4.5: AI-Powered Planning & Coaching**
- **FR 6: Integrations (Apple HealthKit, Google Fit)**
- **Monetization:** Implement premium subscription model.

### Technical Additions for Phase 2:
- **AI Microservice:** A separate Python service for handling complex AI computations.

---

## Front-End Architecture Blueprint

This section outlines the planned screen and navigation structure for the application.

### 1. Root Navigator (Stack)
Manages the switch between Authentication, Onboarding, and the Main App.

### 2. Authentication Flow (Stack)
- `LoginScreen`: For existing users to sign in.
- `SignUpScreen`: For new users to create an account.
- `ForgotPasswordScreen`: For password recovery.

### 3. Onboarding Flow (Stack)
*A one-time setup process for new, authenticated users.*
- `WelcomeScreen`
- `DemographicsScreen`
- `GoalSettingScreen`
- `ActivityLevelScreen`

### 4. Main App (Bottom Tab Navigator)
*The core interface for authenticated users.*
- **Dashboard Tab:**
  - `DashboardScreen`: High-level summary of daily progress.
- **Meals Tab:**
  - `MealLogScreen`: The primary hub for food logging.
- **Workouts Tab:**
  - `WorkoutLogScreen`: The primary hub for workout logging.
- **Profile Tab:**
  - `ProfileScreen`: Hub for user settings, stats, and app configuration.

### 5. Detail Screens (Pushed onto the Stack)
*Screens that are navigated to from within the main tabs.*
- **From Meals:**
  - `FoodSearchScreen`
  - `BarcodeScannerScreen`
  - `RecipeCreatorScreen`
- **From Workouts:**
  - `WorkoutPlannerScreen`
  - `ExerciseLibraryScreen`
  - `ExerciseDetailScreen`
  - `ActiveWorkoutScreen`
- **From Profile:**
  - `EditProfileScreen`
  - `NotificationSettingsScreen`
  - `IntegrationsScreen`
  - `SubscriptionScreen`