const heading1 = React.createElement("h1", {
    id: "title"
}, "Namasthe React");
const heading2 = React.createElement("h2", {
    id: "title"
}, "Namasthe React");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
