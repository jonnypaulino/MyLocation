import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import color from "../../style/colors";
import { useNavigation } from '@react-navigation/native';


const TopBarHome = ({ name }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topBar}>
            <View style={styles.row}>
                <Text style={styles.title}>{name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Status')}>
                    <Text style={styles.titleRight}>Status</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 32,
        backgroundColor: color.primary,
        height: 60,
        justifyContent: 'center',
    },
    title: {
        color: color.blueClear,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,

    },
    titleRight: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,

    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default TopBarHome;