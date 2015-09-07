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
  var RARE_SAD_PEPE_URL = chrome.extension.getURL('img/rare_sad_pepe.png');
  var RARE_MINION_PEPE_URL = chrome.extension.getURL('img/rare_minion_pepe.png');
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.1) { //one in ten pepes has the feels
      return dankify(victim, RARE_SAD_PEPE_URL);
    } else if (rare < 0.15) { //one in twenty pepes is secretly an evil minion
      return dankify(victim, RARE_MINION_PEPE_URL);
    } else {
      return dankify(victim, PEPE_URL);
    }
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.1) { //one in ten pepes has the feels
      return dankify(victim, RARE_SAD_PEPE_URL);
    } else if (rare < 0.15) { //one in twenty pepes is secretly an evil minion
      return dankify(victim, RARE_MINION_PEPE_URL);
    } else {
      return dankify(victim, PEPE_URL);
    }
  });
}

window.onclick = dankception;

setInterval(dankception, 100)
