export default class Color {
  constructor(hue, sat, lum, alpha) {
    this.hue = hue;
    this.sat = sat;
    this.lum = lum;
    this.alpha = alpha;
    this.hsl = `hsla(${this.hue},${this.sat}%,${this.lum}%,${this.alpha})`;
  }

  darken(value) {
    return `hsla(${this.hue},${this.sat}%,${this.lum - value}%,${this.alpha})`
  }

  lighten(value) {
    return `hsla(${this.hue},${this.sat}%,${this.lum + value}%,${this.alpha})`
  }
}