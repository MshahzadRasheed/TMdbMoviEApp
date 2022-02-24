// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View,SafeAreaView,Image, ImageBackground} from 'react-native';
import {ButtonView, CustomNavbar, Text,Loader} from '../../components';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Images } from '../../theme';
import {connect} from 'react-redux';
import {getMoviesList} from '../../actions/UserActions';
import ListItem from './ListItem'
import util from '../../util';


 class Home extends React.Component {
   state={
    loading:false,
    data:[]
   }
  static propTypes = {};

  static defaultProps = {};

componentDidMount(){

 this.getMovies()
}
getMovies=()=>{

util.showLoader(this)

  this.props.getMoviesList((data)=>{
    
    if(data){
      util.hideLoader(this)
      this.setState({data:data})
    }
  })

}

renderItem=({item,index})=>{
return(
  
  <ListItem item={item} navigation={this.props.navigation}/>
)
}
  render() {
    const {loading}=this.state;
    console.log("incom", this.state.data)
    return (
      <SafeAreaView style={styles.container}>
      <CustomNavbar
      title="Movies"
      hasBack={false}
      />
      <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      showsVerticalScrollIndicator={false}
      refreshing={loading}
      onRefresh={this.getMovies}
      extraData={this.state}

      />
<Loader loading={loading}/>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({user}) => ({
  user
 
});
const actions = {getMoviesList};

export default connect(mapStateToProps, actions)(Home);