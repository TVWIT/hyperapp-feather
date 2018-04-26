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
    className: "feather feather-speaker",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 4, y: 2, width: 16, height: 20, rx: 2, ry: 2 }),
  h("circle", { cx: 12, cy: 14, r: 4 }),
  h("path", { d: "M12 6" })
);