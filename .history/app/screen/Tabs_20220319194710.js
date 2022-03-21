import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from 'SigninScreen';
import ViewImageScreen from 'ViewImageScreen';
import WelcomeScreen from 'WelcomeScreen';
import Notification from 'Notification'
const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name ="home" component={SigninScreen}/>
            <Tab.Screen name ="add" component={ViewImageScreen}/>
            <Tab.Screen name ="favorite" component={WelcomeScreen}/>
            <Tab.Screen name ="user" component={Notification}/>
        </Tab.Navigator>
    )
}