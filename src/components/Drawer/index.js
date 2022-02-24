// @flow
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {View, FlatList, AppState, Image, LayoutAnimation} from 'react-native';
import CustomNavbar from '../../components/CustomNavbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, ButtonView} from '../../components';
import {AppStyles, Colors, Images, Metrics} from '../../theme';
import styles from './styles';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {selectUserType} from '../../actions/UserActions';
import LinearGradient from 'react-native-linear-gradient';
import { TabActions } from '@react-navigation/native';


const data = [];
class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    const {data} = this.props.user;
    //  const {userType} = route.params;
    console.log('Drawer_props', data);
    const {navigation} = this.props;
    const jumpToAction = TabActions.jumpTo('home');


    this.state = {
      expandList: false,
      UserData: [
        {
          id: 1,
          name: 'Home ',
          route: () => navigation.navigate('home'),
          image: Images.Home,
        },
        {
          id: 15,
          name: 'Profile',
          route: () => navigation.navigate('profile'),
          image: Images.Profile,
        },
        {
          id: 2,
          name: 'My Exchanges',
          route: () =>  navigation.dispatch(jumpToAction),

          image: Images.Exchange,
        },

        {
          id: 3,
          name: 'Subscription',
          route: () => navigation.navigate('subscription'),
          image: Images.Subscribe,
        },
        {
          id: 4,
          name: 'Settings',
          route: () => {},
          image: Images.Settings,
        },

        {
          id: 7,
          name: 'How to  use',
          route: () => navigation.navigate('tutorial'),
          image: Images.Tutorial,
        },

        {
          id: 8,
          name: 'Terms and Conditions',
          route: () => navigation.navigate('terms', {isAuth: false}),
          image: Images.Terms,
        },

        {
          id: 12,
          name: 'Privacy Policy',
          route: () => navigation.navigate('privacy', {isAuth: false}),
          image: Images.Privacy,
        },

        {
          id: 14,
          name: 'Sign Out',
          image: Images.logout,
          route: () =>
            navigation.reset({
              routes: [{name: 'auth'}],
            }),
        },
      ],
    };
  }
  componentDidMount() {
    console.log('abcd');
  }
  ListHeaderComponent = () => {
    const {data} = this.props.user;

    const {navigation} = this.props;
    return (
      <LinearGradient
        colors={['#102E5A', '#0D3A7E']}
        //style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{paddingBottom: 30}}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => this.props.navigation.closeDrawer()}>
          <Image
            source={Images.closeDrawer}
            style={{height: 20, width: 20, marginRight: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          color="lightBlue1"
          type="medium"
          size="large"
          style={[AppStyles.mLeft40, AppStyles.mTop40]}>
          John Smith
        </Text>
        <Text
          type="regular"
          size="small"
          style={[AppStyles.mLeft40, AppStyles.mTop10]}>
          John.smith@domain.com
        </Text>
      </LinearGradient>
    );
  };
  renderSettings = item => {
    switch (item) {
      case 'Settings':
        return (
          <View style={styles.settingContainer}>
            <ButtonView
              style={[AppStyles.flexRow, AppStyles.flex]}
              onPress={() => this.props.navigation.navigate('newPass')}>
              <View style={[AppStyles.flex3, AppStyles.alignItemsFlexEnd]}>
                <Image
                  source={Images.Password}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              </View>
              <View style={AppStyles.flex7}>
                <Text
                  size="small"
                  type="light"
                  style={{
                    marginLeft: 15,
                    includeFontPadding: false,
                  }}>
                  Change Password
                </Text>
              </View>
            </ButtonView>
            <ButtonView
              style={styles.notiContainer}
              onPress={() =>
                this.props.navigation.navigate('notificationSetting')
              }>
              <View style={[AppStyles.flex3, AppStyles.alignItemsFlexEnd]}>
                <Image
                  source={Images.Notifications}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              </View>
              <View style={AppStyles.flex7}>
                <Text
                  size="small"
                  type="light"
                  style={{
                    marginLeft: 15,
                    includeFontPadding: false,
                  }}>
                  Notification Settings
                </Text>
              </View>
            </ButtonView>
          </View>
        );

      default:
        break;
    }
  };
  renderItem = ({item, index}) => {
    return (
      <View>
        <ButtonView
          onPress={
            item.name == 'Settings'
              ? () =>
                  this.setState({expandList: !this.state.expandList}, () =>
                    LayoutAnimation.linear(),
                  )
              : () => item.route(this)
          }
          style={{
            marginLeft: 40,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: Metrics.baseMargin,
            includeFontPadding: false,
          }}>
          <Image
            source={item.image}
            style={{height: 20, width: 20, marginRight: 10}}
            resizeMode="contain"
          />
          <Text
            textAlign="center"
            size="small"
            type="light"
            style={{
              marginLeft: Metrics.baseMargin,
              alignSelf: 'center',
              includeFontPadding: false,
            }}>
            {item.name}
          </Text>
        </ButtonView>
        {this.state.expandList == true ? this.renderSettings(item.name) : null}
      </View>
    );
  };
  render() {
    const {data} = this.props.user;
    console.log(this.state.expandList);

    return (
      <LinearGradient
        colors={['#102E5A', '#0D3A7E']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <SafeAreaView>
          <FlatList
            data={this.state.UserData}
            renderItem={this.renderItem}
            ListHeaderComponent={this.ListHeaderComponent}
            showsVerticalScrollIndicator={false}
            extraData={this.state}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = ({user}) => ({
  user: user,
});
const actions = {selectUserType};
//export default Empty
export default connect(mapStateToProps, actions)(DrawerComponent);
