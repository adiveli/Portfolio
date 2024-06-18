'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1a7803fce223df012549eed0732f2cd",
"index.html": "f1f27df5b5442070116e4af8f2e37f52",
"/": "f1f27df5b5442070116e4af8f2e37f52",
"main.dart.js": "23ddc21473fcbc5819601e216370449f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "52f3c32205bfd85a3af184ff80ea2815",
"assets/AssetManifest.json": "10b7ca524816e4cd6ac6c64b7b8af9fc",
"assets/NOTICES": "4458efbe552526c185d86b1bd9c49d4b",
"assets/FontManifest.json": "0a612a8b919b3f87069fcc76f94ab95b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/IndoorLocalisation/indoor1.png": "922f70386e9b0c320f53d4eef0431ec8",
"assets/assets/images/IndoorLocalisation/indoor3.png": "e0ded6d502a6c8d1363f5a7ab5298c4c",
"assets/assets/images/IndoorLocalisation/indoor2.png": "5751d4ddd0866adb151307f86ba40143",
"assets/assets/images/nypd/nypd2.png": "0f6c2c511a52f3484429938bb186f9a2",
"assets/assets/images/nypd/nypd3.png": "1a19cbed9995ebf8fce3d0173fd3f762",
"assets/assets/images/nypd/nypd1.png": "291074f69fe75c8afd2fd4fbb35562b8",
"assets/assets/images/nypd/nypd4.png": "470c6e849d5b332265f24ff6c25ec2e4",
"assets/assets/images/nypd/nypd5.png": "8a6ae175461c31c7f285c4adbf4f7c2a",
"assets/assets/images/MapExplorer/map1.png": "00d1cfc97bc79b9bfad83b202c9af728",
"assets/assets/images/MapExplorer/map2.png": "56b1a688403aa20476f414044cd908d2",
"assets/assets/images/start/start8.png": "a80b1aace132c6766ca8313dcc207f05",
"assets/assets/images/start/start2.png": "71ae020bb2249f8a7407f3682e9021cf",
"assets/assets/images/start/start3.png": "9bc5f60936e81a45665e9fa991780460",
"assets/assets/images/start/start1.png": "0ef6345db43a9673d3e12d89c45588b5",
"assets/assets/images/start/start4.png": "5bae697fd6fbaa2297105e877bf487d0",
"assets/assets/images/start/start5.png": "3b43066a4a10188d3f1460753bd17530",
"assets/assets/images/start/start7.png": "e14ebd609416efa8e1914482bee6a2c9",
"assets/assets/images/start/start6.png": "8601531e557b2953d616f7b40c1455e4",
"assets/assets/images/giphy.gif": "f3c4198130a408d8f5eb42fe7c80e28d",
"assets/assets/images/autominder/autominder3.png": "6e8510f422062b89089ea14bf9f090e3",
"assets/assets/images/autominder/autominder2.png": "20f3a23a7517cef70e380b2168775e56",
"assets/assets/images/autominder/autominder1.png": "78423db3713da21d6805d4ae8ac7fb6a",
"assets/assets/images/autominder/autominder5.png": "4691f10dd2ad65137e03a6f0719099b6",
"assets/assets/images/autominder/autominder4.png": "a77dc5818ab3479a5c4967ae2566f805",
"assets/assets/images/autominder/autominder6.png": "219bf0328eed90a62987d3cc51e10374",
"assets/assets/images/autominder/autominder7.png": "3d223f496d111d6bd1f99fc21582d539",
"assets/assets/images/autominder/autominder8.png": "387f5520f83eccc7da1f4e86bca63865",
"assets/assets/images/gif.gif": "239c614866cc1fa0f3f62aca6ca1e59c",
"assets/assets/images/tabula/tabula2.png": "8594da2646440c3c701b9c7cad907f86",
"assets/assets/images/tabula/tabula3.png": "8c2f3729012b0e26aa2179ea3e335068",
"assets/assets/images/tabula/tabula1.png": "5a5bac50a44ed8e69fd31ea86c8ae8d3",
"assets/assets/images/tabula/tabula4.png": "26ccb1cdc242100ebfe7b5b45eaf044b",
"assets/assets/images/tabula/tabula5.png": "d0aab81908945927c19d4a2a8a6ebe3e",
"assets/assets/icons/instagramIcon.png": "356afaade77895106c3ccda1ad908e40",
"assets/assets/icons/instagramIcon.svg": "ec3a604cc495a5e575c145fceb7ff56a",
"assets/assets/icons/linkedinIcon.svg": "0166837c76d08fa41350ab3d6c959d08",
"assets/assets/icons/githubIcon.svg": "78058cdf0f31cdacee83267e26fc2d23",
"assets/assets/icons/youtube.svg": "f169a8d931e3e8d1ab9093e791bae4a7",
"assets/assets/fonts/RobotoSlab-Medium.ttf": "2d7dfc7292f7b78ad08c1d2f920a0bb7",
"assets/assets/fonts/RobotoSlab-SemiBold.ttf": "73252195fa127fdb7907afbe3ab2211b",
"assets/assets/fonts/RobotoSlab-ExtraBold.ttf": "d7699fb48356b45c38294203d4b7577f",
"assets/assets/fonts/RobotoSlab-Thin.ttf": "8535a93b28479ba2534e83e8c717ea0e",
"assets/assets/fonts/RobotoSlab-Black.ttf": "ea42831afc2b6fc44007141eb8390406",
"assets/assets/fonts/RobotoSlab-Bold.ttf": "02e1b4cf36619036de47b4ac35b08dc3",
"assets/assets/fonts/RobotoSlab-Light.ttf": "89410baaf0c550c4fab30fabccf02382",
"assets/assets/fonts/RobotoSlab-ExtraLight.ttf": "1c1668911a52ba081353bd3af79b44be",
"assets/assets/fonts/RobotoSlab-Regular.ttf": "f6b809aa6460d420334f850f6d644a62",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
