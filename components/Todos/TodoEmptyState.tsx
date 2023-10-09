import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    emptyPanel: {
        display: 'flex',
        height: 300,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignContent: 'center',
    }
})

const TodoEmptyState = () => {
    return <View style={styles.emptyPanel}>
        <Text style={{ 
            fontWeight: '600',
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'Poppins Regular'
         }}>No todo found</Text>
    </View>
}

export default TodoEmptyState;