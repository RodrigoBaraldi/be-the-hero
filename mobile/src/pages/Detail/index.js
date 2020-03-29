import React from 'react';
import { View , FlatList,  Image, Text, TouchableOpacity, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import ImgLogo from '../../assets/logo.png';
import styles from './styles';


export default function Detail(){

    const navigation= useNavigation();
   // const route = useRoute();


//alert(JSON.stringify(route)); 


//const incident = route.params.incident;

const message = "Olá ss gostaria de ajudar no caso NOMECASO com o valor de VALOR";

function navigateToIncidents(){
navigation.navigate('Incidents');
}

function sendMail(){
MailComposer.composeAsync({
    subject: 'Herói do caso: Cadelinha Atropelada',
    recipients:['sss@sss.com'] ,
    body: message,
})
}

function sendWhats(){
        Linking.openURL(`whatsapp://send?phone=5514988172104&text=${message}`);
    }
    





return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={ImgLogo} ></Image>
        
            <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToIncidents}
            >
            <Feather name='arrow-left' size={28} color="#E02041"/>
        </TouchableOpacity>
        
        </View>







        <View style={styles.incident}>
            <Text style={styles.incidentProperty, {marginTop:0}}>ONG:</Text>
            <Text style={styles.incidentValue}>nama</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>tit</Text>

            <Text style={styles.incidentProperty}>VALOR</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(10)}</Text>
        </View>


        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
        </View>

        <View style={styles.actions}>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={sendWhats}
                >
                <Text style={styles.detailsActionButton}>Whats</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={sendMail}
                >
                <Text style={styles.detailsActionButton}>E-mail</Text>
            </TouchableOpacity>


        </View>




    </View>

);
}




