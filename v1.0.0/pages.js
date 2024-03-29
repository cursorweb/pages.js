/*PAGES.JS
V1.0.0
Created by cursors on khan academy: khanacademy.org/cs/i/6160196552196096, khanacademy.org/profile/runqing
*/
var Page = function (t, e, i, n, s) {
    this.cont = document.getElementById(t) || document.getElementById("app");
    this.id = document.getElementById(e) || document.getElementById("page");
    this.newpage = i || "!@!";
    this.currpage = n || 0;
    this.array = this.id.text.split(i);
    this.options = s || {
        div: !1,
        divClass: ""
    }
};
Page.prototype.init = function () {
    if (this.options.div) {
        this.cont.innerHTML = "";
        for (var t = 0; t < this.array.length; t++) {
            var e = document.createElement("DIV");
            e.className = this.options.divClass, e.style.display = "none", e.innerHTML = this.array[t], this.cont.appendChild(e);
        }
        document.querySelectorAll("." + this.options.divClass)[this.currpage].style.display = "block";
    } else {
        var i = this.array[this.currpage];
        this.cont.innerHTML = i;
    }
};
Page.prototype.change = function (t) {
    this.currpage = t;
    this.init();
};
