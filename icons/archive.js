const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-archive",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M21 8v13H3V8M1 3h22v5H1zM10 12h4" })
);