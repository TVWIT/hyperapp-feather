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
    className: "feather feather-arrow-right",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M5 12h14M12 5l7 7-7 7" })
);