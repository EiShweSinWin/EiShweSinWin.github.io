'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/viber.png": "e997e65c8e0baa1e87e862ec0d13c92e",
"assets/assets/images/pp.png": "4b2568a96c528405180dbc6dc37afeab",
"assets/assets/images/note3.png": "9bff556ed1ba5facfbb379a340c806cd",
"assets/assets/images/telephone.png": "bd6f3f5e4fea9e7d3b56140862af659c",
"assets/assets/images/retail2.png": "1d3201d137c651d568fa9f823079c57f",
"assets/assets/images/retail3.png": "9b0e2bd6773ab514a984577613299780",
"assets/assets/images/telegram.png": "dda861cc8824acf8cd4ab1148e7f440c",
"assets/assets/images/note2.png": "256e7a27c2b6997bd8476a97f9c4c051",
"assets/assets/images/cu.png": "80dfd02c68aaa8b70f0a263d9b30af9f",
"assets/assets/images/whatsapp.png": "5e6704ef3415f0dfb1a518e0329f0d5d",
"assets/assets/images/facebook.png": "9049f5abadd6ff288e71e09b4d0a1d3f",
"assets/assets/images/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/images/note4.png": "9bff556ed1ba5facfbb379a340c806cd",
"assets/assets/images/github.png": "1991b9f760715553c3c8bad3f2658757",
"assets/assets/images/twitter.png": "601b3db8677b444f86b79154376433d8",
"assets/assets/images/note1.png": "2bc2310278208a16686bc4beac9492e6",
"assets/assets/images/retail1.png": "817d78aa062a609212a6e71a57d14b9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "39a830af553d28ebd55152aa0588d39c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "89bcc67f4bd04a7176ded0c94a053690",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"manifest.json": "a183436db24566a70fb53eb034a4cfbd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "4797296bb1782fb7fb48980b9a7d3c40",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/objects/64/feb45de77b69e7f03f618c6e22714822e89f94": "20e8e1cdd65370cd445d67a1698a50de",
".git/objects/ee/c29c73157b7ce715b803b691189b6dbf257892": "3bd5b8deac056dde392aa4f83e306544",
".git/objects/f2/928d5c61fd44b44344492fb8b4352a634c1330": "99ac34af2bf11a03502870f4a98257c8",
".git/objects/e6/5d396fe2a5a1a9dc5e063beb11e6be028005d8": "6de6f0a1f06fab36850e67be46e77f8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/9fb2c4eb0269dc81c8541f1493bb2bd38b4616": "c97da158bd17e6fad1da9991010a5bff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/c6c0c18d0c3c6411d03744022b7cdbe465cb28": "f3c157ba1a437a0c35d54a36da6666aa",
".git/objects/ec/8a6eeeca6a80611c5524379bbbb34da43e9945": "39db0ee15ec8f2cb86bd0469d5b1f21a",
".git/objects/46/1aa4454af8e48cb59a2b8e904ac75a148bf59e": "5497f134b158cf0c7b63ee4abf3964e2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7a5b8b73b1a705da721f976a806630d7868543": "6cc9408d7996e79ea8acc208bd16a921",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/f0/57684e573676ad162148b924b9f8247ce16cf9": "1d7c37fb717981137a59f70a6848db3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/19/e2d632d7329769260a4322012b8176b6d227c5": "d1edb0a24425ac0a9e3f73eadfac3cf4",
".git/objects/34/bef7a1d257eb44093aa8b4ce1a52c6964c5022": "08896469d142ebffa160e9d62c6f1f3c",
".git/objects/49/0756e0d5d098845cc3397e355f2bfb06654bdc": "0a6d3ca12c3e5661881915c4863f8d6d",
".git/objects/49/ca2800e74894b4c8e224d8ae4ac7055ade0831": "4dea19e5561f42dbfda5b554a4ade1f5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/b06748fafa11058383b8ee6fd3a5dcb61ba610": "270318aebeaec9520e978301c35027ea",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/3d/90bf1b5e6240e63c3701076e0f64bf92809373": "f7d5196441281460835d2bf482b4af8b",
".git/objects/3d/4221d5930e67f13bff241a32a58c641114ba64": "238b6ee22eccd28c0d9d91cb93ad9f64",
".git/objects/c4/5085c24d552b6c75e18952c461ded973ec0a63": "fe839e1f30f3fc56af125ffb5b099972",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/3f/70eab72bb38033430f38339eb9b318f9d6caf2": "e1ad00118362b61b13f3b1debf2c8136",
".git/objects/79/63d504d0f4333ad8ae975c501b626007962bcf": "187c4a34d24ffb1d47708e75b6229f3e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/54/1d546c492daf43bde71d8af49caf1c3d6727a9": "fe48fccbe55382f882efa62136b6ca58",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/86a9da1b9f242d86cd32b82e47b4fbc77fad48": "e7f259f002ca5474a450830fda54f2e9",
".git/objects/40/cb471df39669e7a35ce612f397eca61d7a3944": "2a2747effa63c1905ef25639c015fcde",
".git/objects/00/d605aec05788975bdd3f5323a77c0a5d31ff9f": "30e6b278b41be0c4944363a2499fd11a",
".git/objects/3b/0b9047c29c2b184ed5079f424290bbfc6fc0a8": "264b31a6770c86c8f2d71dce3176437f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e4/78da5b044538cdf47b209a453acc1fc28f364d": "d9bab48feece744f62dbe6766ed49367",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/47/f3fd8cec088f55ef60ed978f83cc39590989ec": "dae7481a9ce34d78904ac20f8d5072cf",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/30/2520386f31663f2640c02f05c47074c33d0639": "2b38f4a3303aeccf9bb2161b3f084f82",
".git/objects/c9/88dc73ffd15fcdd02c33dae0c1f56836805e6f": "fdce5ed31d54a2e34f50f38ed773f295",
".git/objects/ef/6e30bb4b89f0f02b10900b6ff6801b58522d7d": "fadec166d1bc26561cf36889abec1d02",
".git/objects/74/08ef423fc0ef9bba84b6728ccfc6f0e8e10f56": "4b3c2a34eb67b8ca0991452e42f00c39",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/5d/23b78caa5463dbbdda2e8a96cd5a609e8b3fdc": "d03f6fb34bba13bbef222c6fbb5efc49",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/97/0aa88ddddbd045655806a49a9b7d91809c6a35": "7ceedec46f07ea0d0fd10267278b4ecc",
".git/index": "8906fee2d0030dd41c33fe0a3f7fca9e",
".git/COMMIT_EDITMSG": "2b07579443c04175817e6ccf380e5cb4",
".git/refs/remotes/origin/main": "e4f21d69ea6431fc679f280e60a5d9df",
".git/refs/heads/main": "e4f21d69ea6431fc679f280e60a5d9df",
".git/logs/HEAD": "a6937d8b13f92d744cf48fe9592605d7",
".git/logs/refs/remotes/origin/main": "5340c4287464834d59a2859486d617f3",
".git/logs/refs/heads/main": "9376f50e83b9dd43116436510a433d9a",
"main.dart.js": "a385e71f03cf7ff52387003db33374ba",
"version.json": "c9007f0ac39deefc02e18858d50fe374",
"index.html": "61f2b4b86ab701b43ffc4fc90f6b7333",
"/": "61f2b4b86ab701b43ffc4fc90f6b7333",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
