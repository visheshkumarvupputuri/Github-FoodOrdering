 
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React");
const heading2 = React.createElement("h2",{id:"title1", key:"h2"}, "Namasthe React");
const container = React.createElement("div",{id:"container"}, [
  React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React"),
  React.createElement("ul",{},[React.createElement("li",{}, "About Us"),React.createElement("li",{}, "Support"),React.createElement("li",{}, "Home")])]);

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);