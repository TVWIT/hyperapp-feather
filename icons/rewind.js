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
    className: "feather feather-rewind",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" })
);