import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Coin from "./components/Coin";
import "./index.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Coin />
        </div>
    );
}

export default App;
