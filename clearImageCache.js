(function clearImageCache_0_1() {
  const imageKeys = [];
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf("signed_url./file-proxy/") === 0) {
      imageKeys.push(localStorage.key(i))
    }
  }
  if (confirm(`Clear WorkFlowy image cache from local storage? [${imageKeys.length}]`)) {
    imageKeys.forEach(key => localStorage.removeItem(key))
  }
})();