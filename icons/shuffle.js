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
    className: "feather feather-shuffle",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" })
);