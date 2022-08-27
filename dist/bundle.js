(()=>{"use strict";var t=function(){function t(t,i,s){this.max=i,this.min=t,this.delta=s,this.value=Math.floor((this.max-this.min)/2)+this.min,this.oscillation=!0}return t.prototype.update=function(){this.value+=this.delta,!0===this.oscillation&&(this.value<=this.min&&this.delta<0||this.value>=this.max&&this.delta>0)&&(this.delta=-this.delta),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max)},t.prototype.setToMax=function(){this.value=this.max},t.prototype.setToMin=function(){this.value=this.min},t.prototype.getValue=function(){return this.value},t.prototype.setDelta=function(t){this.delta=t},t.prototype.setMax=function(t){this.max=t},t.prototype.setMin=function(t){this.min=t},t.prototype.setValue=function(t){this.value=t},t.prototype.setOscillation=function(t){this.oscillation=t},t}(),i=function(){function i(i,s,e,n){this.canvas=i,this.htmlEl=document.createElement("div"),this.htmlEl.classList.add("ball"),this.htmlEl.style.position="absolute",this.htmlEl.style.height="".concat(n,"px"),this.htmlEl.style.width="".concat(n,"px"),i.append(this.htmlEl),this.dir=e,this.pos=s,this.size=new t(n,1.5*n,.1)}return i.prototype.update=function(t){var i=this.dir.clone();i.scale(t/100),this.pos.add(i),this.htmlEl.style.left="".concat(this.pos.x,"px"),this.htmlEl.style.top="".concat(this.pos.y,"px"),this.size.update(),this.htmlEl.style.height="".concat(this.size.getValue(),"px"),this.htmlEl.style.width="".concat(this.size.getValue(),"px"),(this.pos.x<=0||this.pos.x+this.size.getValue()>=this.canvas.clientWidth)&&(this.dir.x=-this.dir.x),(this.pos.y<=0||this.pos.y+this.size.getValue()>=this.canvas.clientHeight)&&(this.dir.y=-this.dir.y)},i}(),s=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.rotate=function(t){var i,s,e,n,h;h=-t*(Math.PI/180),e=Math.cos(h),n=Math.sin(h),i=this.x,s=this.y,this.x=i*e-s*n,this.y=i*n+s*e},t.prototype.add=function(t){this.x+=t.x,this.y+=t.y},t.prototype.sub=function(t){this.x-=t.x,this.y-=t.y},t.prototype.scale=function(t){this.x*=t,this.y*=t},t.prototype.normalize=function(){var t;0!==(t=this.magnitude())&&(this.x=this.x/t,this.y=this.y/t)},t.prototype.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.distanceTo=function(t){var i=this.clone();return i.sub(t),i.magnitude()},t.prototype.clone=function(){return new t(this.x,this.y)},t}(),e=document.getElementById("canvas"),n=[new i(e,new s(10,0),new s(10,10),128),new i(e,new s(100,0),new s(30,10),128),new i(e,new s(0,100),new s(10,20),128),new i(e,new s(0,200),new s(10,-10),128),new i(e,new s(100,100),new s(-20,10),128),new i(e,new s(200,200),new s(10,-20),128)],h=Date.now();setInterval((function(){var t,i;t=Date.now(),i=t-h,h=t,n.map((function(t){return t.update(i)}))}),1)})();