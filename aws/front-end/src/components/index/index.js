import { useState, useEffect, react } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../form/form.css";
import imgLogo from "../../assets/img/aws-logo/Agência Web SEO 4.png";
import "../index/index.css";

//https://www.youtube.com/watch?v=MY6ZZIn93V8
//https://www.youtube.com/watch?v=MY6ZZIn93V8
//https://www.youtube.com/watch?v=MY6ZZIn93V8
//https://www.youtube.com/watch?v=MY6ZZIn93V8

export default function Main() {
  const navigate = useNavigate();
  const [allProduct, setAllProduct] = useState([]);
  let id = 12; 

  // busca total
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/produtos/`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setAllProduct(actualData);
      } catch (err) {
        setAllProduct(null);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h3>Buscar produtos</h3>

      {/* <ul className="list">
        {allProduct.filter((asd) =>
          asd.first_name.toLowerCase().includes(query)
        ).map((produto) => (
           <li className="listItem" key={produto.id}>
            {produto.prod_nome}
           </li>
         ))}
       </ul> */}

      <label>
        SKU
        <input
          type="text"
          name="busca_consulta"
          size="30"
          placeholder="Código do produto"
          //   onChange={handleInputChange}
          //   value={formValues.prod_marca || ""}
        ></input>
      </label>

      <label>
        Nome
        <input
          type="text"
          name="busca_consulta"
          size="30"
          placeholder=" Nome do produto "
          //   onChange={handleInputChange}
          //   value={formValues.prod_marca || ""}
        ></input>
      </label>

      <label>
        Marca
        <input
          type="text"
          name="busca_consulta"
          size="30"
          placeholder="Marca do produto"
          //   onChange={handleInputChange}
          //   value={formValues.prod_marca || ""}
        ></input>
      </label>

      <label>
        Ativo / Invativo
        <select
          required
          name="prod_cor"
          // onChange={handleInputChange}
          // value={formValues.prod_cor}
        >
          <option value="Selecionar">Selecionar</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </label>

      <label>
        Status
        <select
          required
          name="prod_cor"
          // onChange={handleInputChange}
          // value={formValues.prod_cor}
        >
          <option value="Selecionar">Selecionar</option>
          <option value="novo">Novo</option>
          <option value="em_Andamento">Em Andamento</option>
          <option value="falha_nas_Informacoes">Falha nas Informações</option>
          <option value="Catalogado">Catalogado</option>
        </select>
      </label>

      <br />
      <button className="btn-buscar" type="Submit">
        Buscar
      </button>

      <button
        className="btn-cadastrar"
        type="Submit"
        onClick={() => {
          navigate("/Cadastro-de-produtos/?id=" + id);
        }}
      >
        Cadastrar Produto
      </button>

      <h4>Lista de produtos</h4>

      <table class="table">
        <thead class="table-dark">
          <th scope="col">SKU</th>
          <th scope="col">Nome</th>
          <th scope="col">Marca</th>
          <th scope="col">Ativo/Invativo</th>
          <th scope="col">Status</th>
          <th scope="col">Ação</th>
        </thead>
        <tbody>
          {allProduct?.map((p) => {
            return (
              <tr scope="row" key={p.id}>
                <td>{p.prod_codigo}</td>
                <td>{p.prod_nome}</td>
                <td>{p.prod_marca}</td>
                <td>{p.prod_ativo_inativo}</td>
                <td>{p.prod_status}</td>
                <td>
                  <span
                    onClick={() => {
                      navigate("/editar-produtos/?id=" + id);
                    }}
                  >
                    editar
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
