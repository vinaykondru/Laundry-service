
import React, { useState, createContext } from "react";
import Login from "./login/login";
import Register from "./register/register";

import { BrowserRouter, Route, Routes } from 'react-router-dom';





export const store = createContext();


function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;