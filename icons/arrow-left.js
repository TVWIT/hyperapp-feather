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
    className: "feather feather-arrow-left",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M19 12H5M12 19l-7-7 7-7" })
);