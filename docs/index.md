# Clear WorkFlowy Image Cache
- Use this utility if some images are not displaying properly in WorkFlowy.
- This clears image cache from your client's local storage.
- This script makes no changes to your WorkFlowy data. 
- After installing to your bookmarks bar, click the bookmarklet while inside WorkFlowy.
- Press OK at the prompt, and then reload WorkFlowy.

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function clearImageCache_0_2(){const imageKeys=[];for(var i=0;i&lt;localStorage.length;i++){if(localStorage.key(i).indexOf(&quot;signed_url./&quot;)===0){imageKeys.push(localStorage.key(i))}}if(confirm(`Clear WorkFlowy image cache from local storage? [${imageKeys.length}]`)){imageKeys.forEach(key=&gt;localStorage.removeItem(key))}})();">clearImageCache</a>

## Links:
- [Source code](https://github.com/rawbytz/clear-image-cache/blob/master/clearImageCache.js)
- [rawbytz Blog](https://rawbytz.wordpress.com)


## Version Notes:
- v0.2 (2022-10-03): Support new localStorage key format
- v0.1 (2022-08-09): Initial release