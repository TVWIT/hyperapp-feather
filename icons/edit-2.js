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
    className: "feather feather-edit-2",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "16 3 21 8 8 21 3 21 3 16 16 3" })
);