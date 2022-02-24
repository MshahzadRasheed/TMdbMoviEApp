// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View,SafeAreaView,Image, ImageBackground} from 'react-native';
import {ButtonView, CustomNavbar, Text,Loader} from '../../components';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Images } from '../../theme';
import {connect} from 'react-redux';
import util from '../../util';


 export default class MoviesDetail extends React.Component {
   state={
    loading:false,
    data:[]
   }
  static propTypes = {};

  static defaultProps = {};


  render() {
    const {item}=this.props.route.params
    return (
      <SafeAreaView style={styles.container}>
      <CustomNavbar
      title={item.original_title}
      hasBack={true}
      leftBtnPress={()=>this.props.navigation.goBack()}
      />
      <View>
      <Image source={ {uri:`https://image.tmdb.org/t/p/original/${item.poster_path}`}}style={{alignSelf:'center', height:250,width:250,marginVertical:10,borderRadius:20,borderWidth:1,borderColor:'green'  }} resizeMode="cover"/>
    
      <View style={{alignItems:'center'}}>
    <Text color="black" style={{marginLeft:10}}>Rating:{item.vote_average}</Text>
    <Text color="yellow">Release Date:{item.release_date}</Text>
    <Text textAlign="center">OverView:{item.overview}</Text>
    </View>
    </View>
      </SafeAreaView>
    );
  }
}
