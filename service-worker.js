/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf3a6cf98e1266082ca9b9a015e6f22b"
  },
  {
    "url": "assets/css/0.styles.e055f9f7.css",
    "revision": "faa6f4794bb783ec8f5a3e19601497f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af479112.js",
    "revision": "eb34d8ef6aabdce6737a7e8481b492e4"
  },
  {
    "url": "assets/js/11.51089e13.js",
    "revision": "4a5502cd3f6e604233374ca05c5e87fe"
  },
  {
    "url": "assets/js/12.d8b54bc4.js",
    "revision": "4e53798d37123864e2026191a7d3ca06"
  },
  {
    "url": "assets/js/13.393d0a3c.js",
    "revision": "fa1842ea89cd48fc0d8d4414e90084eb"
  },
  {
    "url": "assets/js/14.e368dcbe.js",
    "revision": "92e09be34d3f9220a025ed390273a1b1"
  },
  {
    "url": "assets/js/15.f117288a.js",
    "revision": "65898d21e553e243bed939621190e443"
  },
  {
    "url": "assets/js/16.ee23fb0d.js",
    "revision": "e2bb9e78da00c22654b2693122c6c08c"
  },
  {
    "url": "assets/js/17.527e63fb.js",
    "revision": "92a72de28a5383326e9be7bdf20b15e4"
  },
  {
    "url": "assets/js/18.7f60e9e7.js",
    "revision": "8c185957b028a7fa26c63b468f555465"
  },
  {
    "url": "assets/js/19.0f87b58c.js",
    "revision": "57fecfbba38203c3a856c1bed0df8c01"
  },
  {
    "url": "assets/js/2.63cc7336.js",
    "revision": "e647ad7c43d37b81185d7a9812fe7448"
  },
  {
    "url": "assets/js/20.bbabf233.js",
    "revision": "ab311d891f43ddf3ad8e40da8410501b"
  },
  {
    "url": "assets/js/21.90cf19cb.js",
    "revision": "fff2b4f22118505f08543343d81b67ba"
  },
  {
    "url": "assets/js/22.61672b14.js",
    "revision": "6ed5e383b40e08c18427c46f08e93293"
  },
  {
    "url": "assets/js/23.af3d6f18.js",
    "revision": "d2cec3a1666b66b7f8860c14adb51642"
  },
  {
    "url": "assets/js/24.3bd34108.js",
    "revision": "09779a6e783e7605a30c360e92b8777f"
  },
  {
    "url": "assets/js/25.b9b70dfe.js",
    "revision": "5ba9e8a009b0dee5fece31cd9b653dc1"
  },
  {
    "url": "assets/js/26.4d091f11.js",
    "revision": "a973785bb288c26c38a3845251fc43fd"
  },
  {
    "url": "assets/js/3.f16a3b39.js",
    "revision": "f24fc26a5042c6f5b12ced45fc2275c0"
  },
  {
    "url": "assets/js/4.84e127eb.js",
    "revision": "77a6c30ec1971a9e7ea8580cdf049b1e"
  },
  {
    "url": "assets/js/5.14c09f23.js",
    "revision": "7978615a272c46e696f6ed0ec29fcc2d"
  },
  {
    "url": "assets/js/6.06d3efcd.js",
    "revision": "ddd2205dcbba2fa8f773b83a9d88f396"
  },
  {
    "url": "assets/js/7.fe5ed037.js",
    "revision": "38c8c794b35f0c27394753fed2fa9313"
  },
  {
    "url": "assets/js/8.d9642a89.js",
    "revision": "b8722c1daa046a5e985f4c27bdaea718"
  },
  {
    "url": "assets/js/9.19551b3d.js",
    "revision": "b33af58fcf3285094decc8448c887475"
  },
  {
    "url": "assets/js/app.32c65ff1.js",
    "revision": "247415dee7c0dc6bb0f7ad524b15e331"
  },
  {
    "url": "column/index.html",
    "revision": "a636a6826240941c17cc9e6bcee11799"
  },
  {
    "url": "images/title.png",
    "revision": "8d66e8bef3aff733be766a2922f52eaf"
  },
  {
    "url": "images/titleImage.jpg",
    "revision": "05ade569b64e51d60cb077bac401288f"
  },
  {
    "url": "index.html",
    "revision": "0256466755941251ff83b192d28b54c5"
  },
  {
    "url": "project/index.html",
    "revision": "1e9ba5423c998521cab7f5f125c278dd"
  },
  {
    "url": "project/project.html",
    "revision": "8b895a11b21c7af0423d58d6bbc504ee"
  },
  {
    "url": "study/algorithm/algorithm2.html",
    "revision": "f913f40f104a5438e199308196a2a947"
  },
  {
    "url": "study/algorithm/index.html",
    "revision": "9b45c78ca774b76d35d9025db8245936"
  },
  {
    "url": "study/backend/index.html",
    "revision": "3c26ca6525c0bd9554d20e9a87d3f83a"
  },
  {
    "url": "study/cs/frontend.html",
    "revision": "5a0e143264b29c99f9b753ff8cb0b80c"
  },
  {
    "url": "study/cs/index.html",
    "revision": "e511b5424f14c587723fbc2757bce855"
  },
  {
    "url": "study/dataAnalysis/dataAnalysis2.html",
    "revision": "e01f046094a54901668dffe46162c7c1"
  },
  {
    "url": "study/dataAnalysis/index.html",
    "revision": "7b1d6cd1cda3dd6750c076ff7ea0c0ae"
  },
  {
    "url": "study/devOps/devOps2.html",
    "revision": "ca5795c703d0c06119944c3d56b99f89"
  },
  {
    "url": "study/devOps/index.html",
    "revision": "90c65f634d3c327b0de0bb7a75b27bf4"
  },
  {
    "url": "study/frontend/index.html",
    "revision": "21760bf06cfdf0dbccd5767d8793badb"
  },
  {
    "url": "study/programming/index.html",
    "revision": "6f31893f1a170c1d702c9ae097f4f755"
  },
  {
    "url": "study/python/index.html",
    "revision": "6b44213046bda78017a607519f626cee"
  },
  {
    "url": "study/python/python2.html",
    "revision": "6ebb8bf3d5bdc4ce67ea8f798bccf410"
  },
  {
    "url": "study/web/index.html",
    "revision": "18ad0c739f98694d953cb546fff34ab0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
