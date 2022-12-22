WL.registerComponent('spawn-names', {
    param: {type: WL.Type.Float, default: 1.0},
}, {
    init: function() {
        console.log('init() with param', this.param);
    },
    start: function() {
        console.log('start() with param', this.param);
        for (var i = 0; i < 100; i++) {
            var textEl = "Alice Kisaragi"
            console.log(textEl)
        }
    },
    update: function(dt) {
        // console.log('update() with delta time', dt);
    },
});
