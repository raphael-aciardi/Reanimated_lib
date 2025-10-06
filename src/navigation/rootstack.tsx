import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import FirstAnimation from '../screens/FirstAnimation';
import SecondAnimation from '../screens/SecondAnimation';

export type RootStackParamList = {
  Home: undefined;
  FirstAnimation: undefined;
  SecondAnimation: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: { screen: HomeScreen },
    FirstAnimation: { screen: FirstAnimation },
    SecondAnimation: { screen: SecondAnimation },
  },
});

export const Navigation = createStaticNavigation(RootStack);
