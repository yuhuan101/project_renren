webpackJsonp([41],{KHRY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("gyMJ"),i=r("2mH5"),s={data:function(){return{dataForm:{key:""},queryForm:{startTime:"",endTime:""},pickerOptions2:{disabledDate:function(e){return e.getTime()>Date.now()}},selectTime:new Date}},components:{VueHighcharts:r.n(i).a},activated:function(){this.getAlllivenumbers()},computed:{options:function(){var e=this;return{title:{text:"用户来源数据统计"},credits:{enabled:!1},chart:{height:300,zoomType:"x",type:"area"},legend:{},plotOptions:{area:{turboThreshold:2e4},turboThreshold:2e4},xAxis:{labels:{step:20,formatter:function(){return e.format(new Date(this.value),"HH:mm")}}},series:[{data:[]}]}}},methods:{getAlllivenumbers:function(){var e=this;this.getTimeParams();var t=this.$refs.lineCharts;a.a.dmslivenumbers.alllivenumbers(this.queryForm).then(function(r){var a=r.data;if(a&&0===a.code){null!=t&&t.removeSeries(),e.roomList=a.page.companyList;var i=a.page,s=i.createTime;for(var n in t.getChart().xAxis[0].categories=s,i)"createTime"!==n&&"companyList"!==n&&"roomList"!==n&&t.addSeries({name:"total"==n?"全部":n,data:i[n]})}else e.$message.error(a.msg)})},getTimeParams:function(){var e=this.format(this.selectTime,"yyyy-MM-dd");this.queryForm.startTime=e+" 00:00:00";var t=this.format(new Date,"yyyy-MM-dd HH:mm:ss");-1!==t.indexOf(e)?this.queryForm.endTime=t:this.queryForm.endTime=e+" 23:59:59"}},watch:{}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"room-data"},[r("el-form",{attrs:{inline:!0,model:e.dataForm}},[r("el-form-item",{attrs:{label:"时间选择:"}},[r("el-date-picker",{attrs:{"picker-options":e.pickerOptions2,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],align:"right"},model:{value:e.selectTime,callback:function(t){e.selectTime=t},expression:"selectTime"}})],1),e._v(" "),r("el-form-item",[r("el-button",{nativeOn:{click:function(t){e.getAlllivenumbers(t)}}},[e._v("查询")])],1)],1),e._v(" "),r("div",{staticClass:"charts"},[r("vue-highcharts",{ref:"lineCharts",attrs:{options:e.options}})],1)],1)},staticRenderFns:[]},o=r("VU/8")(s,n,!1,null,null,null);t.default=o.exports}});