const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': 2,
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    className: "feather feather-share-2",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 18, cy: 5, r: 3 }),
  h("circle", { cx: 6, cy: 12, r: 3 }),
  h("circle", { cx: 18, cy: 19, r: 3 }),
  h("path", { d: "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" })
);