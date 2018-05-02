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
    className: "feather feather-truck",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" }),
  h("circle", { cx: 5.5, cy: 18.5, r: 2.5 }),
  h("circle", { cx: 18.5, cy: 18.5, r: 2.5 })
);