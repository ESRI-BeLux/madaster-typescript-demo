"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[9232],{99232:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var i=a(82392),s=a(80861),r=a(37623),h=a(81482),n=(a(6273),a(67498),a(26325)),d=a(3596),p=a(7511),o=a(7444),c=a(24775),u=a(30386);let y=class extends((0,u.A)((0,p.e)(c.A))){update(t){this._strategy.update(t).catch((t=>{(0,r.zf)(t)||s.A.getLogger(this).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.l,this.container.addChild(this._bitmapContainer),this._strategy=new o.A({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,a){return this.layer.fetchImageBitmap(t,e,a)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,i._)([(0,h.MZ)()],y.prototype,"_strategy",void 0),(0,i._)([(0,h.MZ)()],y.prototype,"updating",void 0),y=(0,i._)([(0,n.$)("esri.views.2d.layers.BaseDynamicLayerView2D")],y);const g=y}}]);