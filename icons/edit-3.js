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
    className: "feather feather-edit-3",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M14 2l4 4L7 17H3v-4L14 2zM3 22h18" })
);