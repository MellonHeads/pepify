'use strict';

function getRekt(element) {
  var rekt = element.getBoundingClientRect();
  return {
    top: rekt.top + 'px',
    left: rekt.left + 'px',
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
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.body.scrollLeft = document.documentElement.scrollLeft = 0;
  var meme = new Image();
  meme.src = url;
  meme.className = 'pepe';
  meme.style.position = 'absolute';
  var rekt = getRekt(element);
  console.log(rekt);

  for (var key in rekt) {
    meme.style[key] = rekt[key];
  }

  document.body.appendChild(meme);
}

function dankception() {
  blazeIt();
  var PEPE_URL = 'http://i.imgur.com/0uUvmEE.png';
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
    return dankify(victim, PEPE_URL);
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
    return dankify(victim, PEPE_URL);
  });
}

dankception();

