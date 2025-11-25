module.exports = {
  expo: {
    name: "routine-revo-mobile",
    slug: "routine-revo-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "routinerevomobile",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      // API URL Configuration:
      // - Set API_URL environment variable to override default
      // - Android Emulator: Use 10.0.2.2 instead of localhost
      // - iOS Simulator: Use localhost or your machine's IP
      // - Physical Device: Use your machine's IP address on same network
      // Example: export API_URL=http://192.168.1.100:42069/api/v1
      apiUrl: process.env.API_URL || "http://10.0.2.2:42069/api/v1",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      "expo-secure-store",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};

