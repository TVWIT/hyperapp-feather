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
    className: "feather feather-upload-cloud",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M16 16l-4-4-4 4M12 12v9" }),
  h("path", { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }),
  h("path", { d: "M16 16l-4-4-4 4" })
);