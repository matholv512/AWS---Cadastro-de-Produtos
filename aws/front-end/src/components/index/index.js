import { useState, useEffect, react } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../form/form.css";
import imgLogo from "../../assets/img/aws-logo/Agência Web SEO 4.png";
import "../index/index.css";
import Form from "../form/form";

export default function Main(props) {
  const navigate = useNavigate();
  let id = props.id;
  const [allProduct, setAllProduct] = useState([]);

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
              <tr scope="row">
                <td>{p.prod_codigo}</td>  <td>{p.prod_nome}</td>  <td>{p.prod_marca}</td>
               
                <td>
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
