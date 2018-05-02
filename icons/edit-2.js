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
  h("path", { d: "M16 3l5 5L8 21H3v-5L16 3z" })
);