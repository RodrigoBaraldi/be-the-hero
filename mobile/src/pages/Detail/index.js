import React from 'react';
import { View , FlatList, Text, TouchableOpacity, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';


export default function Detail(){

const navigation= useNavigation();
const route = useRoute();

const incident = route.params.incident;



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
   

            <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToIncidents}
            >
            <Feather name='arrow-left' size={28} color="#E02041"/>
        </TouchableOpacity>
        
        </View>







        <View style={styles.incident}>

        <Text>{route.params.caption}</Text>

    
            <Text style={styles.incidentProperty, {marginTop:0}}>ONG:</Text>
<Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
<Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR</Text>
            <Text style={styles.incidentValue}>{
    Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)
            }</Text>
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




