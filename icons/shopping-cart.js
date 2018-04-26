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
    className: "feather feather-shopping-cart",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 9, cy: 21, r: 1 }),
  h("circle", { cx: 20, cy: 21, r: 1 }),
  h("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
);