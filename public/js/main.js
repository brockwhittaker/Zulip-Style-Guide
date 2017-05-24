(function () {
    var store = require("store"),
        router = new Router(),
        showdown = require("showdown"),
        renderMarkdown = RenderMarkdown(showdown);

    var app = new Vue({
        el: "#app",
        data: store,
    });

    // renderMarkdown.cache = true;
    renderMarkdown.container = app.$refs.markdownContent;
    console.log(renderMarkdown.container);

    router.add("styles/:category", (e) => {
        let { category } = e.params;
        console.log(e.params);

        renderMarkdown.fetch("/styles/" + category, (res) => {
            renderMarkdown.html(res);
        });
    });

    router.init();
}());
