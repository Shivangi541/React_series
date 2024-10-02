// const heading = React.createElement("h1", { id: "head" }, "HELLO WORLD!!!");
// console.log(heading);

//nested structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head1" }, "heading1 of sibling 1"),
    React.createElement("h2", { id: "head2" }, "heading2 of sibling1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head3" }, "heading1 of sibling1"),
    React.createElement("h2", { id: "head4" }, "heading2 of sibling2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
