// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Text, ButtonView} from '../';
import {Colors, AppStyles, Images, Metrics} from '../../theme';
import styles from './styles';
// import {
//   TextField as RNTextInput,
//   FilledTextField,
//   OutlinedTextField,
// } from 'react-native-material-textfield-plus';

export default class TextInput extends React.PureComponent {
  static propTypes = {
    label: ViewPropTypes.style,
    error: PropTypes.string,
    containerStyle: ViewPropTypes.style,
    onPress: PropTypes.func,
    multiline: PropTypes.bool,
    placeholderTextColor: PropTypes.string,
  };

  static defaultProps = {
    error: '',
    label: '',
    containerStyle: styles.container,
    onPress: null,
    multiline: false,
    placeholderTextColor: Colors.gray,
  };
  state = {
    showPassword: false,
  };

  focus() {
    this.myRef.focus();
  }

  blur() {
    this.myRef.blur();
  }

  //methods
  toggle = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  renderEye = () => {
    const {showPassword} = this.state;
    if (this.props.secureText === true) {
      return (
        <TouchableOpacity style={styles.rightBtn} onPress={this.toggle}>
          <Image
            source={showPassword === false ? Images.closeEye : Images.openEye}
            style={styles.eyeIconImage}
          />
        </TouchableOpacity>
      );
    }
  };
  render() {
    const {
      label,
      error,
      containerStyle,
      onPress,
      multiline,
      rightImage,
      leftImage,
      placeholderTextColor,
      leftImageStyle,
      Style,
      secureText,
      ...rest
    } = this.props;
    return (
      <View>
        <RNTextInput
          label={label}
          ref={ref => {
            this.myRef = ref;
          }}
          labelColor={Colors.lightBlue1}
          textColor={Colors.white}
          lineWidth={1.5}
          lineColor={Colors.lightBlue1}
          lineTintColor={Colors.lightBlue1}
          onSubmitEditing={this.onSubmit}
          secureTextEntry={secureText && !this.state.showPassword}
          renderLeftAccessory={() => {
            return rightImage ? (
              <Image
                source={rightImage}
                style={{
                  marginRight: Metrics.baseMargin,

                  marginTop: 10,
                  height: 20,
                  height: 20,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
            ) : null;
          }}
          renderRightAccessory={secureText ? this.renderEye : null}
          {...rest}
          // style={{paddingHorizontal: 10, width: 20, backgroundColor: 'red'}}
        />
        {!_.isNull(onPress) && (
          <ButtonView onPress={onPress} style={styles.buttonOverlay}>
            <Image source={Images.pass_input} style={styles.arrowIcon} />
          </ButtonView>
        )}

        {leftImage && (
          <View
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              // flex: 1,
              alignItems: 'flex-end',
              alignSelf: 'center',
            }}>
            <Image
              source={leftImage}
              style={
                ({
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 10,
                },
                leftImageStyle)
              }
              resizeMode="contain"
            />
          </View>
        )}

        {!_.isEmpty(error) && !_.isUndefined(error) && !_.isNull(error) && (
          <Text
            type="medium"
            size="small"
            color="red"

            // style={[AppStyles.mTop5, AppStyles.mBottom5]}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
}
