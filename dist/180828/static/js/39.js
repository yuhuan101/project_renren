webpackJsonp([39],{l9V1:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("gyMJ"),n={data:function(){return{visible:!1,dataForm:{agentId:0,parentId:"",userId:"",name:"",password:"",concurrentSum:"",concurrentRem:"",createUserId:"",createTime:"",orderNum:"",agentFlag:""},dataRule:{name:[{required:!0,message:"代理名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],concurrentSum:[{required:!0,message:"并发总数不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.agentId=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.agentId&&r.a.agentdept.info(a.dataForm.agentId).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.parentId=t.agentDept.parentId,a.dataForm.userId=t.agentDept.userId,a.dataForm.name=t.agentDept.name,a.dataForm.password=t.agentDept.password,a.dataForm.concurrentSum=t.agentDept.concurrentSum,a.dataForm.concurrentRem=t.agentDept.concurrentRem,a.dataForm.createUserId=t.agentDept.createUserId,a.dataForm.createTime=t.agentDept.createTime,a.dataForm.orderNum=t.agentDept.orderNum,a.dataForm.agentFlag=t.agentDept.agentFlag)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={agentId:e.dataForm.agentId||void 0,parentId:e.dataForm.parentId,userId:e.dataForm.userId,name:e.dataForm.name,password:e.dataForm.password,concurrentSum:e.dataForm.concurrentSum,concurrentRem:e.dataForm.concurrentRem,createUserId:e.dataForm.createUserId,createTime:e.dataForm.createTime,orderNum:e.dataForm.orderNum,agentFlag:e.dataForm.agentFlag};(e.dataForm.agentId?r.a.agentdept.update(t):r.a.agentdept.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"代理名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"代理名称"},model:{value:e.dataForm.name,callback:function(a){e.$set(e.dataForm,"name",a)},expression:"dataForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataForm.password,callback:function(a){e.$set(e.dataForm,"password",a)},expression:"dataForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"并发总数",prop:"concurrent Sum"}},[t("el-input",{attrs:{placeholder:"并发总数"},model:{value:e.dataForm.concurrentSum,callback:function(a){e.$set(e.dataForm,"concurrentSum",a)},expression:"dataForm.concurrentSum"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},d=t("VU/8")(n,o,!1,null,null,null);a.default=d.exports}});