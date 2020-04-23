/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkOnly } from "workbox-strategies";
/**
 * sw安装时调用
 */
self.addEventListener("install", (event) => {
    console.log("sw installed");
    self.skipWaiting();
});

registerRoute(/\.(?:png|jpg|jpeg|svg|gif|css|js|ico)$/i, new CacheFirst());

registerRoute(/\/api\//i, new NetworkOnly());

precacheAndRoute(self.__WB_MANIFEST || []);