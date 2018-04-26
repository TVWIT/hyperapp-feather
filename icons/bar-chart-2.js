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
    className: "feather feather-bar-chart-2",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M18 20V10M12 20V4M6 20v-6" })
);