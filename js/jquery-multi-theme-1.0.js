;(function (jQuery) {
    function init() {
        var lsTheme = localStorage.getItem("crtTheme");
        change(lsTheme ? lsTheme : thm.currentTheme);
    }

    function loadTheme(themePath) {
        $('<link rel="stylesheet" charset="utf-8" href="css/theme/' + themePath + '.css" />').appendTo("head");
    }

    function change(theme) {
        var that = thm;
        that.currentTheme != theme && update(theme),
        that.currentTheme = theme,
        theme != that.defaultTheme ? (that.defaultTheme = theme, loadTheme(theme)) : loadTheme(theme)
    }

    function update(theme) {
        localStorage.setItem("crtTheme", theme);
    }
    jQuery.fn.ThemeJS = function (th) {
        change(th);
    }
    var thm = {};
    thm.defaultTheme = "black";
    thm.currentTheme = "black";
    init();

})(jQuery);