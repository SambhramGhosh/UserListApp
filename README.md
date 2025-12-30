# User Explorer App

## App Functionality

User Explorer is a simple cross-platform mobile application built using React Native CLI.  
The app is designed to demonstrate real-world app structure, data handling, and state management rather than complex UI.

The application includes:
- A screen displaying a large list of users fetched from a public API
- Search functionality to filter users by name
- Pagination / infinite scrolling for handling large datasets
- Navigation to a user detail screen on selection
- Local data persistence so content is restored after app restart
- Proper handling of loading, error, background, and cold-start states

---

## How to Run the Project

### Prerequisites
- Node.js (LTS version)
- React Native CLI environment set up
- Android Studio with an emulator or a physical Android device  
- For iOS: macOS with Xcode installed

https://github.com/user-attachments/assets/8e808dc0-e274-4de0-a124-0dd8708b4aa3



### Steps

```bash
# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# Run the app on Android
npx react-native run-android

# Run the app on iOS (macOS only)
npx react-native run-ios
