/*PAGES.JS
V1.0.0
Created by cursors on khan academy: khanacademy.org/cs/i/6160196552196096, khanacademy.org/profile/runqing
*/
var Page = function(app, pageid, newpage, currpage, options){
    this.cont = document.getElementById(app) || document.getElementById("app");
    this.id = document.getElementById(pageid) || document.getElementById("page");
    this.newpage = newpage || "&&&";
    this.currpage = currpage || 0;
    this.rawcode = this.id.text || this.id;
    console.log(this.rawcode);
    this.array = this.rawcode.split(newpage);
    this.options = options || {
        div: false,
        divClass: ""
    };
    return this;
};
Page.prototype.init = function(){
    if(!this.options.div){
        var output = this.array[this.currpage];
        this.cont.innerHTML = output;
    }else{
        this.cont.innerHTML = "";
        for(var i = 0; i < this.array.length; i ++){
            var page = document.createElement("DIV");
            page.className = this.options.divClass;
            page.style.display = "none";
            page.innerHTML = this.array[i];
            this.cont.appendChild(page);
        }
        document.querySelectorAll("."+this.options.divClass)[this.currpage].style.display = "block";
    }
    return this;
};
Page.prototype.change = function(num){
    this.currpage = num;
    this.init();
    return this;
};
Page.prototype.getpage = function(){
    return this.currpage;
};
