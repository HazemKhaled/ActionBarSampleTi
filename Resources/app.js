var win1 = Ti.UI.createWindow({
    fullscreen : true,
    title : 'Action Bar',
    exitOnClose : true
});

var table = Ti.UI.createTableView({
    data : [{
        title : 'Action Buttons',
        module : 'Menu'
    }, {
        title : 'Tabs',
        module : 'Tabs'
    }]
});

table.addEventListener('click', function(e) {
    var Window = require(e.rowData.module);
    new Window().open();
});

win1.add(table);

win1.open();
