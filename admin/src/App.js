import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AddSubject from "./pages/AddSubject";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" index exact element={<Home />} />
          <Route path="/add-subject" exact element={<AddSubject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
