//CSS.js v0.1.0

function cssjs(csscode, where=true;) {
    
   var css = csscode;
    if (where != false) {
       var head = document.head || document.getElementsByTagName('head')[0];
    }
    else {
        var body = document.body || document.getElementsByTagName('body')[0];
    }
   var style = document.createElement('style');

   style.type = 'text/css';
   if (style.styleSheet){
      style.styleSheet.cssText = css;
   } else {
      style.appendChild(document.createTextNode(css));
   }

    if (where == true) {
       head.appendChild(style);
    }
    
    if (where == false) {
       body.appendChild(style);
    }
    
}
