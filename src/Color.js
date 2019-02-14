export default class Color {
  constructor(hue, sat, lum, alpha) {
    // Max value 360
    this.hue = hue;
    // Max value 100
    this.sat = sat;
    // Max value 100
    this.lum = lum;
    // Max value 1
    this.alpha = alpha;
    this.hsl = `hsla(${this.hue},${this.sat}%,${this.lum}%,${this.alpha})`;
  }

  darken(value) {
    return `hsla(${this.hue},${this.sat}%,${this.lum - value}%,${this.alpha})`
  }

  lighten(value) {
    return `hsla(${this.hue},${this.sat}%,${this.lum + value}%,${this.alpha})`
  }

  getNewHue(value) {
    return `hsla(${value},${this.sat}%,${this.lum}%,${this.alpha})`
  }
}
