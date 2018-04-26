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
    className: "feather feather-crop",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }),
  h("path", { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" })
);