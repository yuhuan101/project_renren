webpackJsonp([2,3,47],{"8sHD":function(e,t,a){var i=a("kM2E"),o=a("KpO7");i(i.S+i.F*(Number.parseInt!=o),"Number",{parseInt:o})},CdGM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gyMJ"),o={data:function(){return{config:{PubUrlPub:"push2",PublishRoomInfo:"cbqwhy",stream:"stream1234?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612",StrKey:"",PubWay:"rtmp",strUserID:"2748912479",ADSampleRate:"44100",ADChannels:"2",ADBitperSample:"16",ChatUrl:"",MaxOutResolution:"720*540",VDIntervalSecond:"3",ADBitRate:"31",VD_method:"cbr",VDFPS:"8",VDBitRate:"230",VC_method:"cbr",VCFPS:"10",VCBitRate:"308",VF_method:"vbr",VFFPS:"20",VBRFQuality:"24",abrDqmin:"31",abrCqmin:"31",abrFqmin:"31",Uin:"1069",Domain:"astevencui.com"},visible:!1,dataForm:{id:0,uin:"",user:"",name:"",password:"",app:"",stream:"",apptype:"",puburlpub:"",config:"",addtime:"",uptime:"",status:"",msmstate:"",increment:""},dataRule:{uin:[{required:!0,message:"用户id不能为空",trigger:"blur"}],user:[{required:!0,message:"主播账户不能为空",trigger:"blur"}],name:[{required:!0,message:"主播名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],app:[{required:!0,message:"不能为空",trigger:"blur"}],stream:[{required:!0,message:"不能为空",trigger:"blur"}],apptype:[{required:!0,message:"app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空",trigger:"blur"}],puburlpub:[{required:!0,message:"自定义推流地址不能为空",trigger:"blur"}],config:[{required:!0,message:"配置信息不能为空",trigger:"blur"}],addtime:[{required:!0,message:"添加时间不能为空",trigger:"blur"}],uptime:[{required:!0,message:"最后更新时间不能为空",trigger:"blur"}],status:[{required:!0,message:"状态，1正常，0冻结不能为空",trigger:"blur"}],msmstate:[{required:!0,message:"多卡推流：0未开通，1开通不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&i.a.applist.info(t.dataForm.id).then(function(e){var a=e.data;console.log(a.appList),a&&0===a.code&&(t.dataForm.uin=a.appList.uin,t.dataForm.user=a.appList.user,t.dataForm.name=a.appList.name,t.dataForm.password=a.appList.password,t.dataForm.app=a.appList.app,t.dataForm.stream=a.appList.stream,t.dataForm.apptype=a.appList.apptype,t.dataForm.puburlpub=a.appList.puburlpub,t.dataForm.config=a.appList.config,t.dataForm.addtime=a.appList.addtime,t.dataForm.uptime=a.appList.uptime,t.dataForm.status=a.appList.status,t.dataForm.msmstate=a.appList.msmstate,t.dataForm.increment=a.appList.increment)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){e.config.stream="stream"+e.dataForm.stream+"?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612";var a={id:e.dataForm.id||void 0,uin:e.dataForm.uin,user:e.dataForm.user,name:e.dataForm.name,password:e.dataForm.password,app:e.dataForm.app,stream:e.dataForm.stream,apptype:e.dataForm.apptype,puburlpub:e.dataForm.puburlpub,config:e.dataForm.config,status:e.dataForm.status,msmstate:e.dataForm.msmstate,increment:e.dataForm.increment};(e.dataForm.id?i.a.applist.update(a):i.a.applist.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"用户id",prop:"uin"}},[a("el-input",{attrs:{placeholder:"用户id"},model:{value:e.dataForm.uin,callback:function(t){e.$set(e.dataForm,"uin",t)},expression:"dataForm.uin"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主播账户",prop:"user"}},[a("el-input",{attrs:{placeholder:"主播账户"},model:{value:e.dataForm.user,callback:function(t){e.$set(e.dataForm,"user",t)},expression:"dataForm.user"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主播名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"主播名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataForm.password,callback:function(t){e.$set(e.dataForm,"password",t)},expression:"dataForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"app",prop:"app"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.app,callback:function(t){e.$set(e.dataForm,"app",t)},expression:"dataForm.app"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"stream",prop:"stream"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.stream,callback:function(t){e.$set(e.dataForm,"stream",t)},expression:"dataForm.stream"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"app类型",prop:"apptype"}},[a("el-input",{attrs:{placeholder:"0无，1lss，2lcps, 3 微视评， 4 LPS"},model:{value:e.dataForm.apptype,callback:function(t){e.$set(e.dataForm,"apptype",t)},expression:"dataForm.apptype"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"自定义推流地址",prop:"puburlpub"}},[a("el-input",{attrs:{placeholder:"自定义推流地址"},model:{value:e.dataForm.puburlpub,callback:function(t){e.$set(e.dataForm,"puburlpub",t)},expression:"dataForm.puburlpub"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"配置信息",prop:"config"}},[a("el-input",{attrs:{placeholder:"配置信息"},model:{value:e.dataForm.config,callback:function(t){e.$set(e.dataForm,"config",t)},expression:"dataForm.config"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"添加时间",prop:"addtime"}},[a("el-input",{attrs:{placeholder:"添加时间"},model:{value:e.dataForm.addtime,callback:function(t){e.$set(e.dataForm,"addtime",t)},expression:"dataForm.addtime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"最后更新时间",prop:"uptime"}},[a("el-input",{attrs:{placeholder:"最后更新时间"},model:{value:e.dataForm.uptime,callback:function(t){e.$set(e.dataForm,"uptime",t)},expression:"dataForm.uptime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-input",{attrs:{placeholder:"1正常，0冻结"},model:{value:e.dataForm.status,callback:function(t){e.$set(e.dataForm,"status",t)},expression:"dataForm.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"多卡推流",prop:"msmstate"}},[a("el-input",{attrs:{placeholder:"0未开通，1开通"},model:{value:e.dataForm.msmstate,callback:function(t){e.$set(e.dataForm,"msmstate",t)},expression:"dataForm.msmstate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"增幅",prop:"increment"}},[a("el-input",{attrs:{placeholder:"增幅"},model:{value:e.dataForm.increment,callback:function(t){e.$set(e.dataForm,"increment",t)},expression:"dataForm.increment"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("VU/8")(o,r,!1,null,null,null);t.default=n.exports},FKWd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gyMJ"),o=a("CdGM"),r=a("tQFG"),n={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:o.default,EditConfig:r.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key};i.a.applist.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.applist.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})},onConfigChanged:function(e){console.log(e)},onDetail:function(e){console.log(e);var t=JSON.parse(e);this.$router.push({path:"/n/detail",query:{config:t}})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:applist:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:applist:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("edit-config",{on:{configchange:e.onConfigChanged},model:{value:t.row,callback:function(a){e.$set(t,"row",a)},expression:"props.row"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uin","header-align":"center",align:"center",label:"用户id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user","header-align":"center",align:"center",label:"主播账户"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"主播名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"password","header-align":"center",align:"center",label:"主播密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"app","header-align":"center",align:"center",label:"app"}}),e._v(" "),a("el-table-column",{attrs:{prop:"stream","header-align":"center",align:"center",label:"stream"}}),e._v(" "),a("el-table-column",{attrs:{prop:"apptype","header-align":"center",align:"center",label:"app类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"puburlpub","header-align":"center",align:"center",label:"自定义推流地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:" ","header-align":"center",align:"center",label:"配置信息"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.status?"success":"error"}},[e._v(e._s(t.row.status?"正常":"冻结"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"msmstate","header-align":"center",align:"center",label:"多卡推流"}}),e._v(" "),a("el-table-column",{attrs:{prop:"increment","header-align":"center",align:"center",label:"增幅"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.onDetail(t.row.config)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},l=a("VU/8")(n,s,!1,null,null,null);t.default=l.exports},KpO7:function(e,t,a){var i=a("7KvD").parseInt,o=a("mnVu").trim,r=a("hyta"),n=/^[-+]?0[xX]/;e.exports=8!==i(r+"08")||22!==i(r+"0x16")?function(e,t){var a=o(String(e),3);return i(a,t>>>0||(n.test(a)?16:10))}:i},gBtx:function(e,t,a){e.exports={default:a("qrpI"),__esModule:!0}},hyta:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},mnVu:function(e,t,a){var i=a("kM2E"),o=a("52gC"),r=a("S82l"),n=a("hyta"),s="["+n+"]",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),m=function(e,t,a){var o={},s=r(function(){return!!n[e]()||"​"!="​"[e]()}),l=o[e]=s?t(u):n[e];a&&(o[a]=l),i(i.P+i.F*s,"String",o)},u=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=m},qrpI:function(e,t,a){a("8sHD"),e.exports=a("FeBl").Number.parseInt},tQFG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gBtx"),o=a.n(i),r=a("mvHQ"),n=a.n(r),s=a("gyMJ"),l={props:["value"],components:{EditEncode:a("tgRP").default},data:function(){return{visible:!1,dataForm:{id:0,uin:"",user:"",name:"",password:"",app:"",stream:"",apptype:"",puburlpub:"",config:"",addtime:"",uptime:"",status:"",msmstate:""},dataRule:{uin:[{required:!0,message:"用户id不能为空",trigger:"blur"}],user:[{required:!0,message:"主播账户不能为空",trigger:"blur"}],name:[{required:!0,message:"主播名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],app:[{required:!0,message:"不能为空",trigger:"blur"}],stream:[{required:!0,message:"不能为空",trigger:"blur"}],apptype:[{required:!0,message:"app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空",trigger:"blur"}],puburlpub:[{required:!0,message:"自定义推流地址不能为空",trigger:"blur"}],config:[{required:!0,message:"配置信息不能为空",trigger:"blur"}],addtime:[{required:!0,message:"添加时间不能为空",trigger:"blur"}],uptime:[{required:!0,message:"最后更新时间不能为空",trigger:"blur"}],status:[{required:!0,message:"状态，1正常，0冻结不能为空",trigger:"blur"}],msmstate:[{required:!0,message:"多卡推流：0未开通，1开通不能为空",trigger:"blur"}]},configForm:{PubUrlPub:"1069.lsspublish",PublishRoomInfo:"cbqwhy",stream:"test",StrKey:"",PubWay:"rtmp",strUserID:"2748912479",ADSampleRate:"44100",ADChannels:"2",ADBitperSample:"16",ChatUrl:"",MaxOutResolution:"720*540",VDIntervalSecond:"3",ADBitRate:"31",VD_method:"cbr",VDFPS:"8",VDBitRate:"230",VC_method:"cbr",VCFPS:"10",VCBitRate:"308",VF_method:"vbr",VFFPS:"20",VBRFQuality:"24",abrDqmin:"31",abrCqmin:"31",abrFqmin:"31",Uin:"1069",Domain:"aodianyun.com"},activeName:"first",options:[{value:"640*480",label:"640*480"},{value:"720*540",label:"720*540"},{value:"960*540",label:"960*540"},{value:"1280*720",label:"1280*720"},{value:"1920*1080",label:"1920*1080"}],valueRes:"1280*720",optionsInternal:[{value:"1",label:"1s"},{value:"2",label:"2s"},{value:"3",label:"3s"},{value:"4",label:"4s"}],valueInternal:"3s",optionsEncode:[{value:"abr",label:"abr平均码率(推荐)"},{value:"vbr",label:"vbr动态码率"}],valueEncode:"abr",dvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"},cvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"},fvideoConfig:{method:"cbr",fps:"10",biterate:"200",qmin:"31",qulity:"30"}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&s.a.applist.info(t.dataForm.id).then(function(e){var a=e.data;if(console.log(a.appList),a&&0===a.code){t.dataForm.uin=a.appList.uin,t.dataForm.user=a.appList.user,t.dataForm.name=a.appList.name,t.dataForm.password=a.appList.password,t.dataForm.app=a.appList.app,t.dataForm.stream=a.appList.stream,t.dataForm.apptype=a.appList.apptype,t.dataForm.puburlpub=a.appList.puburlpub,t.dataForm.config=a.appList.config,t.dataForm.addtime=a.appList.addtime,t.dataForm.uptime=a.appList.uptime,t.dataForm.status=a.appList.status,t.dataForm.msmstate=a.appList.msmstate;var i=JSON.parse(t.dataForm.config);console.log(i)}})})},dataFormSubmit:function(){var e=this,t={id:this.dataForm.id||void 0,uin:this.dataForm.uin,user:this.dataForm.user,name:this.dataForm.name,password:this.dataForm.password,app:this.dataForm.app,stream:this.dataForm.stream,apptype:this.dataForm.apptype,puburlpub:this.dataForm.puburlpub,config:n()(this.configForm),status:this.dataForm.status,msmstate:this.dataForm.msmstate};console.log(t),(this.dataForm.id?s.a.applist.update(t):s.a.applist.add(t)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})},handleClick:function(e,t){console.log(e,t)}},computed:{comencode:{get:function(){var e={};return e.ADBitRate=o()(this.configForm.ADBitRate),e},set:function(e){this.configForm.ADBitRate=""+e.ADBitRate}},dvideo:{get:function(){return this.dvideoConfig.method=this.configForm.VD_method,this.dvideoConfig.fps=this.configForm.VDFPS,this.dvideoConfig.biterate=this.configForm.VDBitRate,this.dvideoConfig.qmin=this.configForm.abrDqmin,this.dvideoConfig.qulity=this.configForm.VBRDQuality,[this.dvideoConfig.method,this.dvideoConfig.fps,this.dvideoConfig.biterate,this.dvideoConfig.qmin,this.dvideoConfig.qulity]},set:function(e){this.dvideoConfig.method=e[0],this.dvideoConfig.fps=e[1],this.dvideoConfig.biterate=e[2],this.dvideoConfig.qmin=e[3],this.dvideoConfig.qulity=e[4],this.configForm.VD_method=this.dvideoConfig.method,this.configForm.VDFPS=this.dvideoConfig.fps,this.configForm.VDBitRate=this.dvideoConfig.biterate,this.configForm.abrDqmin=this.dvideoConfig.qmin,"vbr"===this.dvideoConfig.method&&(this.configForm.VBRDQuality=this.dvideoConfig.qulity)}},cvideo:{get:function(){return this.cvideoConfig.method=this.configForm.VC_method,this.cvideoConfig.fps=this.configForm.VCFPS,this.cvideoConfig.biterate=this.configForm.VCBitRate,this.cvideoConfig.qmin=this.configForm.abrCqmin,this.cvideoConfig.qulity=this.configForm.VBRCQuality,[this.cvideoConfig.method,this.cvideoConfig.fps,this.cvideoConfig.biterate,this.cvideoConfig.qmin,this.cvideoConfig.qulity]},set:function(e){this.cvideoConfig.method=e[0],this.cvideoConfig.fps=e[1],this.cvideoConfig.biterate=e[2],this.cvideoConfig.qmin=e[3],this.cvideoConfig.qulity=e[4],this.configForm.VC_method=this.cvideoConfig.method,this.configForm.VCFPS=this.cvideoConfig.fps,this.configForm.VCBitRate=this.cvideoConfig.biterate,this.configForm.abrCqmin=this.cvideoConfig.qmin,"vbr"===this.cvideoConfig.method&&(this.configForm.VBRCQuality=this.cvideoConfig.qulity)}},fvideo:{get:function(){return this.fvideoConfig.method=this.configForm.VF_method,this.fvideoConfig.fps=this.configForm.VFFPS,this.fvideoConfig.biterate=this.configForm.VFBitRate,this.fvideoConfig.qmin=this.configForm.abrFqmin,this.fvideoConfig.qulity=this.configForm.VBRFQuality,[this.fvideoConfig.method,this.fvideoConfig.fps,this.fvideoConfig.biterate,this.fvideoConfig.qmin,this.fvideoConfig.qulity]},set:function(e){this.fvideoConfig.method=e[0],this.fvideoConfig.fps=e[1],this.fvideoConfig.biterate=e[2],this.fvideoConfig.qmin=e[3],this.fvideoConfig.qulity=e[4],this.configForm.VF_method=this.fvideoConfig.method,this.configForm.VFFPS=this.fvideoConfig.fps,this.configForm.VFBitRate=this.fvideoConfig.biterate,this.configForm.abrFqmin=this.fvideoConfig.qmin,"vbr"===this.fvideoConfig.method&&(this.configForm.VBRFQuality=this.fvideoConfig.qulity)}},rtmpUrl:function(){var e=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,e);return"rtmp://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t},flvUrl:function(){var e=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,e);return"http://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t+".flv"},m3u8Url:function(){var e=this.configForm.stream.indexOf("?"),t=this.configForm.stream.substring(0,e);return"http://publish.astevencui.com/"+this.configForm.PublishRoomInfo+"/"+t+".m3u8"}},mounted:function(){this.dataForm=this.value;var e=JSON.parse(this.dataForm.config);this.configForm=e,console.log(this.configForm)},watch:{currentValue:function(e,t){var a=JSON.parse(this.value);console.log(a)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-col",{attrs:{span:18}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,"label-width":"100px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"app",prop:"app"}},[a("el-input",{attrs:{placeholder:"app"},model:{value:e.configForm.PublishRoomInfo,callback:function(t){e.$set(e.configForm,"PublishRoomInfo",t)},expression:"configForm.PublishRoomInfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"stream",prop:"stream"}},[a("el-input",{attrs:{placeholder:"stream"},model:{value:e.configForm.stream,callback:function(t){e.$set(e.configForm,"stream",t)},expression:"configForm.stream"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"PubUrlPub",prop:"stream"}},[a("el-input",{attrs:{placeholder:"PubUrlPub"},model:{value:e.configForm.PubUrlPub,callback:function(t){e.$set(e.configForm,"PubUrlPub",t)},expression:"configForm.PubUrlPub"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Domain",prop:"Domain"}},[a("el-input",{attrs:{placeholder:"Domain"},model:{value:e.configForm.Domain,callback:function(t){e.$set(e.configForm,"Domain",t)},expression:"configForm.Domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"播放地址"}},[a("el-input",{attrs:{placeholder:"Domain"},model:{value:e.rtmpUrl,callback:function(t){e.rtmpUrl=t},expression:"rtmpUrl"}}),e._v(" "),a("el-input",{attrs:{placeholder:"Domain"},model:{value:e.flvUrl,callback:function(t){e.flvUrl=t},expression:"flvUrl"}}),e._v(" "),a("el-input",{attrs:{placeholder:"Domain"},model:{value:e.m3u8Url,callback:function(t){e.m3u8Url=t},expression:"m3u8Url"}})],1),e._v(" "),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"直播内容设置",name:"first"}},[a("el-form-item",{attrs:{label:"聊天地址:",prop:"ChatUrl"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.configForm.ChatUrl,callback:function(t){e.$set(e.configForm,"ChatUrl",t)},expression:"configForm.ChatUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"最大分辨率:",prop:"MaxOutResolution"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.configForm.MaxOutResolution,callback:function(t){e.$set(e.configForm,"MaxOutResolution",t)},expression:"configForm.MaxOutResolution"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("label",[e._v("直播流最大输出分辨率")])],1),e._v(" "),a("el-form-item",{attrs:{label:"关键帧间隔:",prop:"MaxOutResolution"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.configForm.VDIntervalSecond,callback:function(t){e.$set(e.configForm,"VDIntervalSecond",t)},expression:"configForm.VDIntervalSecond"}},e._l(e.optionsInternal,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("label",[e._v("数值越大，视频画面连贯性越好，硬件及宽带要求越高")])],1),e._v(" "),a("el-form-item",{attrs:{label:"音频码率:",prop:"ADBitRate"}},[a("el-slider",{model:{value:e.comencode.ADBitRate,callback:function(t){e.$set(e.comencode,"ADBitRate",t)},expression:"comencode.ADBitRate"}})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"桌面直播参数设置",name:"second"}},[a("edit-encode",{model:{value:e.dvideo,callback:function(t){e.dvideo=t},expression:"dvideo"}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"摄像头直播参数设置",name:"third"}},[a("edit-encode",{model:{value:e.cvideo,callback:function(t){e.cvideo=t},expression:"cvideo"}}),e._v(" "),a("div",[e._v(e._s(e.cvideo))])],1),e._v(" "),a("el-tab-pane",{attrs:{label:"本地视频直播参数设置",name:"fourth"}},[a("edit-encode",{model:{value:e.fvideo,callback:function(t){e.fvideo=t},expression:"fvideo"}})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("span",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(l,d,!1,null,null,null);t.default=m.exports}});