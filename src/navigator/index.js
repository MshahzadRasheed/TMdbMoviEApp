import {connect} from 'react-redux';

import React, {Component, } from 'react';
import {  ImageBackground} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import {
   Home
} from '../containers';
import MoviesDetail from '../containers/DetailPage';




//import CustomSidebarMenu from '../containers/Drawer/index';

const Stack = createNativeStackNavigator();

class Routing extends Component {
  state = {
    ready: false,
    // ready: true,
    initialRouteName: 'home',
  };
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  render() {
    // const {ready} = this.state;

    // if (!ready) return null;

   
    return (
      
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="auth"
            screenOptions={{
              contentStyle: {backgroundColor: 'transparent'},
              animation: 'simple_push',
            }}>
            <Stack.Screen
              name="auth"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
            name="detail"
            component={MoviesDetail}
            options={{headerShown: false}}
          />

          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const mapStateToProps = ({user}) => ({
  user: user,
});
const actions = {};

export default connect(mapStateToProps, actions)(Routing);
