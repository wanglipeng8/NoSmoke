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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c040d619061eac812803f44410f7710"
  },
  {
    "url": "assets/css/0.styles.5aab1cc0.css",
    "revision": "51e4deea9fcb7787519ca5d0fe058aa8"
  },
  {
    "url": "assets/generated_output.png",
    "revision": "f3c20eaa6ef4fddae066f67a7d7707e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2fffa566.js",
    "revision": "1effc6a328557d741629157b576af724"
  },
  {
    "url": "assets/js/11.6fd8dee7.js",
    "revision": "660f70c79157945e07d931a0950ff5b5"
  },
  {
    "url": "assets/js/12.40ca408f.js",
    "revision": "1c64c3e22c721b997bc4fda59adb9fdb"
  },
  {
    "url": "assets/js/13.67a66ee6.js",
    "revision": "caf21b25b9a890eefa2361e789b72ccd"
  },
  {
    "url": "assets/js/14.fcc50bc6.js",
    "revision": "bcf8c53320aec69fe5bd35dfd1ee1a16"
  },
  {
    "url": "assets/js/15.9cfb8927.js",
    "revision": "63d7d4be9e820670cec8781149c6d19c"
  },
  {
    "url": "assets/js/16.fe37926b.js",
    "revision": "416f2cd25fb80c4e32ec3ee951efb275"
  },
  {
    "url": "assets/js/17.6dcc926e.js",
    "revision": "e63192d0afbc8997193bfaa047af404e"
  },
  {
    "url": "assets/js/18.783a9ae3.js",
    "revision": "93bdda50034ece33b224a815c3c0b24d"
  },
  {
    "url": "assets/js/19.0b52ab29.js",
    "revision": "8d836237fb10eb1cb2d02dfe05a54198"
  },
  {
    "url": "assets/js/2.107983ff.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.ee08726a.js",
    "revision": "cc49689dbf19172881f84e3918059e89"
  },
  {
    "url": "assets/js/4.d811db9a.js",
    "revision": "e631c22c84ccfd8c745eea8affe2ff20"
  },
  {
    "url": "assets/js/5.eb676c36.js",
    "revision": "7b831d217c1cf51524fb121b8167de9e"
  },
  {
    "url": "assets/js/6.e2edaa9b.js",
    "revision": "59ae92931592e8fb31f0156a6b43b1a5"
  },
  {
    "url": "assets/js/7.5ea9f813.js",
    "revision": "69f22e1290c595aec89156f9bce74f84"
  },
  {
    "url": "assets/js/8.24ab0863.js",
    "revision": "1817c2a2aa360ead7424815d7cbc4c5f"
  },
  {
    "url": "assets/js/9.e5d419a5.js",
    "revision": "03181598bcc49d0f0e5367ff1b8473f7"
  },
  {
    "url": "assets/js/app.d1c45c05.js",
    "revision": "fa915cde8bd091af2c75565bd5376d25"
  },
  {
    "url": "assets/macaca-architecture-2.0.png",
    "revision": "196aa63a061930c2c838d05cf3f088ec"
  },
  {
    "url": "assets/new_report_layout.png",
    "revision": "6b89e34146bf9b2bb3902528c87e2042"
  },
  {
    "url": "assets/nosmoke-2.0.png",
    "revision": "21d85f66bc9b95fa843e2d828a89b6f5"
  },
  {
    "url": "assets/nosmoke-hook-2.0.png",
    "revision": "85fbe8277bcac3d90500caaf804a7c37"
  },
  {
    "url": "guide/configuration.html",
    "revision": "19e268b1e02e0ee8462083dcccd25292"
  },
  {
    "url": "guide/continious-integration.html",
    "revision": "524e3eaffb43ae162a7a9c94b0cc75c9"
  },
  {
    "url": "guide/cross-platform.html",
    "revision": "ebf0624188cd3fd524cfa7645a4b53d7"
  },
  {
    "url": "guide/hooks.html",
    "revision": "2a4d65ef40ab59a6a00bde27e32645f6"
  },
  {
    "url": "guide/index.html",
    "revision": "9cfe0cb9c94f357f28d185d5e67e590a"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "7b68b7c22db65be35187219bcfb41ed1"
  },
  {
    "url": "guide/roadmap.html",
    "revision": "9b04a840d17ff391620d04a5bcc44aca"
  },
  {
    "url": "index.html",
    "revision": "b5ef22d5a4f82af49db5edbcea339f3c"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "9642f36190c1404a5a31a04dd544a20b"
  },
  {
    "url": "zh/guide/continious-integration.html",
    "revision": "067e19b8eb8fc3ee66eab604e3c94675"
  },
  {
    "url": "zh/guide/cross-platform.html",
    "revision": "5b19ac465957f122a4e17639b392a0c2"
  },
  {
    "url": "zh/guide/hooks.html",
    "revision": "59654b4f033e07d34601ea24dadcda66"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "97a1fc529fd70ae365541037b04f4360"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "0601936d2689678f2c8c6e63afadd15a"
  },
  {
    "url": "zh/guide/roadmap.html",
    "revision": "1036e2e169d4042e5541ef1d627035a2"
  },
  {
    "url": "zh/index.html",
    "revision": "c71ff509e2354ef0683e0418304153eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
