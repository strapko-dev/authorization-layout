import { useState } from "react";
import "./App.scss";
import Input from "./components/Input/Input";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="main">
      <div className="shapesWrapper">
        <div className="ballsWrap">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
        <div className="trapeze"></div>
      </div>

      <div className="formWrap">
        <div className="logo">ЛОГОТИП</div>
        <form className="form">
          <Input value={login} onChange={setLogin} />
          <Input value={password} onChange={setPassword} />
        </form>
      </div>
    </main>
  );
}

export default App;
