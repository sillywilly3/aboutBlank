(function () {
    var url = "https://www.google.com/search?igu=1";
    var urlObj = new window.URL(window.location.href);
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url.toString();
    win.document.body.appendChild(iframe);
    var script = win.document.createElement("script");

    setTimeout(function() {
      window.location.replace("https://www.classroom.google.com");
    }, 1);
})();
