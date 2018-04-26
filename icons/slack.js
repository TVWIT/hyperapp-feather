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
    className: "feather feather-slack",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9zM12.57 5.99l3.58 10.4M7.85 7.61l3.58 10.4M16.39 7.85l-10.4 3.58M18.01 12.57l-10.4 3.58" })
);