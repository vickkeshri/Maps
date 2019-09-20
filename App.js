import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions} from "react-native";
import MapView, {Polyline} from 'react-native-maps';


export default class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: 180,
      screenHeight: 100,
      isScollView: true
    }
  }

  handleDynamicStyling = () => {
    this.setState({
      screenWidth: Math.round(Dimensions.get('window').width),
      screenHeight:Math.round(Dimensions.get('window').height) / 2
    })
  }
  render() {
    return (
      <SafeAreaView style={{
        flex: 1
      }}>
      <MapView
        style={{
          flex: 1
        }}
        provider="google"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421

        }}>

        <Polyline
          coordinates={[
          { latitude: 37.8025259, longitude: -122.4351431 },
          { latitude: 37.7896386, longitude: -122.421646 },
          { latitude: 37.7665248, longitude: -122.4161628 },
          { latitude: 37.7734153, longitude: -122.4577787 },
          { latitude: 37.7948605, longitude: -122.4596065 },
          { latitude: 37.8025259, longitude: -122.4351431 }
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000'
        ]}
        strokeWidth={6}
	/>
  </MapView>
       { this.state.isScollView ?
        <ScrollView style={styles.overlay} horizontal={true}> 
          <TouchableOpacity onPress= {this.handleDynamicStyling}>
          <Image 
          style={{width: this.state.screenWidth, height: this.state.screenHeight, justifyContent:"space-around"}}
          source={require('./assets/Brown.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.handleDynamicStyling}>
          <Image 
          style={{width: this.state.screenWidth, height: this.state.screenHeight, justifyContent:"space-around"}}
          source={require('./assets/Brown.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.handleDynamicStyling}>
          <Image 
          style={{width: this.state.screenWidth, height: this.state.screenHeight, justifyContent:"space-around"}}
          source={require('./assets/Brown.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.handleDynamicStyling}>
          <Image 
          style={{width: this.state.screenWidth, height: this.state.screenHeight, justifyContent:"space-around"}}
          source={require('./assets/Brown.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.handleDynamicStyling}>
          <Image 
          style={{width: this.state.screenWidth, height: this.state.screenHeight,justifyContent:"space-around"}}
          source={require('./assets/Brown.png')}/>
          </TouchableOpacity>
        
        </ScrollView> : <View>
                 <Text> I am gere </Text>
           </View>
       } 
     
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: "row"
  },
});