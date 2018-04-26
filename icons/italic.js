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
    className: "feather feather-italic",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M19 4h-9M14 20H5M15 4L9 20" })
);