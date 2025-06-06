 SynergyFit AI - Changelog

This document provides a human-readable summary of key changes in the project. For a granular, line-by-line history, please refer to the `git log` or the commit history on GitHub.

 [Unreleased]

 Added

- Project & Environment Setup:
  - Initialized a new React Native project named `SynergyFit` with the default TypeScript template.
  - Established the core folder structure for source code (`src/api`, `src/assets`, `src/components`, `src/navigation`, `src/screens`, `src/theme`).
  - Overcame initial macOS environment issues with Xcode Command Line Tools by installing Git directly, ensuring a stable version control setup.
  - Established a feature-branch workflow (e.g., `feature/onboarding-demographics`) to protect the `main` branch from direct commits.

- Version Control & Documentation:
  - Initialized a Git repository and successfully connected it to the remote GitHub origin using a Personal Access Token (PAT) for authentication.
  - Created a `docs/` folder to house project documentation.
  - Added `docs/PRD.md` containing the full Product Requirements Document.
  - Added `docs/EXECUTION_PLAN.md` outlining the phased development strategy.
  - Added this `docs/CHANGELOG.md` to track notable changes.

- Application Core & Navigation:
  - Installed and configured React Navigation packages: `@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`, `react-native-safe-area-context`.
  - Created the main app navigator at `src/navigation/AppNavigator.tsx` to control the application's screen flow.
  - Created the first UI screen component: `src/screens/Onboarding/WelcomeScreen.tsx`.
  - Replaced the default boilerplate code in `App.tsx` to render the `AppNavigator` as the application's root component.
