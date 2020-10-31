import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { bell,add, home, search, user, video } from '../images';
const FeedFooter: () => React$Node = () => {
    return (
        <View style={styles.footerContainer}>
            <Image source={home} ></Image>
            <Image source={bell} ></Image>
            <Image source={add} ></Image>
            <Image source={video} ></Image>
            <Image source={search} ></Image>
            <Image source={user}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flex:1,
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});
export default FeedFooter;