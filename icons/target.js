const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-target",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("circle", { cx: 12, cy: 12, r: 6 }),
  h("circle", { cx: 12, cy: 12, r: 2 })
);