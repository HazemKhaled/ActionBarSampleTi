function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        title : 'Action Bar Buttons'
    });

    self.activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu;
        var aboutMenuItem = menu.add({
            title : "About",
            icon : "images/action_about.png",
            showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
        aboutMenuItem.addEventListener("click", function(e) {
            alert("About Item Clicked!");
        });
        var settingsMenuItem = menu.add({
            title : "Settings",
            icon : "images/action_settings.png",
            showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
        settingsMenuItem.addEventListener("click", function(e) {
            alert("Settings Item Clicked!");
        });
    };

    return self;
}

module.exports = myWin;
