import{r as t,g as s}from"./p-64ebfd21.js";const i=":host{display:block}";const e=class{constructor(s){t(this,s);this.centerText="start";this.wCanvas=undefined;this.hCanvas=undefined;this.wImageBg=0;this.hImageBg=0;this.canvasFillStyle="black";this.fontCanvas="bold 12p Arial";this.content=undefined;this.imgLoading=true}componentWillLoad(){if(this.content[0]["type"]!="image"){console.error("el primer valor del array tiene que ser de type image");return}this.canvas=this.__createCanvas();console.info("el canvas es",this.canvas);this.el.appendChild(this.canvas);const t=new Image;t.addEventListener("load",(()=>{this.imgLoading=false;const s=this.canvas.getContext("2d");s.drawImage(t,0,0,this.content[0]["width"],this.content[0]["height"]);this.__loadData()}));t.src=this.content[0]["any_string"]}__createCanvas(){const t=document.createElement("canvas");t.height=this.hCanvas;t.width=this.wCanvas;return t}__loadData(){const t=this.canvas.getContext("2d");let s=this.content;s.shift();s.forEach((s=>{if(s.type==="text"){const i=s;t.fillStyle=i.canvasOptions.fillStyle||this.canvasFillStyle;t.font=i.canvasOptions.font||this.fontCanvas;t.textAlign=i.canvasOptions.textAlign||this.centerText;t.fillText(s.any_string,s.x,s.y)}if(s.type==="image"){const i=new Image;i.src=s.any_string;i.onload=function(){t.drawImage(i,s.x,s.y,s.width,s.height)}}}))}get el(){return s(this)}};e.style=i;export{e as image_canvas};
//# sourceMappingURL=p-228db790.entry.js.map