import GlobalStyle from "./styles/globalStyle.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";
import Actions from "./components/Actions";
import CmmActions from "./components/CmmActions";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import { Title } from "../src/styles/estilos";
import "../src/styles/estilos.js";
import { OPCOES_PAGINAS } from "../src/Tipos/tipos.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [onEdit, setOnEdit] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Title> ALTERNADOS LATAM </Title>

      <ToastContainer autoClose={6000} position={toast.POSITION.BOTTOM_LEFT} />
      <div>
        <BrowserRouter>
          <Nav variant="tabs">
            {OPCOES_PAGINAS.map((option) => (
              <Nav.Link
                key={option.id}
                className={classNames({ active: option.id === currentPage })}
                as={Link}
                to={option.linkPage}
              >
                {" "}
                {option.description}{" "}
              </Nav.Link>
            ))}
          </Nav>

          <Routes>
            <Route path="/" element={<Home setCurrentPage={setCurrentPage} />}>
              {" "}
            </Route>
            <Route
              path="/Produtos"
              element={<Products setCurrentPage={setCurrentPage} />}
            >
              {" "}
            </Route>
            <Route
              path="/Usuarios"
              element={<Users setCurrentPage={setCurrentPage} />}
            >
              {" "}
            </Route>
            <Route
              path="/Atividades"
              element={<Actions setCurrentPage={setCurrentPage} />}
            >
              {" "}
            </Route>
            <Route
              path="/Alternados"
              element={<CmmActions setCurrentPage={setCurrentPage} />}
            >
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
