// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "index.html",

	"css/growl.css",
	"css/index.css",
	"css/variables.css",
	"css/sidebar.css",
	
	"img/favicon.png",
	"img/cancelled.svg",
	"img/cert-grey.svg",
	"img/cert-white.svg",
	"img/clipboard-grey.svg",
	"img/clipboard-white.svg",
	"img/doc-grey.svg",
	"img/edit-grey.svg",
	"img/edit-white.svg",
	"img/error-icon.svg",
	"img/info-icon.svg",
	"img/logo.svg",
	"img/nclose.svg",
	"img/org-grey.svg",
	"img/org-white.svg",
	"img/pc-grey.svg",
	"img/pc-white.svg",
	"img/query-grey.svg",
	"img/query-white.svg",
	"img/success-icon.svg",
	"img/warning-icon.svg",
	
	"includes/bootstrap.css",
	"includes/bootstrap.js",
	"includes/jquery.js",
	"includes/kendo.css",
	"includes/kendo.js",
	
	"js/ap.js",
	"js/const.js",
	"js/index.js",
	"js/templates.js",
	"js/utility.js",
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            console.log(cache);
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
