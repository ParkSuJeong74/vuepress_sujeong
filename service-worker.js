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
    "revision": "b9db4c3aefc06da28d2749a790b30671"
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
    "url": "assets/js/14.870d0b10.js",
    "revision": "ddbaa21e7313a52bbd68c7d9fcf983c7"
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
    "url": "assets/js/17.f92186f6.js",
    "revision": "4aa35d48239a34117d80a4ab0b4450d8"
  },
  {
    "url": "assets/js/18.cd6966bd.js",
    "revision": "919513936376802c62ea4364c6b66da9"
  },
  {
    "url": "assets/js/19.bff23ca4.js",
    "revision": "36590cb068a80f2a7318ac6ce4a9900f"
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
    "url": "assets/js/23.e0ae6569.js",
    "revision": "844ed824ba626d358291817aaac6c2bb"
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
    "url": "assets/js/8.8460ab42.js",
    "revision": "8fff1d295e812bfa8518f2bd5ea69f62"
  },
  {
    "url": "assets/js/9.19551b3d.js",
    "revision": "b33af58fcf3285094decc8448c887475"
  },
  {
    "url": "assets/js/app.0c6d1262.js",
    "revision": "c7f31395e068e1529d87ca95476fa226"
  },
  {
    "url": "column/index.html",
    "revision": "4c46d097079edc473a8a94e536cecafe"
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
    "revision": "d86f02a4244327420a5d536536298d78"
  },
  {
    "url": "project/index.html",
    "revision": "4b24eb703d48e9e3e3ecfb4437d246ad"
  },
  {
    "url": "project/project.html",
    "revision": "90c4a49e4dcd3577b93677f511fd60af"
  },
  {
    "url": "study/algorithm/algorithm2.html",
    "revision": "dd7c5aa7b0ce722e6b87930cae2db1f3"
  },
  {
    "url": "study/algorithm/index.html",
    "revision": "2effb47c6f257e11e699aa75ab0cde74"
  },
  {
    "url": "study/backend/index.html",
    "revision": "62c2722e1f48ce6c8d2898e0ca8f0a3b"
  },
  {
    "url": "study/cs/frontend.html",
    "revision": "ac925f1b4fb38dce502b047498ef8046"
  },
  {
    "url": "study/cs/index.html",
    "revision": "7b913ad562c71cad13cf4e735ba309bd"
  },
  {
    "url": "study/dataAnalysis/dataAnalysis2.html",
    "revision": "bdea9c9f7d47aa281f807c9b110533df"
  },
  {
    "url": "study/dataAnalysis/index.html",
    "revision": "3f15f04ecf58c8d4fcbe622bc5529c20"
  },
  {
    "url": "study/devOps/devOps2.html",
    "revision": "af08b6d9bce21571adab48b94be60860"
  },
  {
    "url": "study/devOps/index.html",
    "revision": "8448dcec42a07f18afd418046a0141cf"
  },
  {
    "url": "study/frontend/index.html",
    "revision": "8242ab71a73460e492042957577de4a7"
  },
  {
    "url": "study/programming/index.html",
    "revision": "816b7a3e70766d5566b56ebbc07654f2"
  },
  {
    "url": "study/python/index.html",
    "revision": "915904048856132c77e6b30f9045e501"
  },
  {
    "url": "study/python/python2.html",
    "revision": "054b1285cc06589da29c3412e19f8caa"
  },
  {
    "url": "study/web/index.html",
    "revision": "87c6a88f9d8fe51e3471e89d87293e1b"
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
