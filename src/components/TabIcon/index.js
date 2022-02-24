// @flow
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Text from '../Text';
import {Images, Metrics, AppStyles} from '../../theme';
import Util from '../../util';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class TabIcon extends Component {
  render() {
    const {title, currentLanguage} = this.props;
    const {focused} = this.props.params;
    return (
      <View
        style={{
          alignItems: 'center',
          width: '99%',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={[
            {
              width: Metrics.icon.default,
              height: Metrics.icon.default,
              marginVertical: 5,
            },
          ]}
          source={Images.TabIcons[title + (focused ? '_Yellow' : '')]}
          //  source={Images.TabIcons[title]}
        />
        <Text
          size="xxSmall"
          type="regular"
          color={focused ? 'yellow' : 'white'}
          textAlign="center"
          style={{alignSelf: 'center'}}>
          {Util.capitalizeFirstLetter(title)}
        </Text>
      </View>
    );
  }
}

//
export default TabIcon;
