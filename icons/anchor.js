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
    className: "feather feather-anchor",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 5, r: 3 }),
  h("path", { d: "M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" })
);