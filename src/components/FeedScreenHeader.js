import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { bell, logo, add, message } from '../images';
const FeedScreenHeader: () => React$Node = () => {
    return (

        <View style={styles.headerContainer}>
            <View style={styles.addIconContainer}>
                <Image source={add} style={styles.addIcon}></Image>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.settingIconContainer}>
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
    addIconContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    addIcon: {
        marginLeft: 15,
    },
   
    headerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
    headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
},
    settingIconContainer: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    rightIcons: {
        marginRight: 10,
    }
});
export default FeedScreenHeader;