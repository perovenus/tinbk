import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from './app/screen/SigninScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';
import Notification from './app/screen/Notification'
const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name ="home" component={SigninScreen}/>
            <Tab.Screen name ="add" component={ViewImageScreen}/>
            <Tab.Screen name ="favorite" component={WelcomeScreen}/>
            <Tab.Screen name ="home" component={Notification}/>
        </Tab.Navigator>
    )
}