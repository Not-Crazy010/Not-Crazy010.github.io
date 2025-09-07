
const faviconFramePaths = [
  'resources/favicons/1.svg',
  'resources/favicons/2.svg',
  'resources/favicons/3.svg',
  'resources/favicons/4.svg',
  'resources/favicons/5.svg',
  'resources/favicons/6.svg',
  'resources/favicons/7.svg',
  'resources/favicons/8.svg',
  'resources/favicons/9.svg',
  'resources/favicons/10.svg',
  'resources/favicons/11.svg',
  'resources/favicons/12.svg',
  'resources/favicons/13.svg',
  'resources/favicons/14.svg',
  'resources/favicons/15.svg',
  'resources/favicons/16.svg',
  'resources/favicons/17.svg',
  'resources/favicons/18.svg',
  'resources/favicons/19.svg',
  'resources/favicons/20.svg',
  'resources/favicons/21.svg',
  'resources/favicons/22.svg',
  'resources/favicons/23.svg',
  'resources/favicons/24.svg',
  'resources/favicons/25.svg',
  'resources/favicons/26.svg',
  'resources/favicons/27.svg',
  'resources/favicons/28.svg',
  'resources/favicons/29.svg',
  'resources/favicons/30.svg',
  'resources/favicons/31.svg',
  'resources/favicons/32.svg'
];

let faviconFrames = [];
let currentFrame = 0;

function updateFavicon(dataUrl) {
  const oldLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
  oldLinks.forEach(link => link.remove());

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = dataUrl;
  document.head.appendChild(link);
}

function preloadFavicons(paths, callback) {
  let loaded = 0;
  const dataUrls = new Array(paths.length);
  paths.forEach((path, i) => {
    fetch(path)
      .then(response => response.text())
      .then(svgText => {
        dataUrls[i] = 'data:image/svg+xml;base64,' + btoa(svgText);
        loaded++;
        if (loaded === paths.length) {
          callback(dataUrls);
        }
      });
  });
}

preloadFavicons(faviconFramePaths, function(dataUrls) {
  faviconFrames = dataUrls;
  setInterval(() => {
    updateFavicon(faviconFrames[currentFrame]);
    currentFrame = (currentFrame + 1) % faviconFrames.length;
  }, 110);
});