//CSS.js v0.1.0

function cssjs(csscode) {
    
   var css = csscode;
   var head = document.head || document.getElementsByTagName('head')[0]
   var style = document.createElement('style');

   style.type = 'text/css';
   if (style.styleSheet){
      style.styleSheet.cssText = css;
   } else {
      style.appendChild(document.createTextNode(css));
   }

     head.appendChild(style);
    
}
