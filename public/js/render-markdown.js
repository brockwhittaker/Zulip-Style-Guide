var RenderMarkdown = (showdown) => {
    var nano = require("nano");
    var markdown = new showdown.Converter();

    const BASE_URL = "/docs/";
    const EXT = ".md";

    var map = {};

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
                console.log(html);
                this.container.innerHTML = html || "";
            }

            return this;
        }
    };

    return prototype;
};
