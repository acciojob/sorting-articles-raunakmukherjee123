const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function remove(bandname) {
  return bandname.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => remove(a).localeCompare(remove(b)));

const ulist = document.getElementById("band");

sortedBands.forEach(band => {
  const listItem = document.createElement("li");
  listItem.textContent = band;
  ulist.appendChild(listItem);
});
