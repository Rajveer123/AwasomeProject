import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { menu } from '../images';
const ListPageProfilePannel: () => React$Node = () => {
    return (

        <View style={styles.headerContainer}>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileIcon}
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                />
            </View>
            <View style={styles.profileHeaderTitleView}>
                <Text style={styles.headerTitle}>TeeTee</Text>
                <Text style={styles.headerSubTitle}>2 days ago</Text>
            </View>
            <View style={styles.addIconContainer}>
                <Image source={menu} style={styles.rightIcons}></Image>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 0,
        height: 70,
        justifyContent: "flex-start",
        flexDirection: 'row',
    },
    profileImageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileIcon: {
        marginLeft: 15,
        width: 60, 
        height: 60, 
        borderRadius: 60 / 2,
        borderColor:"red",
        borderWidth:2,
    },
    addIconContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    rightIcons: {
        marginRight: 40,
    },
    profileHeaderTitleView: {
        marginLeft:5,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    headerSubTitle: {
        marginTop:10,
        fontSize: 12,
        color: 'white',
        marginLeft:8
    }
});
export default ListPageProfilePannel;