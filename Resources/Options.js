function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        title : 'Action Bar Events'
    });

    /*self.addEventListener('open', function() {
     if (Ti.Platform.osname === "android") {
     var actionBar = self.getActivity().actionBar;
     if (actionBar) {
     actionBar.backgroundImage = 'images/actionbar_background_tile.png';
     actionBar.title = 'Title bar Changed'
     actionBar.displayHomeAsUp = true;
     // add a handler for home icon clicks
     actionBar.onHomeIconItemSelected = function(e) {
     alert("Action Bar Icon Clicked!");
     };
     }
     }
     });*/

    var table = Ti.UI.createTableView({
        data : [{
            title : 'Title',
            key : 'title',
            value : 'Title bar Changed'
        }, {
            title : 'Bachground',
            key : 'backgroundImage',
            value : 'images/actionbar_background_tile.png'
        }, {
            title : 'Add icon event',
            key : 'onHomeIconItemSelected',
            value : function(e) {
                alert("Action Bar Icon Clicked!");
            }
        }, {
            title : 'displayHomeAsUp',
            key : 'displayHomeAsUp',
            value : true
        }, {
            title : 'Icon',
            key : 'icon',
            value : 'images/Nefertiti.png'
        }, {
            title : 'Logo',
            key : 'logo',
            value : 'images/Pyramid.png'
        }, {
            title : 'Hide',
            key : 'hide'
        }, {
            title : 'Show',
            key : 'show'
        }]
    });

    table.addEventListener('click', function(e) {
        if (e.rowData.hasOwnProperty('key') && e.rowData.hasOwnProperty('value')) {
            self.getActivity().actionBar[e.rowData.key] = e.rowData.value;
        } else {
            self.getActivity().actionBar[e.rowData.key]();
        }
    });

    self.add(table);

    return self;
}

module.exports = myWin;
