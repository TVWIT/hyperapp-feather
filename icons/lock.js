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
    className: "feather feather-lock",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 }),
  h("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
);