function getRekt(element) {
  const rekt = element.getBoundingClientRect();
  return {
    top: `${rekt.top}px`,
    left: `${rekt.left}px`,
    right: `${rekt.right}px`,
    height: `${rekt.height}px`,
    width: `${rekt.width}px`,
  };
}

// Kills existing pepes with fire.
function blazeIt() {
  const pepes = document.getElementsByClassName('pepe');
  while (pepes[0]) {
    pepes[0].parentNode.removeChild(pepes[0]);
  }
}

function dankify(element, url) {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.body.scrollLeft = document.documentElement.scrollLeft = 0;
  const meme = new Image();
  meme.src = url;
  meme.className = 'pepe';
  meme.style.position = 'absolute';
  const rekt = getRekt(element);
  console.log(rekt);

  for (const key in rekt) {
    meme.style[key] = rekt[key];
  }

  document.body.appendChild(meme);
}

function dankception() {
  blazeIt();
  const PEPE_URL = 'http://i.imgur.com/0uUvmEE.png';
  [].forEach.call(document.getElementsByClassName('faceBox'), victim => dankify(victim, PEPE_URL));
  [].forEach.call(document.getElementsByClassName('tagBox'), victim => dankify(victim, PEPE_URL));
}

window.onbeforeunload = blazeIt;

dankception();
