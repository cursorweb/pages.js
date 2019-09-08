# PAGES.JS
The easiest way to create a multi-page app on khan academy!
Currrent version: `1.2.6`
## GET STARTED
There is no way to describe how simple this process is. Just copy the code below and you are ready to create fabulously simple apps!
```html
NAVIGATION:
<button onclick = "app.change(0);">Page 1</button>
<button onclick = "app.change(1);">Page 2</button>
<div id = "app"></div>
<script type = "text" id = "page">
  <h1>Page 1</h1>
  &&&
  <h1>Page 2</h1>
</script>
<script href = "https://cdn.jsdelivr.net/gh/cursorweb/pages.js/v1.2.6/pages.min.js"></script>
<script type = "text" id = "page">
  var app = new Page();
  app.init();
</script>
```
## PAGE()
```javascript
new page();//=>Returns the page application
```
```javascript
new page().change(pagenum);//=>Changes the page according to pagenum, starting from 0
```
```javascript
new page().init();//=>Initiates the page. This is required after defining the app.
```
```javascript
new page().getpage();//=>Returns the current page number, starting from 0.
```
