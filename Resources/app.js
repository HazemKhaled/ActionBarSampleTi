var win1 = Ti.UI.createWindow({
    fullscreen : true,
    title : 'Action Bar',
    exitOnClose : true
});

var table = Ti.UI.createTableView({
    data : [{
        title : 'action buttons'
    }, {
        title : 'tabs'
    }]
});

table.addEventListener('click', function(e) {
    var Window = require('actionbar' + e.index);
    new Window().open();
});

win1.add(table);

win1.open();
