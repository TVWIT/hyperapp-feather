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
    className: "feather feather-codepen",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" }),
  h("path", { d: "M22 8.5l-10 7-10-7" }),
  h("path", { d: "M2 15.5l10-7 10 7M12 2v6.5" })
);