import React from "react";
import SiteSection from "./components/SiteSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    {/* <Route path='/cards' element={<Cards />}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
