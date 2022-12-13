import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";

ReactDOM.render(<Page />, document.getElementById('root'));

function Page() {
    return (
        <Gallery />
    )
}