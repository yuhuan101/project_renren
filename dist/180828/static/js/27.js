webpackJsonp([27],{cUrZ:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=a("gyMJ"),o={data:function(){return{visible:!1,showIncrement:!1,dataForm:{roomId:0,name:"",username:"",password:"",concurrentSum:"",increment:"",mcsId:"",playerType:0,createUserId:"",createTime:""},dataRule:{name:[{required:!0,message:"房间名称不能为空",trigger:"blur"}],username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],concurrentSum:[{required:!0,message:"并发总数不能为空",trigger:"blur"}],mcsId:[{required:!0,message:"对应的mcsid不能为空",trigger:"blur"}],createUserId:[{required:!0,message:"创建者ID不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var r=this;this.dataForm.roomId=e||0,this.visible=!0,this.$nextTick(function(){r.$refs.dataForm.resetFields(),r.dataForm.roomId&&t.a.roomlist.info(r.dataForm.roomId).then(function(e){var a=e.data;a&&0===a.code&&(r.dataForm.name=a.roomList.name,r.dataForm.username=a.roomList.username,r.dataForm.password=a.roomList.password,r.dataForm.concurrentSum=a.roomList.concurrentSum,r.dataForm.increment=a.roomlist.increment,r.dataForm.mcsId=a.roomList.mcsId,r.dataForm.playerType=a.roomList.playerType,r.dataForm.createUserId=a.roomList.createUserId,r.dataForm.createTime=a.roomList.createTime)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(r){if(r){var a={roomId:e.dataForm.roomId||void 0,name:e.dataForm.name,username:e.dataForm.username,password:e.dataForm.password,concurrentSum:e.dataForm.concurrentSum,increment:e.dataForm.increment,mcsId:e.dataForm.mcsId,playerType:e.dataForm.playerType,createUserId:e.dataForm.createUserId,createTime:e.dataForm.createTime};(e.dataForm.roomId?t.a.roomlist.update(a):t.a.roomlist.add(a)).then(function(r){var a=r.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},m={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("el-dialog",{attrs:{title:e.dataForm.roomId?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(r){e.visible=r}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"房间名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"房间名称"},model:{value:e.dataForm.name,callback:function(r){e.$set(e.dataForm,"name",r)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"并发总数",prop:"concurrentSum"}},[a("el-input",{attrs:{placeholder:"并发总数"},model:{value:e.dataForm.concurrentSum,callback:function(r){e.$set(e.dataForm,"concurrentSum",r)},expression:"dataForm.concurrentSum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"直播账号",prop:"username"}},[a("el-input",{attrs:{placeholder:"直播账号"},model:{value:e.dataForm.username,callback:function(r){e.$set(e.dataForm,"username",r)},expression:"dataForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主播密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"主播密码"},model:{value:e.dataForm.password,callback:function(r){e.$set(e.dataForm,"password",r)},expression:"dataForm.password"}})],1),e._v(" "),e.showIncrement?a("el-form-item",{attrs:{label:"增幅",prop:"increment"}},[a("el-input",{attrs:{placeholder:"增幅"},model:{value:e.dataForm.increment,callback:function(r){e.$set(e.dataForm,"increment",r)},expression:"dataForm.increment"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"状态",size:"mini",prop:"playerType"}},[a("el-radio-group",{model:{value:e.dataForm.playerType,callback:function(r){e.$set(e.dataForm,"playerType",r)},expression:"dataForm.playerType"}},[a("el-radio",{attrs:{label:0}},[e._v("TXPlayer")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("ADPlayer")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(r){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(r){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")(o,m,!1,null,null,null);r.default=s.exports}});