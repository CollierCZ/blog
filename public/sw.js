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
    "url": "webpack-runtime-3feaed7adce5e0d04745.js"
  },
  {
    "url": "app-374bda68bdaaa04f358f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6f06d543b29d044d7f15.js"
  },
  {
    "url": "index.html",
    "revision": "4b365cfc2d9e9e37091b3764fb5bb67d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bc68b1429538e165b996dbed18826b0d"
  },
  {
    "url": "styles.4e775bcc775739e5b06d.css"
  },
  {
    "url": "component---src-templates-index-js-93b77878e3a21e0b7e05.js"
  },
  {
    "url": "11-f5cab6b4463148985a72.js"
  },
  {
    "url": "1-c8ab356ffcd12333ff33.js"
  },
  {
    "url": "styles-f0dc9b1b5402c1be3480.js"
  },
  {
    "url": "static/d/768/path---index-6a9-sWZLaT5h0Wh5guKYiCY6Uw9WQ4.json",
    "revision": "f31787aa1a31521ed2ecb467c419a386"
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