import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenWReducer from './src/screens/SquareScreenWReducer';
import CounterScreenWReducer from './src/screens/CounterScreenWReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    SquareReducer: SquareScreenWReducer,
    CounterReducer: CounterScreenWReducer,
    Text: TextScreen,
    Box: BoxScreen
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Best React Native App Lmao"
    }
  }
);

export default createAppContainer(navigator);
