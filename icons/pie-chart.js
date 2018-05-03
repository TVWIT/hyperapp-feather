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
    className: "feather feather-pie-chart",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  h("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
);