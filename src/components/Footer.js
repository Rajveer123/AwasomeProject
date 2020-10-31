import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { bell, logo, add, message, home } from '../images';
const Footer: () => React$Node = () => {
    return (
        <View style={styles.footerContainer}>
            <Image source={home} style={styles.bellIcon}></Image>
            <Image source={bell} style={styles.bellIcon}></Image>
            <Image source={add} style={styles.bellIcon}></Image>
            <Image source={message} style={styles.bellIcon}></Image>
            <Image source={bell} style={styles.bellIcon}></Image>
            <Image source={add} style={styles.bellIcon}></Image>
        </View>
);
};

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "space-evenly",
        flexDirection: 'row',
        alignItems:'center'
    },
    
    bellIcon: {
        //marginLeft: 25,
    },
    
});
export default Footer;