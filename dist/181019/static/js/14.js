webpackJsonp([14,40,41],{DmBF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),r=a("JcLb"),o=a("Kjhc"),i={data:function(){return{dataForm:{key:""},configForm:{PubUrlPub:"1069.lsspublish",PublishRoomInfo:"cbqwhy",stream:"test",StrKey:"",PubWay:"rtmp",strUserID:"2748912479",ADSampleRate:"44100",ADChannels:"2",ADBitperSample:"16",ChatUrl:"",MaxOutResolution:"720*540",VDIntervalSecond:"3",ADBitRate:"31",VD_method:"cbr",VDFPS:"8",VDBitRate:"230",VC_method:"cbr",VCFPS:"10",VCBitRate:"308",VF_method:"vbr",VFFPS:"20",VBRFQuality:"24",abrDqmin:"31",abrCqmin:"31",abrFqmin:"31",Uin:"1069",Domain:"aodianyun.com"},agentId:"",dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,dialogVisible:!1,uploadVisible:!1,uin:""}},components:{AddOrUpdate:r.default,Upload:o.default},activated:function(){this.agentId=this.$route.query.agentId,console.log(this.agentId),this.getDataList()},computed:{playercode:function(){return'<script type="text/javascript" src="http://cdn.financeplayer.astevencui.com/renren-fast/app/yjplayer?r='+this.uin+'"><\/script>'},mycode:function(){return'<div id="play" style="width: 100%;height: 480px;"></div>'},jqcode:function(){return'<script src="https://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"><\/script>'},code:function(){return this.mycode+"\n"+this.jqcode+"\n"+this.playercode},player:function(){return this.$refs.videoPlayer.player}},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={subAgentId:this.agentId,page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key};n.a.roomlist.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},showCode:function(e){this.uin=e,this.dialogVisible=!0},showPlayer:function(e){window.open("/videoplayer.html?r="+e,"_blank")},showUpload:function(e){var t=this;this.uploadVisible=!0,this.$nextTick(function(){t.$refs.upload.init(e)})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e,t.agentId)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.roomId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.roomlist.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:roomlist:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:roomlist:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roomId","header-align":"center",align:"center",label:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"房间名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"password","header-align":"center",align:"center",label:"密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"concurrentSum","header-align":"center",align:"center",label:"并发总数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mcsId","header-align":"center",align:"center",label:"对应的mcs"}}),e._v(" "),a("el-table-column",{attrs:{prop:"playerType","header-align":"center",align:"center",width:"100",label:"播放器类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.playerType?a("label",[e._v("txPlayer")]):a("label",[e._v("ADPlayer")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createUserId","header-align":"center",align:"center",label:"创建者ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"coverpic",label:"封面图",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.coverpic,alt:""}}),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.showUpload(t.row.roomId)}}},[e._v("上传封面图")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.showCode(t.row.roomId)}}},[e._v("复制代码")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.showPlayer(t.row.roomId)}}},[e._v("预览")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.roomId)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.roomId)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:"复制下面代码到你的项目中",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-container",[a("el-main",{staticStyle:{"background-color":"#909399"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticStyle:{width:"100%","font-family":"Fixedsys"},attrs:{rows:"8"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}},[e._v("          mycode\n        ")])])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),e.uploadVisible?a("upload",{ref:"upload",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},s=a("VU/8")(i,l,!1,null,null,null);t.default=s.exports},d6eN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),r=a("hOT5"),o=a("DmBF"),i={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:r.default,room:o.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key};n.a.companymanager.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.agentId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.companymanager.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})},agentRoomHandle:function(e){this.$router.push({path:"/n/agentroom",query:{agentId:e}})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:companymanager:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:companymanager:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("room")]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"agentId","header-align":"center",align:"center",label:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"parentId","header-align":"center",align:"center",label:"上级代理"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userId","header-align":"center",align:"center",label:"管理id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"company","header-align":"center",align:"center",width:"150",label:"子公司名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",width:"150",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"password","header-align":"center",align:"center",label:"密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"concurrentSum","header-align":"center",align:"center",label:"并发总数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"concurrentRem","header-align":"center",align:"center",label:"剩余并发"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createUserId","header-align":"center",align:"center",label:"创建者ID"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.agentId)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.agentId)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.agentRoomHandle(t.row.agentId)}}},[e._v("直播间")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},s=a("VU/8")(i,l,!1,null,null,null);t.default=s.exports},hOT5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),r={data:function(){return{visible:!1,dataForm:{agentId:0,parentId:"",userId:"",company:"",name:"",password:"",concurrentSum:"",concurrentRem:"",createUserId:"",createTime:"",orderNum:"",agentFlag:""},dataRule:{company:[{required:!0,message:"子公司名称不能为空",trigger:"blur"}],name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],concurrentSum:[{required:!0,message:"并发总数不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.agentId=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.agentId&&n.a.companymanager.info(t.dataForm.agentId).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.parentId=a.companymanager.parentId,t.dataForm.userId=a.companymanager.userId,t.dataForm.company=a.companymanager.company,t.dataForm.name=a.companymanager.name,t.dataForm.password=a.companymanager.password,t.dataForm.concurrentSum=a.companymanager.concurrentSum,t.dataForm.concurrentRem=a.companymanager.concurrentRem,t.dataForm.createUserId=a.companymanager.createUserId,t.dataForm.createTime=a.companymanager.createTime,t.dataForm.orderNum=a.companymanager.orderNum,t.dataForm.agentFlag=a.companymanager.agentFlag)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={agentId:e.dataForm.agentId||void 0,parentId:e.dataForm.parentId,userId:e.dataForm.userId,company:e.dataForm.company,name:e.dataForm.name,password:e.dataForm.password,concurrentSum:e.dataForm.concurrentSum,concurrentRem:e.dataForm.concurrentRem,createUserId:e.dataForm.createUserId,createTime:e.dataForm.createTime,orderNum:e.dataForm.orderNum,agentFlag:1};(e.dataForm.agentId?n.a.companymanager.update(a):n.a.companymanager.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"子公司名称",prop:"company"}},[a("el-input",{attrs:{placeholder:"子公司名称"},model:{value:e.dataForm.company,callback:function(t){e.$set(e.dataForm,"company",t)},expression:"dataForm.company"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataForm.password,callback:function(t){e.$set(e.dataForm,"password",t)},expression:"dataForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"并发总数",prop:"concurrentSum"}},[a("el-input",{attrs:{placeholder:"并发总数"},model:{value:e.dataForm.concurrentSum,callback:function(t){e.$set(e.dataForm,"concurrentSum",t)},expression:"dataForm.concurrentSum"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,o,!1,null,null,null);t.default=i.exports}});