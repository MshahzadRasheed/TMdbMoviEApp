// @flow
import React from 'react';
import {View,SafeAreaView,Image, ImageBackground} from 'react-native';
import {ButtonView, CustomNavbar, Text} from '../../components';



 export default class Item extends React.Component {
     
render(){

const {item}=this.props
return(
  
    <ButtonView
    style={{alignItems:'center', }}
    onPress={()=>this.props.navigation.navigate('detail',{item:item})}
    >
    <ImageBackground source={ {uri:`https://image.tmdb.org/t/p/original/${item.poster_path}`}}style={{height:250,width:250,marginVertical:10,borderRadius:20,borderWidth:1,borderColor:'green'  }} resizeMode="cover">
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  
    <Text color="black" style={{backgroundColor:'blue'}}>{item.vote_average}</Text>
  <Text color="yellow">{item.release_date}</Text>
    </View>
  <Text style={{alignSelf:'center',position:'absolute',bottom:0,fontWeight: 'bold'}}>{item.original_title} </Text>
    </ImageBackground>
    </ButtonView>
  )

 }
}

