import { useState, useEffect } from "react";
import "../form/form.css";
import imgLogo from "../../img/logo-web-seo/Agência Web SEO 4.png";

function Form() {
  const [formValues, setFormValues] = useState({
    prod_codigo: "",
    prod_nome: "",
    prod_cor: "",
    prod_marca: "",
    prod_genero: "",
    prod_descricao: "",
    prod_material_externo: "",
    prod_material_interno: "",
    prod_tamanhode: "33",
    prod_tamanhoate: "44",
    prod_fechamento: "",
    prod_material_solado: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   // e.preventDefault()
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData);

  //   fetch("http://localhost:3000/produtos", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  // };

  function handleClick() {
    fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((json) => json.json())
      .then((result) => {
        setFormValues(result.data);
      });
  }

  return (
    // <form onSubmit={handleSubmit}>
    <form method="post" encType="multipart/form-data" action="/upload">
      <a href="https://agenciawebseo.com.br/">
        <img id="imgLogo" src={imgLogo} alt="LOGO-AgenciaWebSEO"></img>
      </a>

      <label id="labelEmpresa">
        Empresa <span>*</span>
        <select
          required
          name="empresa"
          onChange={handleInputChange}
          value={formValues.empresa}
        >
          <option value="Torrenezzi">Torrenezzi</option>
          <option value="RosaHelena">Rosa Helena</option>
          <option value="Viines">Viines</option>
          <option value="Bionda">Bionda</option>
          <option value="Kauki">Kauki</option>
        </select>
      </label>

      <label>
        Código (SKU) <span>*</span>
        <input
          required
          type="text"
          name="prod_codigo"
          size="70"
          placeholder="Exemplo: 408"
          onChange={handleInputChange}
          value={formValues.prod_codigo || ""}
        />
      </label>

      <label>
        Nome do produto <span>*</span>
        <input
          required
          type="text"
          name="prod_nome"
          size="70"
          placeholder="Exemplo: Tênis Masculino Slip On"
          onChange={handleInputChange}
          value={formValues.prod_nome || ""}
        ></input>
      </label>

      <label>
        Marca <span>*</span>
        <input
          required
          type="text"
          name="prod_marca"
          size="70"
          placeholder="Exemplo: Adidas"
          onChange={handleInputChange}
          value={formValues.prod_marca || ""}
        ></input>
      </label>

      <label>
        Cor <span>*</span>
        <select
          required
          name="prod_cor"
          onChange={handleInputChange}
          value={formValues.prod_cor}
        >
          <option value="Amarelo">Amarelo</option>
          <option value="AmareloClaro">Amarelo Claro</option>
          <option value="AmareloEscuro">Amarelo Escuro</option>
          <option value="Azul">Azul</option>
          <option value="AzulClaro">Azul Claro</option>
          <option value="AzulEscuro">Azul Escuro</option>
          <option value="Branco">Branco</option>
          <option value="Bege">Bege</option>
          <option value="Bordo">Bordô</option>
          <option value="Cinza">Cinza</option>
          <option value="Chumbo">Chumbo</option>
          <option value="Laranja">Laranja</option>
          <option value="LaranjaClaro">Laranja Claro</option>
          <option value="LaranjaEscuro">Laranja Escuro</option>
          <option value="Marrom">Marrom</option>
          <option value="MarromClaro">Marrom Claro</option>
          <option value="MarromEscuro">Marrom Escuro</option>
          <option value="Preto">Preto</option>
          <option value="Rosa">Rosa</option>
          <option value="RosaClaro">Rosa Claro</option>
          <option value="RosaEscuro">Rosa Escuro</option>
          <option value="Verde">Verde</option>
          <option value="VerdeClaro">Verde Claro</option>
          <option value="VerdeEscuro">Verde Escuro</option>
        </select>
      </label>

      <br />

      <label id="labelGenero">
        Gênero <span>*</span>
        <select
          required
          name="prod_genero"
          onChange={handleInputChange}
          value={formValues.prod_genero}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Menino">Menino</option>
          <option value="Menina">Menina</option>
          <option value="Unissex">Unissex</option>
        </select>
      </label>

      <br />

      <label className="labelTamanho">
        Grade de tamanho <span>*</span>
        <br />
        <label>
          de
          <select
            required
            id="selectDe"
            name="prod_tamanhode"
            onChange={handleInputChange}
            value={formValues.prod_tamanhode}
          >
            <option value="Unico">Único</option>
            <option value="p">P</option>
            <option value="m">M</option>
            <option value="g">G</option>
            <option value="gg">GG</option>
            <option value="g1">G1</option>
            <option value="g2">G2</option>
            <option value="g3">G3</option>
            <option value="g4">G4</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
          </select>
        </label>
        <label id="labelAte">
          até
          <select
            required
            id="selectAte"
            name="prod_tamanhoate"
            onChange={handleInputChange}
            value={formValues.prod_tamanhoate}
          >
            <option value="Unico">Único</option>
            <option value="p">P</option>
            <option value="m">M</option>
            <option value="g">G</option>
            <option value="gg">GG</option>
            <option value="g1">G1</option>
            <option value="g2">G2</option>
            <option value="g3">G3</option>
            <option value="g4">G4</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
          </select>
        </label>
      </label>

      <label>
        Descrição <span>*</span>
        <textarea
          required
          cols="74"
          rows="10"
          name="prod_descricao"
          placeholder="Exemplo: Marca, modelo, garantia..."
          onChange={handleInputChange}
          value={formValues.prod_descricao || ""}
        ></textarea>
      </label>

      <br />
      <label>
        Material externo
        <input
          type="text"
          name="prod_material_externo"
          size="70"
          placeholder="Exemplo: Couro, Sintético, etc"
          onChange={handleInputChange}
          value={formValues.prod_material_externo || ""}
        ></input>
      </label>

      <br />

      <label>
        Material interno
        <input
          type="text"
          name="prod_material_interno"
          size="70"
          placeholder="Exemplo: têxtil, etc"
          onChange={handleInputChange}
          value={formValues.prod_material_interno || ""}
        ></input>
      </label>

      <label>
        Material do Solado
        <input
          type="text"
          name="prod_material_solado"
          size="70"
          placeholder="Exemplo: Sintético, TR, etc"
          onChange={handleInputChange}
          value={formValues.prod_material_solado || ""}
        ></input>
      </label>

      <label>
        Fechamento
        <input
          type="text"
          name="prod_fechamento"
          size="70"
          placeholder="Exemplo: Cadarço, Elastico etc"
          onChange={handleInputChange}
          value={formValues.prod_fechamento || ""}
        ></input>
      </label>

      <label>
        Upload de Arquivo <span>*</span>
        <br />
        <span> .zip, .rar, .7zip</span>
      </label>
      <label id="uploadLabel">
        Selecione o Arquivo
        <input
          required
          id="uploadFile"
          name="uploadFile"
          type="file"
          accept=".zip,.rar,.7zip"
        />
      </label>

      <br />
      <div id="div-enviar">
        <button onClick={handleClick} type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
