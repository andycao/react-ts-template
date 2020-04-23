//register service worker
export function register() {
    if ("serviceWorker" in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener("load", () => {
            const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

            // register service worker
            navigator.serviceWorker.register(swUrl).catch((error) => {
                console.error("Error during service worker registration:", error);
            });
        });
    }
}
export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
