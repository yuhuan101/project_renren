webpackJsonp([39],{"8JIf":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("gyMJ"),i={data:function(){return{visible:!1,dataForm:{id:0,uin:"",domain:"",playerip:"",platform:"",numbers:"",createDate:""},dataRule:{uin:[{required:!0,message:"直播间id不能为空",trigger:"blur"}],domain:[{required:!0,message:"域名不能为空",trigger:"blur"}],playerip:[{required:!0,message:"播放ip不能为空",trigger:"blur"}],platform:[{required:!0,message:"平台类型不能为空",trigger:"blur"}],numbers:[{required:!0,message:"在线人数不能为空",trigger:"blur"}],createDate:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&r.a.dmslivenumbersdetail.info(a.dataForm.id).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.uin=t.dmslivenumbersdetail.uin,a.dataForm.domain=t.dmslivenumbersdetail.domain,a.dataForm.playerip=t.dmslivenumbersdetail.playerip,a.dataForm.platform=t.dmslivenumbersdetail.platform,a.dataForm.numbers=t.dmslivenumbersdetail.numbers,a.dataForm.createDate=t.dmslivenumbersdetail.createDate)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={id:e.dataForm.id||void 0,uin:e.dataForm.uin,domain:e.dataForm.domain,playerip:e.dataForm.playerip,platform:e.dataForm.platform,numbers:e.dataForm.numbers,createDate:e.dataForm.createDate};(e.dataForm.id?r.a.dmslivenumbersdetail.update(t):r.a.dmslivenumbersdetail.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"直播间id",prop:"uin"}},[t("el-input",{attrs:{placeholder:"直播间id"},model:{value:e.dataForm.uin,callback:function(a){e.$set(e.dataForm,"uin",a)},expression:"dataForm.uin"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"域名",prop:"domain"}},[t("el-input",{attrs:{placeholder:"域名"},model:{value:e.dataForm.domain,callback:function(a){e.$set(e.dataForm,"domain",a)},expression:"dataForm.domain"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"播放ip",prop:"playerip"}},[t("el-input",{attrs:{placeholder:"播放ip"},model:{value:e.dataForm.playerip,callback:function(a){e.$set(e.dataForm,"playerip",a)},expression:"dataForm.playerip"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"平台类型",prop:"platform"}},[t("el-input",{attrs:{placeholder:"平台类型"},model:{value:e.dataForm.platform,callback:function(a){e.$set(e.dataForm,"platform",a)},expression:"dataForm.platform"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"在线人数",prop:"numbers"}},[t("el-input",{attrs:{placeholder:"在线人数"},model:{value:e.dataForm.numbers,callback:function(a){e.$set(e.dataForm,"numbers",a)},expression:"dataForm.numbers"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建时间",prop:"createDate"}},[t("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createDate,callback:function(a){e.$set(e.dataForm,"createDate",a)},expression:"dataForm.createDate"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=t("VU/8")(i,l,!1,null,null,null);a.default=o.exports}});