require.register("store", (() => {
    var store = {};

    store.sidebar = {
        "getting-started": {
            name: "Getting Started",
            items: []
        },
        "guidelines": {
            name: "Guidelines"
        },
        "styles": {
            name: "Styles",
            items: [
                "Overview",
                "Colors",
                "Typography",
                "Iconography"
            ]
        },
        "components": {
            name: "Components",
            items: [
                "Blocks and Cards",
                "Form Controls",
                "Headers and Footers",
                "Icons",
                "Lists",
                "Tables",
                "Text"
            ]
        }
    };

    return store;
}));
