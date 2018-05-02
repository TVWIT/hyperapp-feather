const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': 2,
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    className: "feather feather-film",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 2, width: 20, height: 20, rx: 2.18, ry: 2.18 }),
  h("path", { d: "M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" })
);