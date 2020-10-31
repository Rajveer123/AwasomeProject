/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
  Image,
  Text,
} from 'react-native';
{/*
  Note : Uncomment below Code For Seeing UI of First App
import Header from './src/components/Header';
import ListPageProfilePannel from './src/components/ListPageProfilePannel';
import { bannerImage } from './src/images';
import Footer from './src/components/Footer';
import FooterTextView from './src/components/FooterTextView'; */}

import FeedScreenHeader from './src/components/FeedScreenHeader';
import FeedPageProfilePannel from './src/components/FeedPageProfilePannel';
import FeedFooter from './src/components/FeedFooter';
import { mic, wifi } from './src/images';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          {/* First Screen Code */}
          {/* <Header />
          <ListPageProfilePannel />
          <View style={styles.imageContainer}>
          <Image source={bannerImage} style={styles.bannerImg}></Image>
          </View>
          <FooterTextView />
          <Footer /> */}

          {/* Second Screen Code */}
          <FeedScreenHeader />
          <FeedPageProfilePannel />
          <Text style={styles.addBioText}>Add Bio</Text>
          <View style={styles.editProfileView}>
            <Text style={styles.editProfileText}>Edit profile</Text>
          </View>
          <View style={styles.imagesContainerView}>
            <View style={styles.images}>
              <Image source={mic} />
            </View>
            <View style={styles.images}>
              <Image source={wifi} />
            </View>
          </View>
          <View style={styles.seperatorLineView}>
            <View style={styles.horizontalView} />
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.noFeedContainerView}>
            <Text style={styles.noFeedText}>No Feed Post</Text>
          </View>
          <FeedFooter />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#051F4C"
  },
  body: {
    backgroundColor: '#051F4C',
    paddingTop: Platform.OS == 'ios' ? 10 : 20,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 600
  },
  bannerImg: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null,
  },
  addBioText: {
    marginLeft: 15,
    color: '#CACCCE',
    fontSize: 16,
    marginTop: 20,
    fontWeight: '300',
  },
  editProfileView: {
    flex: 1,
    borderColor: '#CACCCE',
    borderWidth: 2,
    backgroundColor: 'transparent',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 8
  },
  editProfileText: {
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    fontSize: 18,
  },
  imagesContainerView: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: 20,
    
  },
  images: {
    flex:1,
    alignItems:"center"
  },
  seperatorLineView:{
    marginTop: 15,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignContent:'flex-end',
  },
  horizontalView: {
    flex:1,
    height: 2,
    backgroundColor: '#F15253'
  },
  horizontalLine: {
    flex:1,
    height: 1,
    backgroundColor: 'gray',
  },
  noFeedContainerView:{
    marginTop:15,
    height:430,
    justifyContent:'center',
    alignItems:'center'
  },
  
  noFeedText: {
  color: 'white',
  fontSize: 26,
}
});
export default App;
