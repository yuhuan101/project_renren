webpackJsonp([3],{LfQ1:function(i,t){i.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},OUUs:function(i,t,e){var o=e("C02x").parseInt,a=e("bOpQ").trim,r=e("LfQ1"),n=/^[-+]?0[xX]/;i.exports=8!==o(r+"08")||22!==o(r+"0x16")?function(i,t){var e=a(String(i),3);return o(e,t>>>0||(n.test(e)?16:10))}:o},bOpQ:function(i,t,e){var o=e("FITv"),a=e("r2gs"),r=e("BRDz"),n=e("LfQ1"),s="["+n+"]",l=RegExp("^"+s+s+"*"),m=RegExp(s+s+"*$"),d=function(i,t,e){var a={},s=r(function(){return!!n[i]()||"​"!="​"[i]()}),l=a[i]=s?t(u):n[i];e&&(a[e]=l),o(o.P+o.F*s,"String",a)},u=d.trim=function(i,t){return i=String(a(i)),1&t&&(i=i.replace(l,"")),2&t&&(i=i.replace(m,"")),i};i.exports=d},cWFu:function(i,t,e){var o=e("FITv"),a=e("OUUs");o(o.S+o.F*(Number.parseInt!=a),"Number",{parseInt:a})},fXoO:function(i,t,e){e("cWFu"),i.exports=e("AKd3").Number.parseInt},gUGA:function(i,t,e){i.exports={default:e("fXoO"),__esModule:!0}},tQFG:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("gUGA"),a=e.n(o),r=e("3cXf"),n=e.n(r),s=e("gyMJ"),l={props:["value"],components:{EditEncode:e("tgRP").default},data:function(){return{visible:!1,dataForm:{id:0,uin:"",user:"",name:"",password:"",app:"",stream:"",apptype:"",puburlpub:"",config:"",addtime:"",uptime:"",status:"",msmstate:""},dataRule:{uin:[{required:!0,message:"用户id不能为空",trigger:"blur"}],user:[{required:!0,message:"主播账户不能为空",trigger:"blur"}],name:[{required:!0,message:"主播名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],app:[{required:!0,message:"不能为空",trigger:"blur"}],stream:[{required:!0,message:"不能为空",trigger:"blur"}],apptype:[{required:!0,message:"app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空",trigger:"blur"}],puburlpub:[{required:!0,message:"自定义推流地址不能为空",trigger:"blur"}],config:[{required:!0,message:"配置信息不能为空",trigger:"blur"}],addtime:[{required:!0,message:"添加时间不能为空",trigger:"blur"}],uptime:[{required:!0,message:"最后更新时间不能为空",trigger:"blur"}],status:[{required:!0,message:"状态，1正常，0冻结不能为空",trigger:"blur"}],msmstate:[{required:!0,message:"多卡推流：0未开通，1开通不能为空",trigger:"blur"}]},configForm:{PubUrlPub:"1069.lsspublish",PublishRoomInfo:"cbqwhy",stream:"test",StrKey:"",PubWay:"rtmp",strUserID:"2748912479",ADSampleRate:"44100",ADChannels:"2",ADBitperSample:"16",ChatUrl:"",MaxOutResolution:"720*540",VDIntervalSecond:"3",ADBitRate:"31",VD_method:"cbr",VDFPS:"8",VDBitRate:"230",VC_method:"cbr",VCFPS:"10",VCBitRate:"308",VF_method:"vbr",VFFPS:"20",VBRFQuality:"24",abrDqmin:"31",abrCqmin:"31",abrFqmin:"31",Uin:"1069",Domain:"aodianyun.com"},activeName:"first",options:[{value:"640*480",label:"640*480"},{value:"720*540",label:"720*540"},{value:"960*540",label:"960*540"},{value:"1280*720",label:"1280*720"},{value:"1920*1080",label:"1920*1080"}],valueRes:"1280*720",optionsInternal:[{value:"1",label:"1s"},{value:"2",label:"2s"},{value:"3",label:"3s"},{value:"4",label:"4s"}],valueInternal:"3s",optionsEncode:[{value:"abr",label:"abr平均码率(推荐)"},{value:"vbr",label:"vbr动态码率"}],valueEncode:"abr",dvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"},cvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"},fvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"}}},methods:{init:function(i){var t=this;this.dataForm.id=i||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&s.a.applist.info(t.dataForm.id).then(function(i){var e=i.data;if(console.log(e.appList),e&&0===e.code){t.dataForm.uin=e.appList.uin,t.dataForm.user=e.appList.user,t.dataForm.name=e.appList.name,t.dataForm.password=e.appList.password,t.dataForm.app=e.appList.app,t.dataForm.stream=e.appList.stream,t.dataForm.apptype=e.appList.apptype,t.dataForm.puburlpub=e.appList.puburlpub,t.dataForm.config=e.appList.config,t.dataForm.addtime=e.appList.addtime,t.dataForm.uptime=e.appList.uptime,t.dataForm.status=e.appList.status,t.dataForm.msmstate=e.appList.msmstate;var o=JSON.parse(t.dataForm.config);console.log(o)}})})},dataFormSubmit:function(){var i=this,t={id:this.dataForm.id||void 0,uin:this.dataForm.uin,user:this.dataForm.user,name:this.dataForm.name,password:this.dataForm.password,app:this.dataForm.app,stream:this.dataForm.stream,apptype:this.dataForm.apptype,puburlpub:this.dataForm.puburlpub,config:n()(this.configForm),status:this.dataForm.status,msmstate:this.dataForm.msmstate};console.log(t),(this.dataForm.id?s.a.applist.update(t):s.a.applist.add(t)).then(function(t){var e=t.data;e&&0===e.code?i.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){i.visible=!1,i.$emit("refreshDataList")}}):i.$message.error(e.msg)})},handleClick:function(i,t){console.log(i,t)}},computed:{comencode:{get:function(){var i={};return i.ADBitRate=a()(this.configForm.ADBitRate),i},set:function(i){this.configForm.ADBitRate=""+i.ADBitRate}},dvideo:{get:function(){return this.dvideoConfig.method=this.configForm.VD_method,this.dvideoConfig.fps=this.configForm.VDFPS,this.dvideoConfig.biterate=this.configForm.VDBitRate,this.dvideoConfig.qmin=this.configForm.abrDqmin,this.dvideoConfig.qulity=this.configForm.VBRDQuality,[this.dvideoConfig.method,this.dvideoConfig.fps,this.dvideoConfig.biterate,this.dvideoConfig.qmin,this.dvideoConfig.qulity]},set:function(i){this.dvideoConfig.method=i[0],this.dvideoConfig.fps=i[1],this.dvideoConfig.biterate=i[2],this.dvideoConfig.qmin=i[3],this.dvideoConfig.qulity=i[4],this.configForm.VD_method=this.dvideoConfig.method,this.configForm.VDFPS=this.dvideoConfig.fps,this.configForm.VDBitRate=this.dvideoConfig.biterate,this.configForm.abrDqmin=this.dvideoConfig.qmin,"vbr"===this.dvideoConfig.method&&(this.configForm.VBRDQuality=this.dvideoConfig.qulity)}},cvideo:{get:function(){return this.cvideoConfig.method=this.configForm.VC_method,this.cvideoConfig.fps=this.configForm.VCFPS,this.cvideoConfig.biterate=this.configForm.VCBitRate,this.cvideoConfig.qmin=this.configForm.abrCqmin,this.cvideoConfig.qulity=this.configForm.VBRCQuality,[this.cvideoConfig.method,this.cvideoConfig.fps,this.cvideoConfig.biterate,this.cvideoConfig.qmin,this.cvideoConfig.qulity]},set:function(i){this.cvideoConfig.method=i[0],this.cvideoConfig.fps=i[1],this.cvideoConfig.biterate=i[2],this.cvideoConfig.qmin=i[3],this.cvideoConfig.qulity=i[4],this.configForm.VC_method=this.cvideoConfig.method,this.configForm.VCFPS=this.cvideoConfig.fps,this.configForm.VCBitRate=this.cvideoConfig.biterate,this.configForm.abrCqmin=this.cvideoConfig.qmin,"vbr"===this.cvideoConfig.method&&(this.configForm.VBRCQuality=this.cvideoConfig.qulity)}},fvideo:{get:function(){return this.fvideoConfig.method=this.configForm.VF_method,this.fvideoConfig.fps=this.configForm.VFFPS,this.fvideoConfig.biterate=this.configForm.VFBitRate,this.fvideoConfig.qmin=this.configForm.abrFqmin,this.fvideoConfig.qulity=this.configForm.VBRFQuality,[this.fvideoConfig.method,this.fvideoConfig.fps,this.fvideoConfig.biterate,this.fvideoConfig.qmin,this.fvideoConfig.qulity]},set:function(i){this.fvideoConfig.method=i[0],this.fvideoConfig.fps=i[1],this.fvideoConfig.biterate=i[2],this.fvideoConfig.qmin=i[3],this.fvideoConfig.qulity=i[4],this.configForm.VF_method=this.fvideoConfig.method,this.configForm.VFFPS=this.fvideoConfig.fps,this.configForm.VFBitRate=this.fvideoConfig.biterate,this.configForm.abrFqmin=this.fvideoConfig.qmin,"vbr"===this.fvideoConfig.method&&(this.configForm.VBRFQuality=this.fvideoConfig.qulity)}},rtmpUrl:function(){var i=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,i);return"rtmp://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t},flvUrl:function(){var i=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,i);return"http://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t+".flv"},m3u8Url:function(){var i=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,i);return"http://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t+".m3u8"}},mounted:function(){this.dataForm=this.value;var i=JSON.parse(this.dataForm.config);this.configForm=i,console.log(this.configForm)},watch:{currentValue:function(i,t){var e=JSON.parse(this.value);console.log(e)}}},m={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("el-col",{attrs:{span:18}},[e("el-form",{ref:"dataForm",attrs:{model:i.dataForm,"label-width":"100px"},nativeOn:{keyup:function(t){if(!("button"in t)&&i._k(t.keyCode,"enter",13,t.key))return null;i.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"app",prop:"app"}},[e("el-input",{attrs:{placeholder:"app"},model:{value:i.configForm.PublishRoomInfo,callback:function(t){i.$set(i.configForm,"PublishRoomInfo",t)},expression:"configForm.PublishRoomInfo"}})],1),i._v(" "),e("el-form-item",{attrs:{label:"stream",prop:"stream"}},[e("el-input",{attrs:{placeholder:"stream"},model:{value:i.configForm.stream,callback:function(t){i.$set(i.configForm,"stream",t)},expression:"configForm.stream"}})],1),i._v(" "),e("el-form-item",{attrs:{label:"PubUrlPub",prop:"stream"}},[e("el-input",{attrs:{placeholder:"PubUrlPub"},model:{value:i.configForm.PubUrlPub,callback:function(t){i.$set(i.configForm,"PubUrlPub",t)},expression:"configForm.PubUrlPub"}})],1),i._v(" "),e("el-form-item",{attrs:{label:"Domain",prop:"Domain"}},[e("el-input",{attrs:{placeholder:"Domain"},model:{value:i.configForm.Domain,callback:function(t){i.$set(i.configForm,"Domain",t)},expression:"configForm.Domain"}})],1),i._v(" "),e("el-form-item",{attrs:{label:"播放地址"}},[e("el-input",{attrs:{placeholder:"Domain"},model:{value:i.rtmpUrl,callback:function(t){i.rtmpUrl=t},expression:"rtmpUrl"}}),i._v(" "),e("el-input",{attrs:{placeholder:"Domain"},model:{value:i.flvUrl,callback:function(t){i.flvUrl=t},expression:"flvUrl"}}),i._v(" "),e("el-input",{attrs:{placeholder:"Domain"},model:{value:i.m3u8Url,callback:function(t){i.m3u8Url=t},expression:"m3u8Url"}})],1),i._v(" "),e("el-tabs",{on:{"tab-click":i.handleClick},model:{value:i.activeName,callback:function(t){i.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"直播内容设置",name:"first"}},[e("el-form-item",{attrs:{label:"聊天地址:",prop:"ChatUrl"}},[e("el-input",{attrs:{placeholder:""},model:{value:i.configForm.ChatUrl,callback:function(t){i.$set(i.configForm,"ChatUrl",t)},expression:"configForm.ChatUrl"}})],1),i._v(" "),e("el-form-item",{attrs:{label:"最大分辨率:",prop:"MaxOutResolution"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:i.configForm.MaxOutResolution,callback:function(t){i.$set(i.configForm,"MaxOutResolution",t)},expression:"configForm.MaxOutResolution"}},i._l(i.options,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})})),i._v(" "),e("label",[i._v("直播流最大输出分辨率")])],1),i._v(" "),e("el-form-item",{attrs:{label:"关键帧间隔:",prop:"MaxOutResolution"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:i.configForm.VDIntervalSecond,callback:function(t){i.$set(i.configForm,"VDIntervalSecond",t)},expression:"configForm.VDIntervalSecond"}},i._l(i.optionsInternal,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})})),i._v(" "),e("label",[i._v("数值越大，视频画面连贯性越好，硬件及宽带要求越高")])],1),i._v(" "),e("el-form-item",{attrs:{label:"音频码率:",prop:"ADBitRate"}},[e("el-slider",{model:{value:i.comencode.ADBitRate,callback:function(t){i.$set(i.comencode,"ADBitRate",t)},expression:"comencode.ADBitRate"}})],1)],1),i._v(" "),e("el-tab-pane",{attrs:{label:"桌面直播参数设置",name:"second"}},[e("edit-encode",{model:{value:i.dvideo,callback:function(t){i.dvideo=t},expression:"dvideo"}})],1),i._v(" "),e("el-tab-pane",{attrs:{label:"摄像头直播参数设置",name:"third"}},[e("edit-encode",{model:{value:i.cvideo,callback:function(t){i.cvideo=t},expression:"cvideo"}}),i._v(" "),e("div",[i._v(i._s(i.cvideo))])],1),i._v(" "),e("el-tab-pane",{attrs:{label:"本地视频直播参数设置",name:"fourth"}},[e("edit-encode",{model:{value:i.fvideo,callback:function(t){i.fvideo=t},expression:"fvideo"}})],1)],1)],1),i._v(" "),e("br"),i._v(" "),e("span",{staticClass:"dialog-footer"},[e("el-button",{on:{click:function(t){i.visible=!1}}},[i._v("取消")]),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){i.dataFormSubmit()}}},[i._v("确定")])],1)],1)],1)},staticRenderFns:[]},d=e("46Yf")(l,m,!1,null,null,null);t.default=d.exports}});