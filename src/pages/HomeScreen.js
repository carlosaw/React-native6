import React, { Component, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,
    FlatList,
    Text,
    View,
    Alert,
    TouchableOpacity,
    TextInput,
    Button } from 'react-native';


export default class HomeScreen extends Component {
    
    constructor(props) {          
        super(props);       
        this.array = [{
            key: 'id',
            title: 'Açucar'
            },
        ],        
        this.state = {       
            arrayHolder: [],       
            textInput_Holder: ''      
        }              
    }       
    componentDidMount() {       
        this.setState({ arrayHolder: [...this.array] });      
    }
    joinData = () => {       
        this.array.push({title : this.state.textInput_Holder});
        this.setState({ arrayHolder: [...this.array] });
    }
    GetItem(item) {       
        Alert.alert(item);
    }
    
render(){
    return (        
        <View style={styles.container}>
            <Text style={styles.Text}>Faça um Bolo</Text>

            <TextInput
                placeholder={'Digite um ingrediente'}
                onChangeText={data => this.setState({ textInput_Holder: data })}
                style={styles.input}
            />

            <View style={styles.btn}><Button                      
                title="Add."
                 onPress={this.joinData}                                       
            /></View>

            <View style={styles.prod}>
                <FlatList
                    data={this.state.arrayHolder}
                    width='100%'
                    extraData={this.state.arrayHolder}
                    keyExtractor={(key, index) => index.toString()}
                    renderItem={({ key, item }) => <Text style={styles.letras}
                        onPress={this.GetItem.bind(this, key=item.id, item.title)} > {item.id, item.title}
                    </Text>}
                />
            </View>
                        
        </View>        
    );

    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#363636'
    },
    input:{
        width: 300,
        padding: 10,
        fontSize: 12,
        backgroundColor:'#EEE',
        marginTop: 20
    },
    Text:{
        color: '#FFF',
        fontSize: 18,
        marginTop: 20
    },
    btn:{
        marginTop: 20,
        color: '#00FF00'
    },
    prod:{
        padding: 5,
        alignItems: 'center',
        width: 400,
        height: 300
    },
    letras:{
        color: '#DDD',
        padding: 8,
        fontSize: 14,
        textAlign:'center'
    }
});