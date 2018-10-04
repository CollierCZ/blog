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
    "url": "webpack-runtime-c6aedb5a0edf3688ef10.js"
  },
  {
    "url": "app-473ad72f5bb83c841dc2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0b1e40f832de26302ff8.js"
  },
  {
    "url": "index.html",
    "revision": "31e9b57cffce4d3b5b751100715068a6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e3e1df10c297b951b1b628e64d2ab398"
  },
  {
    "url": "2.f22e50596623336453dd.css"
  },
  {
    "url": "component---src-templates-index-js.03ad70e2733f3e191498.css"
  },
  {
    "url": "1.6f3fc02c0905220e71e0.css"
  },
  {
    "url": "component---src-templates-index-js-c9d26d21179da5c6db9a.js"
  },
  {
    "url": "13-7566615a6710f55b2ea2.js"
  },
  {
    "url": "0-35c3a148c235dcf236f5.js"
  },
  {
    "url": "1-c4d91dac8dc084f5c41e.js"
  },
  {
    "url": "2-93c0a387363c7edabdad.js"
  },
  {
    "url": "static/d/824/path---index-6a9-PViayjKIjRUvamJkhNjwiY1x0s.json",
    "revision": "0e8540cd606b701c624b80a1e051e303"
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