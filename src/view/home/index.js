import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import EventoCard from '../../components/evento-card/'

function Home({match}){

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaeventos = []; 
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {

    if(match.params.parametro){
        firebase.firestore().collection('eventos').where('usuario','==',usuarioEmail).get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
               if(doc.data().titulo.indexOf(pesquisa) >= 0)
               {
               listaeventos.push({
                   id: doc.id,
                   ...doc.data()
               })
               }
           })
   
           setEventos(listaeventos);
       });
       
    }else{
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
               if(doc.data().titulo.indexOf(pesquisa) >= 0)
               {                   
               listaeventos.push({
                   id: doc.id,
                   ...doc.data()
               })
               }
           })
   
           setEventos(listaeventos);
       });
    }
           

});


    return(
        <>
        <Navbar/>

            

        <div className="row p-3">
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes}   />) }

        </div>
        </>
    )
}

export default Home;