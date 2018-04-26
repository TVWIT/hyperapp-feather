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
    className: "feather feather-maximize-2",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" })
);