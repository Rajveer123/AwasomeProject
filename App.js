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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { bell, logo, add, message } from './src/images';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.headerContainer}>
            <View style={styles.bellIconContainer}>
              <Image source={bell} style={styles.bellIcon}></Image>
            </View>
               <View style={styles.headerView}>
              <Image source={logo} style={styles.logo}></Image>
              <Text style={styles.headerText}>Home</Text>
              </View>
            <View style={styles.addIconContainer}>
              <Image source={message} style={styles.rightIcons}></Image>
              <Image source={add} style={styles.rightIcons}></Image>
            </View>
            </View>
            <View style={styles.profileViewContainer}>

            </View>
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks /> */}
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
  headerContainer: {
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 0,
    height : 60,
    justifyContent:"flex-start",
    flexDirection:'row',
    //backgroundColor: "red"
  },
  bellIconContainer:{
    justifyContent: "center",
    alignItems: "center",
  },
  bellIcon:{
    marginLeft: 15,
  },
  addIconContainer:{
    flexDirection:'row',
    justifyContent: "flex-end",
    alignItems:"center"
  },
  rightIcons: {
  marginRight: 15,
},
  headerView:{
   flex:1,
   flexDirection : "row",
   justifyContent:"center",
   alignItems:"center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
