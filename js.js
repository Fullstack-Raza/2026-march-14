var h1 = React.createElement("h1", null, "From js");

var h2 = React.createElement("h2", null, "From js");

var div = React.createElement("div", null, [h1, h2]);

var main = document.querySelector("#main");

var root = ReactDOM.createRoot(main);

root.render(div);
