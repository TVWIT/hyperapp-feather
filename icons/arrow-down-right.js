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
    className: "feather feather-arrow-down-right",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M7 7l10 10M17 7v10H7" })
);