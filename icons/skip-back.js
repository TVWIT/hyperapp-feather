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
    className: "feather feather-skip-back",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M19 20L9 12l10-8v16zM5 19V5" })
);