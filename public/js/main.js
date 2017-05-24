(function () {
    var store = require("store");
    var router = new Router();

    var app = new Vue({
        el: "#app",
        data: store,
    });

    router.add("styles/:category", (e) => {
        console.log(e.params);
    });

    router.init();
}());
