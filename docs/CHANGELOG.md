# SynergyFit AI - Changelog

This document provides a human-readable summary of key changes in the project. For a granular, line-by-line history, please refer to the `git log` or the commit history on GitHub.

## [Unreleased]
### Added
- **Onboarding Flow:**
  - Created `ActivityLevelScreen.tsx` to allow users to select their activity level (e.g., Sedentary, Lightly Active).
  - Connected the `GoalSettingScreen` to the `ActivityLevelScreen`.
  - Created `GoalSettingScreen.tsx` to allow users to select their primary fitness goal.
  - Connected the `DemographicsScreen` to the `GoalSettingScreen`.

## [0.1.0] - 2024-06-06 - Onboarding Foundation
### Added
- **Onboarding Flow:**
  - Created `DemographicsScreen.tsx` with inputs for age, height, weight, and gender to collect user data after the welcome screen.
  - Updated `AppNavigator.tsx` to include the `DemographicsScreen` and connected it to the `WelcomeScreen`'s "Get Started" button.

- **Android Development Environment:**
  - Installed and configured Android Studio.
  - Set up an Android Emulator (Pixel API 33) to allow for visual testing and debugging.
  - Installed the Java Development Kit (JDK) via Homebrew to resolve Gradle build dependencies.
  - Successfully ran the application on the Android emulator.

- **Project & Environment Setup:**
  - Initialized a new React Native project named `SynergyFit` with the default TypeScript template.
  - Established the core folder structure for source code (`src/api`, `src/assets`, `src/components`, `src/navigation`, `src/screens`, `src/theme`).
  - Overcame initial macOS environment issues with Xcode by installing Git directly and setting up a Ruby environment with `rbenv`.
  - Established a feature-branch and Pull Request workflow to protect the `main` branch.

- **Version Control & Documentation:**
  - Initialized a Git repository and successfully connected it to the remote GitHub origin using a Personal Access Token (PAT) for authentication.
  - Created a `docs/` folder to house project documentation.
  - Added `docs/PRD.md` containing the full Product Requirements Document.
  - Added `docs/EXECUTION_PLAN.md` outlining the phased development strategy.
  - Added this `docs/CHANGELOG.md` to track notable changes.

- **Application Core & Navigation:**
  - Installed and configured React Navigation packages.
  - Created the main app navigator at `src/navigation/AppNavigator.tsx`.
  - Created the first UI screen component: `src/screens/Onboarding/WelcomeScreen.tsx`.
  - Replaced the default boilerplate code in `App.tsx` to render the `AppNavigator`.
