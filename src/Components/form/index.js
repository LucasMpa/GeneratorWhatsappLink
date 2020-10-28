import React, { useState } from "react";
import './styles.css'
import InputPhoneMask from "../inputPhoneMask";
import InputMask from 'react-input-mask';
import Helper from '../../utils/Helper';

export default function FormPage() {


    const [phoneNumber, setphoneNumber] = useState("");
    const [msgText, setMsgText] = useState("");
    const [data, setData] = useState("");
    const [successAlert, setSuccesAlert] = useState(false);
    const [dangerAlert, setDangerAlert] = useState(false);
    

    function Api() {
        if(phoneNumber !== '' && msgText !== '') {
            setData(`https://api.whatsapp.com/send?phone=55${Helper.onlyNumbers(phoneNumber)}&text=${msgText}`)
        
        }
       if(phoneNumber.length >= 14 && msgText !== ''){
            setSuccesAlert(true)
       } else {
        setDangerAlert(true)
          
       }
    }

    function clearValues(){
        setDangerAlert('')
        setSuccesAlert('')
    }
console.log(dangerAlert)

    return(
        
        <div className="main">
            <div className="form-container">
                {
                    dangerAlert  ?   <div class="alert alert-danger" role="alert"> This is a danger alert—check it out!
                </div>  : null

                }
                {
                    successAlert ? <div class="alert alert-success" role="alert"> This is a success alert—check it out!
                </div> : null
                }
                
               
                    <div className="form-group">
                        <h1>Gerador de Link para Whatsaap</h1>
                        <label>
                            Número de celular
                        </label>
                       
                        <InputMask 
                            onChange={(e) => {setphoneNumber(e.target.value)}}
                            type="tel" mask="(99) 9 9999-9999"
                            maskChar={null}
                            placeholder="(99) 9 9999-9999"
                            className="form-control"
                            onClick={() => {clearValues()}}
                            />
                            
                        <label>Mensagem</label>
                        <form>
                            <textarea 
                            onKeyUp={(e) => { setDangerAlert(e.target.value)
                                
                            }}
                            className="form-control" 
                            id=""
                            placeholder="Digite seu texto..." rows="5"  
                            onChange={(e) => {setMsgText(e.target.value)}}
                            />  
                        </form>
                        <small className="form-text text-muted">Não guardamos nenhum dado informado.</small>
                    </div>
                    <div className="btn-copy">
                            <button
                            onClick={Api}
                            type="button" 
                            className="btn btn-success"
                            >
                                Gerar Link
                            </button>
                            <small>
                                <a href={data}>{data}</a>
                            </small>
                            
                            
                    </div>

                    <div className="side-content">
                        <h2>Como Funciona?</h2>
                        <ul>
                            <li>Insira o nº do WhatsApp Ex: 85 9 9660-5866</li> 
                            <li>Escreva a mensagem padrão que será exibida</li> 
                            <li>Clique em “<strong>GERAR LINK</strong>”</li> 
                            <li>Copie o link e compartilhe</li> 
                            <li>Antes de usar, faça o msgText</li>
                        </ul>
                        
                        <div>
                            <small className="form-text text-muted">
                            <pre>{data}</pre>
                                O gerador de links é uma ótima ferramenta para ações de marketing ou relacionamento. 
                                Com o link para mensagens personalizadas, você poderá utilizar em campanhas, redes sociais, email marketing, banners e etc. 
                                O bom de encurtar e personalizar links e mensagens do WhatsApp é que funcionará no desktop e no mobile da mesma forma. 
                                Faça bom uso da ferramenta encurtadora de WhatsApp.
                            </small>    
                        </div>
                    </div>
            </div>
            <div className="publicity-container">
                <title-pub>
                
                    Em construção
                </title-pub>
            </div>  
        </div>
             
    );
}


