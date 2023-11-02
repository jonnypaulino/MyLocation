import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import color from "../../style/colors";
import { useNavigation } from '@react-navigation/native';


const TopBarPages = ({ name }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topBar}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.titleRight}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{name}</Text>
                <View />
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
        marginLeft: -64
    },
    titleRight: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default TopBarPages;