# wellness-journey-tracker

I want to create a fitness dashboard app that helps users optimize their fitness journey towards their goals, either 'lose fat' or 'gain muscle'. The app should integrate with existing fitness apps and devices to collect data in three key categories: Rest & Recovery, Diet, and Workout. Here’s a detailed breakdown of the requirements based on the provided images:

General Requirements:
User Interface (UI):

Ensure consistent font, style, and color coding across all sections of the app.
The app should have four main sections: Dashboard, Statistics, Goals, and Settings.
Data Collection and Integration:

Integrate with popular fitness and health apps (e.g., Apple Health, Google Fit, MyFitnessPal, Fitbit).
Collect relevant data for each category:
Rest & Recovery: Sleep duration, quality, rest days, active recovery activities.
Diet: Net calories, macronutrient breakdown, meal logging.
Workout: Frequency, duration, intensity, types of exercises.
Section 1: Dashboard
Overall View:
Display an overall efficiency score as a percentage, representing the user's progress towards their fitness goal.
Use a circular progress indicator to show the efficiency score. For example, if the user is optimizing well towards their goal, the circular indicator should show a high percentage like 94%.
Display progress bars for each of the three categories (Rest & Recovery, Diet, Workout) with percentage values indicating their optimization status. For instance, Diet could be at 70%, Workout Frequency at 80%, and Recovery Time at 60%.
Section 2: Statistics
Detailed View:
Provide detailed statistics for each category.
Display metrics such as total steps, stand hours, active calories, sleep duration, workout intensity, and dietary intake.
Use intuitive graphs and charts to visualize data over time. For example, steps might be shown as 202,953, stand hours as 466 hours, and active calories as 14,143 kcal. Circular graphs can be used to show distributions and percentages for various metrics.
Section 3: Goals
User Goals:
Display the user’s goals for each category.
Include visual representations (icons) for each goal (e.g., exercise minutes, recovery time, calorie intake).
Allow users to set and track specific goals related to their fitness journey. For example, goals could include 20 minutes of exercise, 15 minutes of rest & recovery, and 1600 calories for diet.
Section 4: Settings
Settings Menu:
Allow users to manage their account, connect/disconnect from other fitness apps, set preferences, and configure notifications.
Include options for privacy settings and data management.
Description of Attached Images:
First Screenshot (Dashboard):

The dashboard shows an overall efficiency score of 94% displayed within a circular progress indicator.
Below the efficiency score, there are three progress bars representing Diet (70%), Workout Frequency (80%), and Recovery Time (60%).
Second Screenshot (Statistics):

The statistics screen displays detailed metrics: steps (202,953), stand hours (466 hours), and active calories (14,143 kcal).
Each metric is visually represented with circular graphs showing distribution and percentages.
Third Screenshot (Goals):

The goals screen shows the user’s goals for exercise (20 minutes), rest & recovery (15 minutes), and diet (1600 calories).
Each goal is represented with a distinct icon and color for easy identification.
Please use this detailed description and the provided visualization of the images to create a fitness dashboard app that meets these requirements.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/wellness-journey-tracker.git
cd wellness-journey-tracker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
