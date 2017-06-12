(function () {
    var store = require("store"),
        router = new Router(),
        showdown = require("showdown"),
        renderMarkdown = RenderMarkdown(showdown),
        shadowDOM = require("shadow-dom");

    var app = new Vue({
        el: "#app",
        data: store,
    });

    // renderMarkdown.cache = true;
    renderMarkdown.container = app.$refs.markdownContent;
    renderMarkdown.shadow.init(shadowDOM)
        .addStyleSheet("/external/css/common.css")
        .addStyleSheet("/external/css/app.css");
    console.log(renderMarkdown.container);

    router.add("styles/:category", (e) => {
        let { category } = e.params;

        renderMarkdown.fetch("/styles/" + category, (res) => {
            renderMarkdown.html(res);
        });
    });

    router.add("components/:component", (e) => {
        let { component } = e.params;

        renderMarkdown.fetch("/components/" + component, (res) => {
            renderMarkdown.html(res);
        });
    });

    router.init();
}());
