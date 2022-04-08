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
    "revision": "3dc972027a3bf1c5c0d7630ea6e5e82c"
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
    "url": "assets/js/10.02d89a98.js",
    "revision": "8e804688996554c496858b84ab1a38a9"
  },
  {
    "url": "assets/js/11.0ca1bd38.js",
    "revision": "789f8d695da198fbb3dd8f56209737fc"
  },
  {
    "url": "assets/js/12.1468f9bd.js",
    "revision": "11066913d8b35465fef0a0efcfa87e7d"
  },
  {
    "url": "assets/js/13.ed42428f.js",
    "revision": "9c31e9982efe1b449f8c36c2401e4e5f"
  },
  {
    "url": "assets/js/14.b96ea9b9.js",
    "revision": "0fd9b2f5a237bbe5a88d6edfef79cdbd"
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
    "url": "assets/js/17.a4af56ce.js",
    "revision": "bb514f4c43d81fd5ab3c60a89c7294c0"
  },
  {
    "url": "assets/js/18.e1d2e3b2.js",
    "revision": "0cb9a24e4381ec72a391a8fcb1de80b3"
  },
  {
    "url": "assets/js/19.e887671c.js",
    "revision": "24762512361e2fc783075dc46362a541"
  },
  {
    "url": "assets/js/2.63cc7336.js",
    "revision": "e647ad7c43d37b81185d7a9812fe7448"
  },
  {
    "url": "assets/js/20.7d52fe52.js",
    "revision": "f31fab1ec8a4da2f80d813adf6e3bb14"
  },
  {
    "url": "assets/js/21.3d0402e1.js",
    "revision": "c1eabff8b0ad31d4297101d09dba1d95"
  },
  {
    "url": "assets/js/22.6bcf0e30.js",
    "revision": "952889579dc9cb2ffe77a4d63cc6255e"
  },
  {
    "url": "assets/js/23.8ba40741.js",
    "revision": "fc8fae7cfccc18241c577ab1bdf6f505"
  },
  {
    "url": "assets/js/24.29d990cd.js",
    "revision": "6d44f09860ddfca13aee5b3988bc333b"
  },
  {
    "url": "assets/js/3.f16a3b39.js",
    "revision": "f24fc26a5042c6f5b12ced45fc2275c0"
  },
  {
    "url": "assets/js/4.a8af4ab7.js",
    "revision": "bad09a0d70b56f638e945dbfb9f11623"
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
    "url": "assets/js/app.36d8ba11.js",
    "revision": "addf7d8c25b3eb09adfe0cc178cd10d9"
  },
  {
    "url": "column/index.html",
    "revision": "33821c05de6223ff3804e0843451c819"
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
    "revision": "10169a66b9ebfdae230094e5212c1e61"
  },
  {
    "url": "project/project.html",
    "revision": "74146bc822509f24088e9f92f55ea722"
  },
  {
    "url": "study/algorithm/algorithm2.html",
    "revision": "8f065b7b606e39e3f7ec32f1c8274b43"
  },
  {
    "url": "study/algorithm/code-or-death.html",
    "revision": "ef2010490852a68fc9e5a6073b970327"
  },
  {
    "url": "study/algorithm/index.html",
    "revision": "15e4c4a49ee06c8772be2f98f1838ba2"
  },
  {
    "url": "study/backend/backend.html",
    "revision": "8867e89491e7f092350efd24e4cbba28"
  },
  {
    "url": "study/cs/frontend.html",
    "revision": "55853fcb090ba3bc49641c0d7b72cbc9"
  },
  {
    "url": "study/cs/index.html",
    "revision": "135476de65c8155cd2a26776043ba4aa"
  },
  {
    "url": "study/dataEngineering.html",
    "revision": "cc26a7d5e9a5e1ca8f7caf98c0a77ff2"
  },
  {
    "url": "study/devOps/devOps2.html",
    "revision": "bc838fd3dc3e7c4118c9bfaa2e70022c"
  },
  {
    "url": "study/devOps/index.html",
    "revision": "1b627515b6d720fe94d7679d67fa8486"
  },
  {
    "url": "study/programming/index.html",
    "revision": "6f0103295ae9064db50d7a6907935f5a"
  },
  {
    "url": "study/python/index.html",
    "revision": "e818d7d82794724747b99a3783f1ed14"
  },
  {
    "url": "study/python/python2.html",
    "revision": "80cedaaf48b8fbe41e9ad67e2f082bbf"
  },
  {
    "url": "study/web/index.html",
    "revision": "ef08b0bbb854fd9c24f6f261ab7c7e20"
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
