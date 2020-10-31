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
            <Image source={home} ></Image>
            <Image source={bell} ></Image>
            <Image source={add} ></Image>
            <Image source={message} ></Image>
            <Image source={bell} ></Image>
            <Image source={add}></Image>
        </View>
);
};

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "space-evenly",
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:10
    },
});
export default Footer;