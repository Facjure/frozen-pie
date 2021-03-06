/*
    copyright:
        (c) 2014 by Priyatam Mudivarti
    license:
        Apache License v2.0; see LICENSE for more details.
*/

$( function () {

    var relative_path = window.location.pathname;

    var pie = $.sammy(function() {
        this.element_selector = '#pie';

        this.get(relative_path, function (context) {
            for (var i =0; i < data.length; i++) {
                if (data[i]['name'] === config.first_page) {
                    break;
                }
            }
            context.app.swap(data[i]['html'])
        });

        this.get(relative_path + '#' + '/(.*)', function (context) {
            var dhash = document.location.hash;
            post_name = dhash.substring(2);
            for (var i =0; i < data.length; i++) {
                if (data[i]['name'] === post_name) {
                    break;
                }
            }
            context.app.swap(data[i]['html'])
        });

    });

    // Enable root controller
    pie.run()
});
