import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";
import "../src/style.css";

ReactDOM.render(<Page />, document.getElementById('root'));

function Page() {
    return (
        <Gallery />
    )
}