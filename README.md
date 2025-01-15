## Project Notes:

Instructions as received:
Assessment:

Stand up a “hello world” RN iOS/Google app that uses image picker v13(expo-image-picker) and displays multiple section results in a carousel. Please be sure to use V13 not the latest version the client is trying to gauge how you solve issues using old and new architecture.

I'm assuming it means multiple selection, as multiple section doesnt make any sense, and I dont have a direct way of contacting the people that could clarify. If this was a real project, I would find the stakeholder involved with creating the requirements and clarify.

If this was a real project, I would push back HEAVILY against using expo. In my experience it causes way more problems than it solves, even with the changes they have made in the last few years.

I was unable to get android working, there are compatibility issues with expo, expo image picker, and the react native project.

I tried setting up a JVM toolchain as the error first suggested, tried updating the package to compile with the same versions as each other - but then ran into other errors, I'm assuming related to changes made between the two versions (11 and 17). I am not an android expert, and if needed I could have eventually figured out a fix, but it could have possibly taken me weeks to do so.

If this was a real project I would have looked for an alternative, and assuming no alternative was available, we would need to decide if it was worth the cost for me to try and fix the problem, hire an android contractor to fix the problem, wait for the original team to fix the problem - opening an issue with them - or write our own solution.

In the past, I've had actual android developers work on updating 3rd party packages that need this level of work to be compatable. I've fixed smaller issues on 3rd party packages in the past, but I would need to learn several concepts about android and kotlin to be able to fix this particular issue.

I would love to chat in person about what I went through doing this challenge.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
