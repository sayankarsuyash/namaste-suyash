// const heading = React.createElement("h1",{id:"heading"},"hey react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"hi react"),React.createElement("h2",{},"hiiii react"),]),React.createElement("div",{id:"child"},[React.createElement("h1",{},"hi react"),React.createElement("h2",{},"hiiii react"),]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);