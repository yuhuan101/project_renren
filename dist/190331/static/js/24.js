webpackJsonp([24,48],{"6qlF":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("gyMJ"),r={data:function(){return{visible:!1,dataForm:{id:0,uin:"",params:"",numbers:"",alinumbers:"",createDate:""},dataRule:{uin:[{required:!0,message:"直播间id不能为空",trigger:"blur"}],params:[{required:!0,message:"请求参数不能为空",trigger:"blur"}],numbers:[{required:!0,message:"直播间在线人数(自己统计)不能为空",trigger:"blur"}],alinumbers:[{required:!0,message:"直播间在线人数(ali统计)不能为空",trigger:"blur"}],createDate:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&i.a.alilivenumbers.info(a.dataForm.id).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.uin=t.alilivenumbers.uin,a.dataForm.params=t.alilivenumbers.params,a.dataForm.numbers=t.alilivenumbers.numbers,a.dataForm.alinumbers=t.alilivenumbers.alinumbers,a.dataForm.createDate=t.alilivenumbers.createDate)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={id:e.dataForm.id||void 0,uin:e.dataForm.uin,params:e.dataForm.params,numbers:e.dataForm.numbers,alinumbers:e.dataForm.alinumbers,createDate:e.dataForm.createDate};(e.dataForm.id?i.a.alilivenumbers.update(t):i.a.alilivenumbers.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"直播间id",prop:"uin"}},[t("el-input",{attrs:{placeholder:"直播间id"},model:{value:e.dataForm.uin,callback:function(a){e.$set(e.dataForm,"uin",a)},expression:"dataForm.uin"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"请求参数",prop:"params"}},[t("el-input",{attrs:{placeholder:"请求参数"},model:{value:e.dataForm.params,callback:function(a){e.$set(e.dataForm,"params",a)},expression:"dataForm.params"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"直播间在线人数(自己统计)",prop:"numbers"}},[t("el-input",{attrs:{placeholder:"直播间在线人数(自己统计)"},model:{value:e.dataForm.numbers,callback:function(a){e.$set(e.dataForm,"numbers",a)},expression:"dataForm.numbers"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"直播间在线人数(ali统计)",prop:"alinumbers"}},[t("el-input",{attrs:{placeholder:"直播间在线人数(ali统计)"},model:{value:e.dataForm.alinumbers,callback:function(a){e.$set(e.dataForm,"alinumbers",a)},expression:"dataForm.alinumbers"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建时间",prop:"createDate"}},[t("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createDate,callback:function(a){e.$set(e.dataForm,"createDate",a)},expression:"dataForm.createDate"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},s=t("VU/8")(r,n,!1,null,null,null);a.default=s.exports},AG8m:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("gyMJ"),r=t("6qlF"),n=t("2mH5"),s=t.n(n),o={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,id:"test",xdata:[],yalidata:[],ymydata:[],queryForm:{uin:"",domain:"",startTime:"",endTime:""},pickerOptions2:{disabledDate:function(e){return e.getTime()>Date.now()}},value5:new Date}},components:{AddOrUpdate:r.default,VueHighcharts:s.a},activated:function(){this.getDataList()},computed:{options:function(){return{title:{text:"Chart reflow is set to true"},chart:{height:300,zoomType:"x",type:"line"},plotOptions:{area:{turboThreshold:2e4},turboThreshold:2e4},subtitle:{text:"When resizing the window or the frame, the chart should resize"},xAxis:{labels:{enabled:!1}},series:[{data:[{name:"2018-05-10 12:05:00",y:100*Math.random()}]}]}}},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var a={page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key},t=this.$refs.lineCharts;i.a.alilivenumbers.list(a).then(function(a){var i=a.data;if(i&&0===i.code){e.dataList=i.page.list;var r=[],n=[];e.dataList.forEach(function(e){var a={name:e.createDate,y:.05*e.alinumbers};r.push(a);var t={name:e.createDate,y:.05*e.numbers};n.push(t)}),e.yalidata=r,e.ymydata=n,null!=t&&t.removeSeries(),t.addSeries({name:"阿里",data:e.yalidata}),t.addSeries({name:"自己",data:e.ymydata}),e.totalPage=i.page.totalCount}else e.dataList=[],e.totalPage=0;e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var a=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){a.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var a=this,t=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+t.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.alilivenumbers.del(t).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.getDataList()}}):a.$message.error(t.msg)})})},getLiveNumbers:function(){var e=this;this.dataListLoading=!0,this.getTimeParams();var a=this.$refs.lineCharts;i.a.alilivenumbers.livenumbers(this.queryForm).then(function(t){var i=t.data;if(i&&0===i.code){e.dataList=i.page.list;var r=[],n=[],s=[];e.dataList.forEach(function(e){s.push(e.createDate),r.push(e.alinumbers),n.push(e.numbers)}),e.yalidata=r,e.ymydata=n,null!=a&&a.removeSeries(),console.log(s),a.getChart().xAxis[0].categories=s,a.addSeries({name:"阿里",data:e.yalidata}),a.addSeries({name:"自己",data:e.ymydata}),e.totalPage=i.page.totalCount}else e.dataList=[],e.totalPage=0;e.dataListLoading=!1})},getTimeParams:function(){var e=this.format(this.value5,"yyyy-MM-dd");this.queryForm.startTime=e+" 00:00:00";var a=this.format(new Date,"yyyy-MM-dd HH:mm:ss");console.log(a),-1!==a.indexOf(e)?this.queryForm.endTime=a:this.queryForm.endTime=e+" 23:59:59"}},watch:{value5:function(e){var a=this.format(e,"yyyy-MM-dd");this.queryForm.startTime=a+" 00:00:00";var t=this.format(new Date,"yyyy-MM-dd HH:mm:ss");console.log(t),-1!==t.indexOf(a)?this.queryForm.endTime=t:this.queryForm.endTime=a+" 23:59:59",console.log(this.queryForm)}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mod-config"},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.getLiveNumbers()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"房间号",clearable:""},model:{value:e.queryForm.uin,callback:function(a){e.$set(e.queryForm,"uin",a)},expression:"queryForm.uin"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{placeholder:"按照域名查询(开发中)",clearable:""},model:{value:e.queryForm.domain,callback:function(a){e.$set(e.queryForm,"domain",a)},expression:"queryForm.domain"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"时间选择:"}},[t("el-date-picker",{attrs:{"picker-options":e.pickerOptions2,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],align:"right"},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getLiveNumbers()}}},[e._v("查询")])],1)],1),e._v(" "),t("div",{staticClass:"charts"},[t("vue-highcharts",{ref:"lineCharts",attrs:{options:e.options}})],1)],1)},staticRenderFns:[]},d=t("VU/8")(o,l,!1,null,null,null);a.default=d.exports}});