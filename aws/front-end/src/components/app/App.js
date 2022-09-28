import "./App.css";
import Form from "../form/form";
import "../form/form.css";
import Main from "../index/index";
import Routers from "../routes/routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
