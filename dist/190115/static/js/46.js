webpackJsonp([46],{hOT5:function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("gyMJ"),o={data:function(){return{visible:!1,dataForm:{agentId:0,parentId:"",userId:"",company:"",name:"",password:"",concurrentSum:"",concurrentRem:"",createUserId:"",createTime:"",orderNum:"",agentFlag:""},dataRule:{company:[{required:!0,message:"子公司名称不能为空",trigger:"blur"}],name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],concurrentSum:[{required:!0,message:"并发总数不能为空",trigger:"blur"}]}}},methods:{init:function(a){var e=this;this.dataForm.agentId=a||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.agentId&&t.a.companymanager.info(e.dataForm.agentId).then(function(a){var r=a.data;r&&0===r.code&&(console.log(r),e.dataForm.parentId=r.companyManager.parentId,e.dataForm.userId=r.companyManager.userId,e.dataForm.company=r.companyManager.company,e.dataForm.name=r.companyManager.name,e.dataForm.password=r.companyManager.password,e.dataForm.concurrentSum=r.companyManager.concurrentSum,e.dataForm.concurrentRem=r.companyManager.concurrentRem,e.dataForm.createUserId=r.companyManager.createUserId,e.dataForm.createTime=r.companyManager.createTime,e.dataForm.orderNum=r.companyManager.orderNum,e.dataForm.agentFlag=r.companyManager.agentFlag)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(e){if(e){var r={agentId:a.dataForm.agentId||void 0,parentId:a.dataForm.parentId,userId:a.dataForm.userId,company:a.dataForm.company,name:a.dataForm.name,password:a.dataForm.password,concurrentSum:a.dataForm.concurrentSum,concurrentRem:a.dataForm.concurrentRem,createUserId:a.dataForm.createUserId,createTime:a.dataForm.createTime,orderNum:a.dataForm.orderNum,agentFlag:2};(a.dataForm.agentId?t.a.companymanager.update(r):t.a.companymanager.add(r)).then(function(e){var r=e.data;r&&0===r.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(r.msg)})}})}}},n={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("el-dialog",{attrs:{title:a.dataForm.agentId?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(e){a.visible=e}}},[r("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"100px"},nativeOn:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key))return null;a.dataFormSubmit()}}},[r("el-form-item",{attrs:{label:"子公司名称",prop:"company"}},[r("el-input",{attrs:{placeholder:"子公司名称"},model:{value:a.dataForm.company,callback:function(e){a.$set(a.dataForm,"company",e)},expression:"dataForm.company"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:a.dataForm.name,callback:function(e){a.$set(a.dataForm,"name",e)},expression:"dataForm.name"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{placeholder:"密码"},model:{value:a.dataForm.password,callback:function(e){a.$set(a.dataForm,"password",e)},expression:"dataForm.password"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"并发总数",prop:"concurrentSum"}},[r("el-input",{attrs:{placeholder:"并发总数"},model:{value:a.dataForm.concurrentSum,callback:function(e){a.$set(a.dataForm,"concurrentSum",e)},expression:"dataForm.concurrentSum"}})],1)],1),a._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){a.visible=!1}}},[a._v("取消")]),a._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},m=r("VU/8")(o,n,!1,null,null,null);e.default=m.exports}});