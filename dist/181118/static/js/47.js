webpackJsonp([47],{CdGM:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("gyMJ"),s={data:function(){return{config:{PubUrlPub:"push2",PublishRoomInfo:"cbqwhy",stream:"stream1234?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612",StrKey:"",PubWay:"rtmp",strUserID:"2748912479",ADSampleRate:"44100",ADChannels:"2",ADBitperSample:"16",ChatUrl:"",MaxOutResolution:"720*540",VDIntervalSecond:"3",ADBitRate:"31",VD_method:"cbr",VDFPS:"8",VDBitRate:"230",VC_method:"cbr",VCFPS:"10",VCBitRate:"308",VF_method:"vbr",VFFPS:"20",VBRFQuality:"24",abrDqmin:"31",abrCqmin:"31",abrFqmin:"31",Uin:"1069",Domain:"astevencui.com"},visible:!1,dataForm:{id:0,uin:"",user:"",name:"",password:"",app:"",stream:"",apptype:"",puburlpub:"",config:"",addtime:"",uptime:"",status:"",msmstate:"",increment:""},dataRule:{uin:[{required:!0,message:"用户id不能为空",trigger:"blur"}],user:[{required:!0,message:"主播账户不能为空",trigger:"blur"}],name:[{required:!0,message:"主播名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],app:[{required:!0,message:"不能为空",trigger:"blur"}],stream:[{required:!0,message:"不能为空",trigger:"blur"}],apptype:[{required:!0,message:"app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空",trigger:"blur"}],puburlpub:[{required:!0,message:"自定义推流地址不能为空",trigger:"blur"}],config:[{required:!0,message:"配置信息不能为空",trigger:"blur"}],addtime:[{required:!0,message:"添加时间不能为空",trigger:"blur"}],uptime:[{required:!0,message:"最后更新时间不能为空",trigger:"blur"}],status:[{required:!0,message:"状态，1正常，0冻结不能为空",trigger:"blur"}],msmstate:[{required:!0,message:"多卡推流：0未开通，1开通不能为空",trigger:"blur"}]}}},methods:{init:function(a){var t=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&r.a.applist.info(t.dataForm.id).then(function(a){var e=a.data;console.log(e.appList),e&&0===e.code&&(t.dataForm.uin=e.appList.uin,t.dataForm.user=e.appList.user,t.dataForm.name=e.appList.name,t.dataForm.password=e.appList.password,t.dataForm.app=e.appList.app,t.dataForm.stream=e.appList.stream,t.dataForm.apptype=e.appList.apptype,t.dataForm.puburlpub=e.appList.puburlpub,t.dataForm.config=e.appList.config,t.dataForm.addtime=e.appList.addtime,t.dataForm.uptime=e.appList.uptime,t.dataForm.status=e.appList.status,t.dataForm.msmstate=e.appList.msmstate,t.dataForm.increment=e.appList.increment)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(t){if(t){a.config.stream="stream"+a.dataForm.stream+"?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612";var e={id:a.dataForm.id||void 0,uin:a.dataForm.uin,user:a.dataForm.user,name:a.dataForm.name,password:a.dataForm.password,app:a.dataForm.app,stream:a.dataForm.stream,apptype:a.dataForm.apptype,puburlpub:a.dataForm.puburlpub,config:a.dataForm.config,status:a.dataForm.status,msmstate:a.dataForm.msmstate,increment:a.dataForm.increment};(a.dataForm.id?r.a.applist.update(e):r.a.applist.add(e)).then(function(t){var e=t.data;e&&0===e.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(e.msg)})}})}}},o={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(t){a.visible=t}}},[e("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&a._k(t.keyCode,"enter",13,t.key))return null;a.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"用户id",prop:"uin"}},[e("el-input",{attrs:{placeholder:"用户id"},model:{value:a.dataForm.uin,callback:function(t){a.$set(a.dataForm,"uin",t)},expression:"dataForm.uin"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"主播账户",prop:"user"}},[e("el-input",{attrs:{placeholder:"主播账户"},model:{value:a.dataForm.user,callback:function(t){a.$set(a.dataForm,"user",t)},expression:"dataForm.user"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"主播名称",prop:"name"}},[e("el-input",{attrs:{placeholder:"主播名称"},model:{value:a.dataForm.name,callback:function(t){a.$set(a.dataForm,"name",t)},expression:"dataForm.name"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"密码",prop:"password"}},[e("el-input",{attrs:{placeholder:"密码"},model:{value:a.dataForm.password,callback:function(t){a.$set(a.dataForm,"password",t)},expression:"dataForm.password"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"app",prop:"app"}},[e("el-input",{attrs:{placeholder:""},model:{value:a.dataForm.app,callback:function(t){a.$set(a.dataForm,"app",t)},expression:"dataForm.app"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"stream",prop:"stream"}},[e("el-input",{attrs:{placeholder:""},model:{value:a.dataForm.stream,callback:function(t){a.$set(a.dataForm,"stream",t)},expression:"dataForm.stream"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"app类型",prop:"apptype"}},[e("el-input",{attrs:{placeholder:"0无，1lss，2lcps, 3 微视评， 4 LPS"},model:{value:a.dataForm.apptype,callback:function(t){a.$set(a.dataForm,"apptype",t)},expression:"dataForm.apptype"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"自定义推流地址",prop:"puburlpub"}},[e("el-input",{attrs:{placeholder:"自定义推流地址"},model:{value:a.dataForm.puburlpub,callback:function(t){a.$set(a.dataForm,"puburlpub",t)},expression:"dataForm.puburlpub"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"配置信息",prop:"config"}},[e("el-input",{attrs:{placeholder:"配置信息"},model:{value:a.dataForm.config,callback:function(t){a.$set(a.dataForm,"config",t)},expression:"dataForm.config"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"添加时间",prop:"addtime"}},[e("el-input",{attrs:{placeholder:"添加时间"},model:{value:a.dataForm.addtime,callback:function(t){a.$set(a.dataForm,"addtime",t)},expression:"dataForm.addtime"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"最后更新时间",prop:"uptime"}},[e("el-input",{attrs:{placeholder:"最后更新时间"},model:{value:a.dataForm.uptime,callback:function(t){a.$set(a.dataForm,"uptime",t)},expression:"dataForm.uptime"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"状态",prop:"status"}},[e("el-input",{attrs:{placeholder:"1正常，0冻结"},model:{value:a.dataForm.status,callback:function(t){a.$set(a.dataForm,"status",t)},expression:"dataForm.status"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"多卡推流",prop:"msmstate"}},[e("el-input",{attrs:{placeholder:"0未开通，1开通"},model:{value:a.dataForm.msmstate,callback:function(t){a.$set(a.dataForm,"msmstate",t)},expression:"dataForm.msmstate"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"增幅",prop:"increment"}},[e("el-input",{attrs:{placeholder:"增幅"},model:{value:a.dataForm.increment,callback:function(t){a.$set(a.dataForm,"increment",t)},expression:"dataForm.increment"}})],1)],1),a._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){a.visible=!1}}},[a._v("取消")]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},i=e("VU/8")(s,o,!1,null,null,null);t.default=i.exports}});