/**
 * Get color (black/white) depending on hexcolor forr accesibility colors
 * @param hexcolor
 * @returns {string}
 */

export default function contrastText(hexcolor: any) {
  /*!
   * Get the contrasting color for any hex color
   * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
   * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
   * @param  {String} A hexcolor value
   * @return {String} The contrasting color (black or white)
   */

  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1)
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex: any) {
        return hex + hex
      })
      .join('')
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16)
  var g = parseInt(hexcolor.substr(2, 2), 16)
  var b = parseInt(hexcolor.substr(4, 2), 16)

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? 'black' : 'white'
}
