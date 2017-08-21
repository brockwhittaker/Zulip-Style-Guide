require.register("store", (() => {
    var store = {};

    store.sidebar = {
        "getting-started": {
            name: "Getting Started",
            items: []
        },
        "guidelines": {
            name: "Guidelines",
            items: [
                "Overview",
                "Identity",
                "Logo",
                "Your Product"
            ]
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
                "Form Controls",
                "Blocks and Cards",
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
