import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./index.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Balance />
        </div>
    );
}

export default App;
