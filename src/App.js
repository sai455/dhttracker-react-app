import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './Store'
import { ApplicationNavigator } from './Navigators'
import { DefaultTheme,Provider as PaperProvider } from "react-native-paper";
import './Translations'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <ApplicationNavigator />
      </PaperProvider>
    </PersistGate>
  </Provider>
)

export default App
