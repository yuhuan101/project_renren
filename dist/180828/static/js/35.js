webpackJsonp([35],{"i/XN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("gyMJ"),i={data:function(){return{visible:!1,dataForm:{id:0,uin:"",numbers:"",createDate:""},dataRule:{uin:[{required:!0,message:"直播间id不能为空",trigger:"blur"}],numbers:[{required:!0,message:"在线人数不能为空",trigger:"blur"}],createDate:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&r.a.dmslivenumbers.info(t.dataForm.id).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.uin=a.dmslivenumbers.uin,t.dataForm.numbers=a.dmslivenumbers.numbers,t.dataForm.createDate=a.dmslivenumbers.createDate)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={id:e.dataForm.id||void 0,uin:e.dataForm.uin,numbers:e.dataForm.numbers,createDate:e.dataForm.createDate};(e.dataForm.id?r.a.dmslivenumbers.update(a):r.a.dmslivenumbers.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"直播间id",prop:"uin"}},[a("el-input",{attrs:{placeholder:"直播间id"},model:{value:e.dataForm.uin,callback:function(t){e.$set(e.dataForm,"uin",t)},expression:"dataForm.uin"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"在线人数",prop:"numbers"}},[a("el-input",{attrs:{placeholder:"在线人数"},model:{value:e.dataForm.numbers,callback:function(t){e.$set(e.dataForm,"numbers",t)},expression:"dataForm.numbers"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createDate"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createDate,callback:function(t){e.$set(e.dataForm,"createDate",t)},expression:"dataForm.createDate"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=a("VU/8")(i,n,!1,null,null,null);t.default=o.exports}});