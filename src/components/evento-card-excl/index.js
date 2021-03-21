import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';

import './evento-card-excl.css';

function EventoCardExcl({id, img, titulo, detalhes, visualizacoes, usuarioEmail}){
    
    
    // const [carregando, setCarregando] = useState(1);



    function remover(){
        firebase.firestore().collection('eventos').doc(id).delete().then()
    }

    // useEffect(() => {     
    //     if(carregando){        
    //         firebase.firestore().collection('eventos').doc(props.match.params.id).get().then(resultado => {
    //             setEvento(resultado.data())
    //             firebase.firestore().collection('eventos').doc(props.match.params.id).update('visualizacoes', resultado.data().visualizacoes + 1)
    //             setCarregando(0);
    
    //     });  
    // }      
    // },[])


    

    return(
        <div className="list-my-teams">
            {/* <img src={urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" /> */}

            <div className="card-body description ">
                <div className="div-teams">
                    <h5 className="card-titulo description">{titulo}</h5>
                    <h5 className="card-detalhe description">{detalhes}</h5>

                    <div className=" rodape-card d-flex align-items-center description">
                        <div className="item">
                            <Link to={'/eventodetalhes/' + id} className="btn btn-item"><i class="fas fa-pen"></i></Link>                    
                        </div>


                        
                        <div className="item">
                        <button onClick={remover} type="button" className="btn btn-item"><i className="fas fa-trash"></i></button>                    
                        </div>
                        <div className="item text-right btn">
                            <i class="fas fa-eye"></i> <span>{visualizacoes}</span>
                        </div>

                    </div>

                </div>
                <hr className="hr-my-teams"></hr>
                
            </div>
            

            
            
            
        </div>
    )
}

export default EventoCardExcl;