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
  Text,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import Header from './src/components/Header';
import ListPageProfilePannel from './src/components/ListPageProfilePannel';
import { bannerImage } from './src/images';
import Footer from './src/components/Footer';
import FooterTextView from './src/components/FooterTextView';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <Header />
          <ListPageProfilePannel />
          <View style={styles.imageContainer}>
          <Image source={bannerImage} style={styles.bannerImg}></Image>
          </View>
          <FooterTextView />
          <Footer />
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
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
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
  }/*,
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    //color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    //color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },*/
});
export default App;
