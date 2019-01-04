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
    "url": "webpack-runtime-1ca21c16b5db1d62adba.js"
  },
  {
    "url": "app-619e905a9d9751606a72.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0b1e40f832de26302ff8.js"
  },
  {
    "url": "index.html",
    "revision": "2dae78e8a14d640da13ad589057e314e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7ddf47c6c92cc488b3161a02d12b7c47"
  },
  {
    "url": "2.942121ff226016d20121.css"
  },
  {
    "url": "component---src-templates-index-js.8b332b4193e1081c9853.css"
  },
  {
    "url": "1.3bc6ca27bc2b185570fd.css"
  },
  {
    "url": "component---src-templates-index-js-ee655c642bc57fff551b.js"
  },
  {
    "url": "13-499f79af2a3731ab300d.js"
  },
  {
    "url": "0-d2d5efdb7ddcd1a9c7a5.js"
  },
  {
    "url": "1-571037a1d57cc3967d2a.js"
  },
  {
    "url": "2-07a4d62865a65a764624.js"
  },
  {
    "url": "static/d/20/path---index-6a9-ifeGQCnxpXxFj5u4Odt3lnanB0.json",
    "revision": "f3039c754cd39ac3911915adaa30047c"
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