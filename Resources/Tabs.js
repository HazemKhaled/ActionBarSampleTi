function myWin() {
    //create module instance
    var self = Ti.UI.createTabGroup({
        fullscreen : true,
        title : 'Action Bar Events'
    });

    //create app tabs

    var win1 = Ti.UI.createWindow({
        title : 'win1'
    });

    win1.add(Ti.UI.createLabel({
        text : 'window 1'
    }));

    var tab1 = Ti.UI.createTab({
        title : 'tab1',
        window : win1
    });

    var win2 = Ti.UI.createWindow({
        title : 'win1'
    });

    win2.add(Ti.UI.createLabel({
        text : 'window 2'
    }));

    var tab2 = Ti.UI.createTab({
        title : 'tab2',
        window : win2
    });

    self.addTab(tab1);
    self.addTab(tab2);

    return self;
}

module.exports = myWin;
