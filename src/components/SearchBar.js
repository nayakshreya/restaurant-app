import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name="search" style = {styles.iconStyle} />
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = {false}
                style = {styles.inputStyle} 
                placeholder = "Search"
                value = { term }
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'black',
        marginHorizontal: 15
    }
});

export default SearchBar;