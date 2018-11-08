webpackJsonp([20,36],{uMyE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),o={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("xM/T").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,name:this.dataForm.key};n.a.goods.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.goodsId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.goods.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:goods:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:goods:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsId","header-align":"center",align:"center",label:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"商品名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"intro","header-align":"center",align:"center",label:"介绍"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price","header-align":"center",align:"center",label:"价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"num","header-align":"center",align:"center",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.goodsId)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.goodsId)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},r=a("VU/8")(o,i,!1,null,null,null);t.default=r.exports},"xM/T":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),o={data:function(){return{visible:!1,dataForm:{goodsId:0,name:"",intro:"",price:"",num:""},dataRule:{name:[{required:!0,message:"商品名不能为空",trigger:"blur"}],intro:[{required:!0,message:"介绍不能为空",trigger:"blur"}],price:[{required:!0,message:"价格不能为空",trigger:"blur"}],num:[{required:!0,message:"数量不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.goodsId=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.goodsId&&n.a.goods.info(t.dataForm.goodsId).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.name=a.goods.name,t.dataForm.intro=a.goods.intro,t.dataForm.price=a.goods.price,t.dataForm.num=a.goods.num)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={goodsId:e.dataForm.goodsId||void 0,name:e.dataForm.name,intro:e.dataForm.intro,price:e.dataForm.price,num:e.dataForm.num};(e.dataForm.goodsId?n.a.goods.update(a):n.a.goods.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"商品名",prop:"name"}},[a("el-input",{attrs:{placeholder:"商品名"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"介绍",prop:"intro"}},[a("el-input",{attrs:{placeholder:"介绍"},model:{value:e.dataForm.intro,callback:function(t){e.$set(e.dataForm,"intro",t)},expression:"dataForm.intro"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{attrs:{placeholder:"价格"},model:{value:e.dataForm.price,callback:function(t){e.$set(e.dataForm,"price",t)},expression:"dataForm.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数量",prop:"num"}},[a("el-input",{attrs:{placeholder:"数量"},model:{value:e.dataForm.num,callback:function(t){e.$set(e.dataForm,"num",t)},expression:"dataForm.num"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=a("VU/8")(o,i,!1,null,null,null);t.default=r.exports}});