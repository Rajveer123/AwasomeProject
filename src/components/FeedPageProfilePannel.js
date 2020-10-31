import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { menu, camera } from '../images';
const FeedPageProfilePannel: () => React$Node = () => {
    return (

        <View style={styles.headerContainer}>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileIcon}
                    source={camera}
                />
            </View>
            <View style={styles.mainTextContainerView}>
                <View style={styles.profileHeaderTitleView}>
                    <Text style={styles.headerTitle}>Mikey 801</Text>
                    <Text style={styles.headerSubTitle}>Independent</Text>
                </View>
                <View style={styles.textContainerView}>
                    <View style={styles.singleView}>
                    <Text style={styles.topText}>0</Text>
                    <Text style={styles.secondText}>Posts</Text>
                    </View>
                    <View style={styles.singleView}>
                        <Text style={styles.topText}>2</Text>
                        <Text style={styles.secondText}>Followers</Text>
                    </View>
                    <View style={styles.singleView}>
                        <Text style={styles.topText}>1</Text>
                        <Text style={styles.secondText}>Following</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 0,
        height: 95,
        justifyContent: "flex-start",
        flexDirection: 'row',
    },
    profileImageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileIcon: {
        marginLeft: 15,
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        borderColor: "white",
        borderWidth: 2,
    },
    mainTextContainerView: {
        flex: 1,
        marginLeft: 15,
        marginRight:15
    },
    profileHeaderTitleView: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    headerSubTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
    },
    textContainerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    },
    singleView:{
        justifyContent:'flex-end',
        marginTop:20
    },
    topText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
}
});
export default FeedPageProfilePannel;