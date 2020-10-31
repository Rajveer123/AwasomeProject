import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { bell, logo, add, message } from '../images';
const Header: () => React$Node = () => {
    return (

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

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        marginTop: 0,
        paddingHorizontal: 0,
        height: 60,
        justifyContent: "flex-start",
        flexDirection: 'row',
    },
    bellIconContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    bellIcon: {
        marginLeft: 15,
    },
    addIconContainer: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    rightIcons: {
        marginRight: 15,
    },
    headerView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 22,
        fontWeight: '400',
        color: 'white',
    }
});
export default Header;