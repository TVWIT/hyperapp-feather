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
    className: "feather feather-pause",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M6 4h4v16H6zM14 4h4v16h-4z" })
);