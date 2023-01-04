import React from "react";
import ReactDOM from "react-dom/client";

const container = <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container);
