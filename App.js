import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/stack/src/navigators/createStackNavigator";
import { createStackNavigator} from "@react-navigation/stack";

import Home from './screens/Home';
import Calendar from './screens/Calendar';
import SetTimer from './screens/SetTimer';
import Timer from './screens/Timer';
import MeditationFinished from './screens/MeditatonFinished';
import StreakSave from './screens/StreakSave';



const NavStack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <NavStack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Home">
                <NavStack.Screen name="Home" component={ Home } />
                <NavStack.Screen name="Meditate" component={ SetTimer} />
                <NavStack.Screen name="Calendar" component={ Calendar } />
                <NavStack.Screen name="StreakSave" component={ StreakSave } />
                <NavStack.Screen name="Meditation Finished" component={ MeditationFinished } />
                <NavStack.Screen name="Timer" component={ Timer } />
            </NavStack.Navigator>
        </NavigationContainer>
    )
}

export default App;
