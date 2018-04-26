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
    className: "feather feather-arrow-down-circle",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("path", { d: "M8 12l4 4 4-4M12 8v8" })
);