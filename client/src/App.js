
// import React, { useState, createContext } from "react";
// import Login from "./login/login";
// import Register from "./register/register";
// import Createorderhome from "./createorder/createorderhome";

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Confirmpopup from "./components/popup/confirmpopup";



// export const store = createContext();


// function App() {
//   const [token, setToken] = useState(null);
//   return (
//     <div className="App">
//       <store.Provider value={[token, setToken]}>
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/register" element={<Register />} />
//             <Route exact path="/createorder" element={<Createorderhome />} />

//             <Route exact path="/popup" element={<Confirmpopup />} />

//           </Routes>
//         </BrowserRouter>
//       </store.Provider>
//     </div>
//   );
// }

// export default App;

import React, { useState, createContext } from "react";
import Login from "./login/login";
import Register from "./register/register";
import Createorderhome from "./createorder/createorderhome";
import Ordercreation from "./createorder/ordercreation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Confirmpopup from "./components/popup/confirmpopup";
// import Postorders from "./postorders/postorders";


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
            <Route exact path="/createorder" element={<Createorderhome />} />
            <Route exact path="/ordercreate" element={<Ordercreation />} />
            <Route exact path="/popup" element={<Confirmpopup />} />
            {/* <Route exact path="/postorders" element={<Postorders/>} /> */}
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;