// var h1 = React.createElement("h1", null, "From js");

// var h2 = React.createElement("h2", null, "From js");

// var div = React.createElement("div", null, [h1, h2]);

// var main = document.querySelector("#main");

// var root = ReactDOM.createRoot(main);

// root.render(div);

// <div>
//   <h1>Hello Raza</h1>
//   <p>Learning React</p>
//   <button>Click</button>
// </div>

const h1 = React.createElement("h1", null, "Hello Raza");
const p = React.createElement("p", null, "Learning React");
const btn = React.createElement("button", null, "Click");
const div = React.createElement("div", null, [h1, p, btn]);

const main = document.querySelector("#main");
const root = ReactDOM.createRoot(main);
root.render(div);

// <div>
//   <h1>React Journey</h1>
//   <p>Day 1</p>
//   <ul>
//     <li>React Basics</li>
//     <li>React.createElement</li>
//     <li>Rendering</li>
//   </ul>
// </div>
