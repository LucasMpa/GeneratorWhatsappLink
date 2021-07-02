import React, { useState } from "react";
import "./styles.css";
import InputMask from "react-input-mask";
import Helper from "../../utils/Helper";
import copy from "copy-to-clipboard";

export default function FormPage() {
  const [phoneNumber, setphoneNumber] = useState("");
  const [msgText, setMsgText] = useState("");
  const [data, setData] = useState("");
  const [successAlert, setSuccesAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);

  function Api() {
    if (phoneNumber !== "" && msgText !== "") {
      setData(
        `https://api.whatsapp.com/send?phone=55${Helper.onlyNumbers(
          phoneNumber
        )}&text=${msgText}`
      );
    }

    if (phoneNumber.length >= 14 && msgText !== "") {
      setSuccesAlert(true);
      setDangerAlert(false);
      setTimeout(() => setSuccesAlert(null), 3000);
    } else {
      setDangerAlert(true);
      setSuccesAlert(false);
      setTimeout(() => setDangerAlert(null), 3000);
    }
  }

  function clearValues() {
    setDangerAlert(null);
    setSuccesAlert(null);
  }
  // data != "" && copy(data);

  return (
    <div className="main">
      <div className="form-container">
        {dangerAlert && (
          <div class="alert alert-danger" role="alert">
            Erro ao gerar link.
          </div>
        )}
        {successAlert && (
          <div class="alert alert-success" role="alert">
            {" "}
            Sucesso ao gerar o link.
          </div>
        )}
        {!data && (
          <div className="form-group">
            <h1>Gerador de Link para Whatsaap</h1>
            <label>Número de celular</label>

            <InputMask
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              type="tel"
              mask="(99) 9 9999-9999"
              maskChar={null}
              placeholder="(99) 9 9999-9999"
              className="form-control"
              onClick={() => {
                clearValues();
              }}
            />

            <label>Mensagem</label>
            <form>
              <textarea
                className="form-control"
                placeholder="Digite seu texto..."
                rows="5"
                onChange={(e) => {
                  setMsgText(e.target.value);
                }}
                onClick={() => {
                  clearValues();
                }}
              />
            </form>
            <small className="form-text text-muted">
              Não guardamos nenhum dado informado.
            </small>

            <div className="btn-copy">
              <button
                onClick={() => Api()}
                type="button"
                className="btn btn-success"
              >
                Gerar Link
              </button>
              <small>
                <a href={data}>{data}</a>
              </small>
            </div>
          </div>
        )}

        {data && (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            
              Link Gerado:
              <a href={data} target="_blank">
                {data}
              </a>{" "}
           
            <br />
            <h1 style={{ textAlign: "center" }}>Pronto! </h1>
            <h6 style={{ textAlign: "center" }}>
              Copie e compartilhe com usuários do Whatsapp
            </h6>

            <br />
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button
                onClick={() => {
                  copy(data);
                }}
                className="btn btn-success"
              >
                Copiar
              </button>

              <button
                onClick={() => {
                  setData("");
                  clearValues();
                }}
                type="button"
                className="btn btn-success"
              >
                Gerar Novo Link
              </button>
            </div>
          </div>
        )}

        <div className="side-content">
          <h2>Como Funciona?</h2>
          <ul>
            <li>Insira o nº do WhatsApp Ex: 85 9 9660-5866</li>
            <li>Escreva a mensagem padrão que será exibida</li>
            <li>
              Clique em “<strong>GERAR LINK</strong>”
            </li>
            <li>Copie o link e compartilhe</li>
            <li>Antes de usar, faça o msgText</li>
          </ul>

          <div>
            <small className="form-text text-muted">
              O gerador de links é uma ótima ferramenta para ações de marketing
              ou relacionamento. Com o link para mensagens personalizadas, você
              poderá utilizar em campanhas, redes sociais, email marketing,
              banners e etc. O bom de encurtar e personalizar links e mensagens
              do WhatsApp é que funcionará no desktop e no mobile da mesma
              forma. Faça bom uso da ferramenta encurtadora de WhatsApp.
            </small>
          </div>
        </div>
      </div>
      <div className="publicity-container">
        <title-pub>Em construção</title-pub>
      </div>
    </div>
  );
}
