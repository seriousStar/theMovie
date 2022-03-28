# theMovie (used themoviedb API)

## Install

Follow installation of [React-Native CLI QuickStart](https://reactnative.dev/docs/getting-started)

```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

npm install -g react-native-cli

1. Install Android Studio
2. Install the Android SDK
3. Configure the ANDROID_HOME environment variable
```

### iOS

```
npm install
npx react-native start
cd ios && pod install
cd .. & npx react-native run-ios
```

### Android

```
npx react-native start
npx react-native run-android
```

## Screenshots

### Home
![Home](screenshots/Home.png)
### Detail
![Home](screenshots/Detail.png)

## Third-party libraries

- **@react-navigation/native**, **@react-navigation/native-stack** is to navigate to Home and Detail screens
- **moment** is used to format the date of movie release date
- **react-native-config** is used to store the Movie API_URL and API_KEY
- **react-native-fast-image** is used to cache the movie thumbnail
- **react-native-safe-area-context** dependency library of react-navigation
- **react-native-screens** dependency library of react-navigation
- **react-redux**, **redux**, **redux-thunk** are used to use redux state management