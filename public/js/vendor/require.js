let require = (function () {
    let map = {},
        cache = {};

    var func = function (name) {
        if (map[name]) {
            return map[name];
        }

        console.warn(`The module with the name "${name}" does not exist.`);
    };

    var proxy = function (func, name) {
        if (typeof func === "function") {
            return function () {
                if (!cache[name]) {
                    cache[name] = func.apply(this, arguments);
                }

                return cache[name];
            };
        } else {
            return func;
        }
    };

    func.register = function (name, module, shouldCache) {
        if (!map[name]) {
            map[name] = shouldCache ? proxy(module, name) : module;
            return true;
        }

        console.warn(`The module with the name "${name}" already exists.`);
    };

    return func;
})();
