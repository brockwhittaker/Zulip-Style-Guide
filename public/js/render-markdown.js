var RenderMarkdown = (showdown) => {
    var nano = require("nano");
    var markdown = new showdown.Converter();

    const BASE_URL = "/docs/";
    const EXT = ".md";

    var map = {};

    var funcs = {
        renderShadows: function (container, shadowDOM, styleSheets) {
            if (!container || !shadowDOM) {
                console.warn("All three arguments must be present.");
                return;
            }

            let shadows = container.querySelectorAll(".shadow");

            for (let x = 0; x < shadows.length; x++) {
                let html = shadows[x].innerHTML,
                    shadow = shadowDOM(shadows[x]);

                styleSheets.forEach(o => shadow.addStyleSheet(o));
                shadow.html(html);
            }
        }
    };

    var prototype = {
        // control whether or not markdown files should be cached or whether
        // they should be reloaded again.
        cache: false,

        // set a container to append content to.
        container: null,

        // fetch the markdown at a path inside of the BASE_URL directory.
        fetch: function (path, callback) {
            // replace leading and trailing slashes to normalize map.
            let _path = path.replace(/^\/|\/$/, "");

            // if there's not a copy in the cache or it hasn't been fetched yet,
            // send an AJAX call to fetch the markdown.
            if (!this.cache || !map[_path]) {
                nano.ajax({ url: BASE_URL + _path + EXT }, (status, res) => {
                    if (status === 200) {
                        if (typeof res === "string") {
                            // convert to HTML before saving into the map; we
                            // only want to process once, eh.
                            map[_path] = markdown.toHTML(res);
                        }
                        callback(map[_path]);
                    }
                });
            } else {
                callback( map[_path]);
            }

            return this;
        },

        html: function (html) {
            if (this.container) {
                this.container.innerHTML = html || "";

                funcs.renderShadows(
                    this.container,
                    this.shadow.shadowDOM,
                    this.shadow.styles
                );
            }

            return this;
        },

        shadow: {
            styles: [],

            init: function (shadowDOM) {
                this.shadowDOM = shadowDOM;

                return this;
            },

            addStyleSheet: function (styles) {
                this.styles.push(styles);

                return this;
            }
        }
    };

    return prototype;
};
