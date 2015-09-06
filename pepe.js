'use strict';

function getRekt(element) {
  var rekt = element.getBoundingClientRect();
  return {
    top: rekt.top + document.body.scrollTop + 'px',
    left: rekt.left + document.body.scrollLeft + 'px',
    right: rekt.right + 'px',
    height: rekt.height + 'px',
    width: rekt.width + 'px'
  };
}

// Kills existing pepes with fire.
function blazeIt() {
  var pepes = document.getElementsByClassName('pepe');
  while (pepes[0]) {
    pepes[0].parentNode.removeChild(pepes[0]);
  }
}

function dankify(element, url) {
  var meme = new Image();
  meme.src = url;
  meme.className = 'pepe';
  meme.style.position = 'absolute';
  var rekt = getRekt(element);
  meme.style.zIndex = '420420';

  for (var key in rekt) {
    meme.style[key] = rekt[key];
  }

  document.body.appendChild(meme);
}

function dankception() {
  blazeIt();
  var PEPE_URL = chrome.extension.getURL('img/pepe.png');
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
    return dankify(victim, PEPE_URL);
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
    return dankify(victim, PEPE_URL);
  });
}

window.onclick = dankception;

setInterval(dankception, 100)
