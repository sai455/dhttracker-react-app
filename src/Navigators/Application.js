import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { 
  IndexStartupContainer,
  IndexSigninContainer,
  IndexHomePageContainer,
  IndexRigUpBhaContainer,IndexBreakDownBhaContainer,
  IndexManageToolBoxesContainer,IndexSearchToolsContainer,
  IndexToolsSearchResultsContainer,IndexBarCodeToolContainer,
  IndexToolsLookupContainer,IndexEditToolContainer,IndexAssMaintainenceContainer,IndexCreateToolBoxContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
    },
    [],
  )

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={IndexSigninContainer}
              options={{
                animationEnabled: false,
              }}
            />
          )}
          <Stack.Screen name="HomePage" component={IndexHomePageContainer} />
          <Stack.Screen name="RigUpBha" component={IndexRigUpBhaContainer} />
          <Stack.Screen name="BreakDownBha" component={IndexBreakDownBhaContainer} />
          <Stack.Screen name="ManageToolBoxes" component={IndexManageToolBoxesContainer} />
          <Stack.Screen name="SearchTools" component={IndexSearchToolsContainer} />
          <Stack.Screen name="BarCodeTool" component={IndexBarCodeToolContainer} />
          <Stack.Screen name="ToolsSearchResults" component={IndexToolsSearchResultsContainer} />
          <Stack.Screen name="ToolsLookupPage" component={IndexToolsLookupContainer} />
          <Stack.Screen name="EditToolsPage" component={IndexEditToolContainer} />
          <Stack.Screen name="AddMaintainencePage" component={IndexAssMaintainenceContainer} />
          <Stack.Screen name="CreateToolBox" component={IndexCreateToolBoxContainer} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
