import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const produtos=[
    {
        id:'001',
        desc:'Açucar'
    },
    {
        id:'002',
        desc:'Farinha de Trigo'
    },
    {
        id:'003',
        desc:'Ovos'
    },
    {
        id:'004',
        desc:'Leite'
    },{
        id:'005',
        desc:'Fermento'
    },
]
export default function() {
    return (
        <View>
            <FlatList 
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><View style={styles.prod}><Text style={styles.letras}>{item.desc}</Text></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    prod:{
        padding: 5,
        alignItems:'center',
    },
    letras:{
        color: '#DDD',
        fontSize: 12
    }
});