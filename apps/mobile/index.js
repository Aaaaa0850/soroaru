import { registerRootComponent } from "expo";

import App from "./App";

// custom entrypoint for monorepo
// see: https://docs.expo.dev/guides/monorepos/#change-default-entrypoint

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
