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
    className: "feather feather-monitor",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 3, width: 20, height: 14, rx: 2, ry: 2 }),
  h("path", { d: "M8 21h8M12 17v4" })
);