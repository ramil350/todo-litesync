import React from 'react'
import { View, Text } from 'react-native'
import { db } from '../App'

export default function SplashScreen({navigation}) {

    React.useEffect(()=>{
        db.on('not_ready', () => {
            console.log('event: the db is not ready')
            //navigation.replace("LoginScreen")
        });
        db.on('ready', () => {
            console.log('event: the db is ready')
            navigation.replace("MainScreen")
        });          
    }, []);

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>Todo APP</Text>
        </View>
    )
}
