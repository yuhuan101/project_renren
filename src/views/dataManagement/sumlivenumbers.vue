<template>
  <div class="room-data">
    <el-form :inline="true" :model="dataForm">
      <!-- <el-form-item>
        <el-input v-model="queryForm.uin" placeholder="房间号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="queryForm.domain" placeholder="按照域名查询(开发中)" clearable></el-input>
      </el-form-item> -->
      <el-form-item label="时间选择:">
        <el-date-picker
          v-model="selectTime"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          align="right">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click.native="getAlllivenumbers">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="charts">
      <vue-highcharts :options="options" ref="lineCharts" ></vue-highcharts>
    </div>
  </div>
</template>

<script>
  import API from '@/api'
  import VueHighcharts from 'vue2-highcharts'
  export default {
    data () {
      return {
        dataForm: {
          key: ''
        },
        queryForm: {
          startTime: '',
          endTime: ''
        },
        pickerOptions2: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          }
        },
        selectTime: new Date(),
      }
    },
    components: {
      VueHighcharts
    },
    activated () {
      this.getAlllivenumbers()
    },
    computed: {
      options: function () {
        const that = this;
        // let datatmp = [{name: '2018-05-10 12:05:00', y: 100 * Math.random()}]
        let datatmp = [];
        return {
          title: {
            text: '用户来源数据统计'
          },
          credits: {
            enabled:false
          },
          chart: {
            height: 300,
            zoomType: 'x',
            type: 'area'
          },
          legend: {
            /*itemStyle: {
              "fontSize": "15px",
              "fontWeight": "500"
            },*/
          },
          plotOptions: {
            area: {
              turboThreshold: 20000
            },
            turboThreshold: 20000
          },
          xAxis:{ 
            labels:{
              // enabled: false,
              step: 20,
              formatter:function(){
                let times = that.format(new Date(this.value), 'HH:mm')
                return times;
              }
            },
          },
          series: [{
            data: datatmp
          }],
        }
      }
    },
    methods: {
       getAlllivenumbers() {
        this.getTimeParams();
        let lineCharts = this.$refs.lineCharts
        API.dmslivenumbers.alllivenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            this.roomList = data.page.companyList;
            let resultObj = data.page
            let xdata = resultObj.createTime;
            lineCharts.getChart().xAxis[0].categories = xdata;
            for (let key in resultObj) {
                if (key !== 'createTime' && key !== 'companyList' && key !== 'roomList') {
                  lineCharts.addSeries({ name: key == 'total'?'全部':key, data: resultObj[key] })
                }
            }
          }else{
            this.$message.error(data.msg)
          }
        })
      },
      getTimeParams () {
        let date = this.format(this.selectTime, 'yyyy-MM-dd')
        this.queryForm.startTime = date + ' 00:00:00'
        let now = this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        if (now.indexOf(date) !== -1) {
          this.queryForm.endTime = now
        } else {
          this.queryForm.endTime = date + ' 23:59:59'
        }
      },
    },
    watch: {
      
    }
  }
</script>
