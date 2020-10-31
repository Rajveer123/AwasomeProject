import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { bell, logo, add, message, home } from '../images';
const FooterTextView: () => React$Node = () => {
    return (
        <View style={styles.footerTextContainer}>
            <View style={styles.ImagesContainingView}>
            <Image source={bell} ></Image>
                <Image source={home} style={{ marginLeft: 20 }}></Image>
            </View>
            <Text style={styles.likeText}>3 likes</Text>
            <Text style={styles.viewAllText}>View all comments</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerTextContainer: {
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        marginLeft: 25,
        marginBottom:15,
    },
    ImagesContainingView: {
        justifyContent: "flex-start",
        flexDirection:'row',
        alignItems: 'center'
    },
    likeText:{
        marginTop:10,
        color: 'white',
        fontSize: 12,
        textAlign: 'left',
    },
    viewAllText: {
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        textAlign: 'left',
    }
});
export default FooterTextView;