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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7ffeeb43427605475ac5.js"
  },
  {
    "url": "app-473ad72f5bb83c841dc2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0b1e40f832de26302ff8.js"
  },
  {
    "url": "index.html",
    "revision": "e68caa27f10d709ffa66116e43623857"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d251a35013cf8ded1a9a6dadefb957fe"
  },
  {
    "url": "2.5a82bf3ec9b6c0437e4d.css"
  },
  {
    "url": "component---src-templates-index-js.1382f27ce3b9a5062a52.css"
  },
  {
    "url": "1.4ddf90296a09dc47175c.css"
  },
  {
    "url": "component---src-templates-index-js-ff58bdff8566e03cc1b1.js"
  },
  {
    "url": "13-499f79af2a3731ab300d.js"
  },
  {
    "url": "0-d2d5efdb7ddcd1a9c7a5.js"
  },
  {
    "url": "1-3f60eb6ea571a5b87d63.js"
  },
  {
    "url": "2-3ad3167b325e7c53c746.js"
  },
  {
    "url": "static/d/344/path---index-6a9-6NS0hj1hZ0l1qA3HhLlM2s6Sv0.json",
    "revision": "8faf8840e52687d401b99c49542a0c4c"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6932514d85923a9fc854c8006fc57105"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});