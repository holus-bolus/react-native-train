import {StyleSheet, Text, View} from "react-native";

export default function Index() {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.viewOne}>
                <Text style={styles.red}>Red</Text>
            </View>
            <View style={styles.viewTwo}>
                <Text style={styles.blue}>Blue</Text>
            </View>
            <View style={styles.viewThree}>
                <Text style={styles.bigBlue}>Big Blue</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    red: {
        color: 'red',
    },
    blue: {
        color: 'blue',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    viewOne: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    viewTwo: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    viewThree: {
        width: 150,
        height: 150,
        backgroundColor: 'steelblue'
    }
})
