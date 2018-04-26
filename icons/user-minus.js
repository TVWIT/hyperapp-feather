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
    className: "feather feather-user-minus",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  h("circle", { cx: 8.5, cy: 7, r: 4 }),
  h("path", { d: "M23 11h-6" })
);