import { useState, useEffect, react } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../form/form.css";
import imgLogo from "../../assets/img/aws-logo/Agência Web SEO 4.png";
import "../index/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Main() {
  const navigate = useNavigate();
  const [allProduct, setAllProduct] = useState([]);
  const [search, setSearch] = useState("");

  function getParams() {
    let query = window.history.previous.href;
    let parametro = query.split("?");
    let partes = parametro[1];
    let pt2 = partes.split("=");
    let id = pt2[1];

    return id;
  }

  // let id = pegaParam()

  let id = 12;

  // Filtro de busca
  const searchLowerCase = search.toLowerCase();
  const productsFilter = allProduct.filter(
    (p) =>
      p.prod_codigo.toLowerCase().includes(searchLowerCase) ||
      p.prod_nome.toLowerCase().includes(searchLowerCase) ||
      p.prod_marca.toLowerCase().includes(searchLowerCase)
  );

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
      <h3 className="display-5">Listagem de produtos</h3>

      <br />

      <Button
        id="btn-primary-add-product"
        variant="primary"
        onClick={() => {
          navigate("/cadastro-de-produtos/?id=" + id);
        }}
      >
        Adicionar Produto
      </Button>

      <br />
      <br />

      <div className="divTableIndex">
        <div className="divInputSearch">
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="search"
              placeholder="Pesquisar"
              aria-describedby="basic-addon2"
              type="search"
              name="busca_consulta"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>

        <Table striped bordered hover>
          <thead class="thead-dark">
            <th scope="col">SKU</th>
            <th scope="col">Nome</th>
            <th scope="col">Marca</th>
            <th scope="col">
              <Form.Select>
                <option selected hidden disabled>
                  Ativo/Inativo
                </option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </Form.Select>
            </th>

            <th scope="col">
              <Form.Select>
                <option selected hidden disabled>
                  Status
                </option>
                <option value="Novo">Novo</option>
                <option value="emAndamento">Em andamento</option>
                <option value="Catalogado">Catalogado</option>
              </Form.Select>
            </th>
            <th scope="col">Ação</th>
          </thead>
          <tbody>
            {productsFilter?.map((p) => {
              return (
                <tr scope="row" key={p.id}>
                  <td>{p.prod_codigo}</td>
                  <td>{p.prod_nome}</td>
                  <td>{p.prod_marca}</td>
                  <td>{p.prod_ativo_inativo}</td>
                  <td>{p.prod_status}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant="btn btn-primary"
                          onClick={() => {
                            navigate("/exibir-produtos/?id=" + id);
                          }}
                        >
                          Exibir
                        </Button>
                        <Button
                          variant="btn btn-secondary"
                          onClick={() => {
                            navigate("/editar-produtos/?id=" + id);
                          }}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="btn btn-danger"
                          onClick={() => {
                            navigate("/deletar-produtos/?id=" + id);
                          }}
                        >
                          Deletar
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
