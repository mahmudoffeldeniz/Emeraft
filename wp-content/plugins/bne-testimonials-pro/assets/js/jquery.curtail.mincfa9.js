/*!
 * Copyright (c) 2016 Arnolds Kozlovskis
 *
 * jQuery Curtail plugin
 * Version 1.1.2 (November 2016)
 *
 * Licensed under the MIT License
 * https://github.com/arnolds/curtail
 * http://www.jqueryscript.net/text/Minimalist-jQuery-Text-Truncation-Plugin-Curtail.html
 */
!function(a){"use strict";a.fn.curtail=function(b){function d(a,b){b[0].text=c.text[1];var d=e(a),h=f(a),i=!0;g(a,h),b.on("click",function(e){c.toggle?(i?(g(a,d),this.text=c.text[0]):(g(a,h),this.text=c.text[1]),i=!i):(g(a,d),b.hide()),e.preventDefault()})}function e(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c].innerHTML);return b}function f(b){var d=[],e=0,f=0;return b.each(function(){var b=a(this).html(),g=b.length;e+=g,e<=c.limit?d.push(b):(f=c.limit-(e-g),f>0?d.push(b.slice(0,f)+c.ellipsis):d.push(""))}),d}function g(a,b){for(var c=0;c<a.length;c++)a[c].innerHTML=b[c]}var c=a.extend({limit:250,ellipsis:"...",toggle:!1,text:["show less","show more"]},b);a(this).each(function(){var b=a(this),e=b.find("> p"),f=b.find("> a");e.text().length>c.limit?d(e,f):f.hide()})}}(jQuery);