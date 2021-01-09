const btn = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['AliceBlue', 'AntiqueWhite','Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond','Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise','DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'FloralWhite', 'GhostWhite', 'Gold', 'GoldenRod', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo','Ivory', 'Lavender', 'LavenderBlush', 'LemonChiffon', 'LightBlue', 'Silver', 'Tan', 'LightGray','LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSteelBlue', 'Lime', 'Purple', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MidnightBlue', 'Black']

body.style.backgroundColor = 'White'

function changeBg() {
  const colorList = parseInt(Math.random() * colors.length)
  body.style.backgroundColor = colors[colorList]
}

btn.addEventListener('click', changeBg);