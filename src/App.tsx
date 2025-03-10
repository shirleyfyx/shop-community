import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LogBox} from 'react-native'

import {HomeScreen} from './screens/HomeScreen'
import {NativeFeaturesScreen} from './screens/NativeFeaturesScreen'
import {StoriesScreen} from './screens/stories/StoriesScreen'
import {OrderHistoryScreen} from './screens/stories/OrderHistoryScreen'
import {StoryCommentsScreen} from './screens/stories/StoryCommentsScreen'
import {CreatePostScreen} from './screens/stories/CreatePostScreen'

// Add this line to ignore the specific warning
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const Stack = createNativeStackNavigator()

export function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GettingStarted.Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted.NativeFeatures"
        component={NativeFeaturesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stories.Feed"
        component={StoriesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stories.Create"
        component={NativeFeaturesScreen}
        options={{title: 'Share Your Story'}}
      />
      <Stack.Screen
        name="Stories.Comments"
        component={StoryCommentsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders.History"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="Stories.CreatePost"
        component={CreatePostScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
