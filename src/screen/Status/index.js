import { FlatList, Text, View } from "react-native";
import TopBarPages from "../../components/TopBarPages";
import { useContext } from "react";
import { AplicationContext } from "../../context/context";
import PackageSync from "./PackageSync";

const StatusScreen = () => {

    const { location, locationoff } = useContext(AplicationContext)
    return (
        <View>
            <TopBarPages name={"Status"} />
            <FlatList
                data={locationoff.reverse()}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <PackageSync item={item} isSync={false}/>
                    </View>
                )}
            />
            <FlatList
                data={location.reverse()}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <PackageSync item={item} isSync={true}/>
                    </View>
                )}
            />
        </View>
    )
}

export default StatusScreen;