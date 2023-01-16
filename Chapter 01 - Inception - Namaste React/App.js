const heading1 = React.createElement(
  "h1",
  {
    // We will pass attributes here like className, id
  },
  "Heading 1"
);
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
  // Pass Children props(React Element)
]);
// console.log(heading); // Returns a plain JavaScript Object
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
root.render(container);
