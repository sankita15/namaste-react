import React from "react";
import ReactDOM from "react-dom/client";

const Header1 = () => <h1>Heading1</h1>
const Header2 = () => <h2>Heading2</h2>
const Header3 = () => <h3>Heading3</h3>

const TitleComponent = () => ( <div className="title">
    <Header1 />
    <Header2 />
    <Header3 />
</div> )

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<TitleComponent/>);
