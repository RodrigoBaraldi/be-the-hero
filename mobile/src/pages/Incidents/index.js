import React, {useEffect, useState} from 'react';
import { View , FlatList,Text, TouchableOpacity,Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';



import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {  apisAreAvailable} from 'expo';

import ImgLogo from '../../assets/logo.png';

import api from '../../services/api';
import styles from './styles';


export default function Incidents(){
            const navigation= useNavigation();
            const [incidents, setIncidents] = useState([]);
            const [total,setTotal]  = useState(0);



            const stylesLogo = StyleSheet.create({
                stretch: {
                    zIndex: 10,
                    height:'40px',
                    width:'95px',
                },
              });


            function navigateToDetail(incident){
                //alert(incident.name)
               navigation.navigate(('Detail'),{incident});
            }

            async function loadIncidents(){
                const response = await api.get('incidents');
               
                setTotal(response.headers['x-total-count']);
                setIncidents(response.data);
            }

            useEffect(()=>{
                loadIncidents();
            },[])


            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                            <Image  style={stylesLogo.stretch} source={ImgLogo} ></Image>
                             <Text style={styles.headerText}> Total de <Text style={styles.headerTextBold}>{total} casos </Text>.</Text>
                    </View>

                    <Text style={styles.title}>Bem Vindo!</Text>
                    <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            

            <FlatList
            data= {incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrolIndicator={false}
            renderItem={({item:incident})=>(


                                        <View style={styles.incident}>

                                        <Text style={styles.incidentProperty}>ONG:</Text>
                                        <Text style={styles.incidentValue}>{incident.name}</Text>

                                        <Text style={styles.incidentProperty}>CASO:</Text>
                                        <Text style={styles.incidentValue}>{incident.title}</Text>

                                        <Text style={styles.incidentProperty}>VALOR</Text>
                                        <Text style={styles.incidentValue}>

                            

                                        {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}


                                        </Text>

                                        <TouchableOpacity
                                        style={styles.detailsButton}
                                        onPress={()=>navigateToDetail(incident)}
                                        >

                                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                            <Feather name='arrow-right' size={16} color="#E02041"/>
                                        </TouchableOpacity>

                                        </View>





            )}
            />

            </View>

            );
}
