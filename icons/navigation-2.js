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
    className: "feather feather-navigation-2",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M12 2l7 19-7-4-7 4 7-19z" })
);