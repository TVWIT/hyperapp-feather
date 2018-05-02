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
    className: "feather feather-droplet",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" })
);