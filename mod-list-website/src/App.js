import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [modList, setModList] = useState([
    { id: 1, name: "Mod 1" },
    { id: 2, name: "Mod 2" },
    { id: 3, name: "Mod 3" },
  ]);

  return (
    <div className="mod-container">
      {modList.map((mod) => (
        <Card key={mod.id} mod={mod} onClick={() => console.log(mod.name)} />
      ))}
    </div>

  );
}

export default App;
