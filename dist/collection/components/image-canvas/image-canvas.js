export class ImageCanvas {
  constructor() {
    this.centerText = 'start';
    this.wCanvas = undefined;
    this.hCanvas = undefined;
    this.wImageBg = 0;
    this.hImageBg = 0;
    this.canvasFillStyle = 'black';
    this.fontCanvas = 'bold 12p Arial';
    this.content = undefined;
    this.imgLoading = true;
  }
  componentWillLoad() {
    if (this.content[0]['type'] != 'image') {
      console.error('el primer valor del array tiene que ser de type image');
      return;
    }
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas);
    this.el.appendChild(this.canvas);
    const img = new Image();
    img.addEventListener('load', () => {
      this.imgLoading = false;
      const ctx = this.canvas.getContext('2d');
      /*var anchoImgBg =
      var altoImgBg  = */
      ctx.drawImage(img, 0, 0, this.content[0]['width'], this.content[0]['height']);
      this.__loadData();
    });
    img.src = this.content[0]['any_string'];
  }
  __createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.height = this.hCanvas;
    canvas.width = this.wCanvas;
    return canvas;
  }
  __loadData() {
    const ctx = this.canvas.getContext('2d');
    let data = this.content;
    data.shift();
    data.forEach(item => {
      if (item.type === 'text') {
        const iText = item;
        ctx.fillStyle = iText.canvasOptions.fillStyle || this.canvasFillStyle;
        ctx.font = iText.canvasOptions.font || this.fontCanvas;
        ctx.textAlign = iText.canvasOptions.textAlign || this.centerText;
        ctx.fillText(item.any_string, item.x, item.y);
      }
      if (item.type === 'image') {
        const imgData = new Image();
        imgData.src = item.any_string;
        imgData.onload = function () {
          ctx.drawImage(imgData, item.x, item.y, item.width, item.height);
        };
      }
    });
  }
  static get is() { return "image-canvas"; }
  static get originalStyleUrls() {
    return {
      "$": ["image-canvas.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["image-canvas.css"]
    };
  }
  static get properties() {
    return {
      "wCanvas": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "With"
        },
        "attribute": "w-canvas",
        "reflect": false
      },
      "hCanvas": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Height"
        },
        "attribute": "h-canvas",
        "reflect": false
      },
      "wImageBg": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "With"
        },
        "attribute": "w-image-bg",
        "reflect": false,
        "defaultValue": "0"
      },
      "hImageBg": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Height"
        },
        "attribute": "h-image-bg",
        "reflect": false,
        "defaultValue": "0"
      },
      "canvasFillStyle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Canvas fillStroke"
        },
        "attribute": "canvas-fill-style",
        "reflect": false,
        "defaultValue": "'black'"
      },
      "fontCanvas": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "canvas.font  string style"
        },
        "attribute": "font-canvas",
        "reflect": false,
        "defaultValue": "'bold 12p Arial'"
      },
      "content": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "ContentDataText[]|ContentDataImg[]",
          "resolved": "ContentDataImg[] | ContentDataText[]",
          "references": {
            "ContentDataText": {
              "location": "import",
              "path": "../type",
              "id": "src/components/type.d.ts::ContentDataText"
            },
            "ContentDataImg": {
              "location": "import",
              "path": "../type",
              "id": "src/components/type.d.ts::ContentDataImg"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "canvas.content"
        }
      }
    };
  }
  static get states() {
    return {
      "imgLoading": {}
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=image-canvas.js.map
