require.register("shadow-dom", (() => {
    var el = (frag) => {
        let div = document.createDocumentFragment();
        div.innerHTML = frag;

        console.log(div);

        return div.childNodes;
    };

    return (sel) => {
        let container;
        if (typeof sel === "string") {
            container = document.querySelector(sel);
        } else if (sel instanceof Node) {
            container = sel;
        } else {
            console.warn("Error. 'shadowDOM' constructor argument should be a string or node.");
        }

        container = container.createShadowRoot();

        let meta = {
            body: document.createElement("body"),
            head: document.createElement("head")
        };

        container.appendChild(meta.head);
        container.appendChild(meta.body);

        meta.body.style.display = "inline-block";
        meta.body.style.height = "auto";

        return {
            html: function (html) {
                meta.body.innerHTML = html;

                return this;
            },
            addStyleSheet: function (url) {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href= url;

                meta.head.appendChild(link);

                return this;
            }
        };
    };
})());
