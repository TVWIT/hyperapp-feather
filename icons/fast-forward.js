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
    className: "feather feather-fast-forward",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" })
);