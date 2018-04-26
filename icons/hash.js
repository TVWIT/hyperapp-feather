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
    className: "feather feather-hash",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" })
);