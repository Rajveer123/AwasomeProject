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
  Image
} from 'react-native';
{/*
  Note : Uncomment below Code For Seeing UI of First App
import Header from './src/components/Header';
import ListPageProfilePannel from './src/components/ListPageProfilePannel';
import { bannerImage } from './src/images';
import Footer from './src/components/Footer';
import FooterTextView from './src/components/FooterTextView'; */}

import FeedScreenHeader from './src/components/FeedScreenHeader';
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
    flex :1,
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
  }
});
export default App;
