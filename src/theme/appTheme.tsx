import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'rgb(39,97,173)'
    },
    text: {
        fontSize: 15,
        color: '#7A7A7A'
    },
    section: {
        marginTop: 10,
        marginBottom: 20
    },
    pickerContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textButton: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonEnabled: {
        marginTop: 20,
        backgroundColor: 'rgb(39,97,173)',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    buttonDisabled: {
        marginTop: 20,
        backgroundColor: '#7A7A7A',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    sectionsSelect: {
        backgroundColor: 'rgba(39,97,173, 0.7)',
        height: 50,
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
    },
    viewPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    textFlat: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    sectionsSelectList: {
        height: 50,
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
        borderColor: '#2761ad',
        borderWidth: 1
    },
    textFlatList: {
        color: '#2761ad',
        fontSize: 15,
        fontWeight: '700',
    },
    flatPadding: {
        padding: 20
    },
    dark: {
        color: '#000'
    },
});