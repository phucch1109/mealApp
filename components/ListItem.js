import {View,Text,StyleSheet} from 'react-native'

function ListItem({data}) {
return ( data.map(x=> (
    <View key={x} style={styles.ListItem}>
        <Text style={styles.itemText}>{x}</Text>
    </View>
))

)
}

export default ListItem;

const styles = StyleSheet.create({
    ListItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor: '#fff'
    },
    itemText:{
        color: 'black',
        textAlign: 'center'
    }
})