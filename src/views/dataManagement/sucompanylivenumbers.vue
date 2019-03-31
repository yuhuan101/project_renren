<template>
  <div class="room-data">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getSumLivenumbers">
      <el-form-item>
        <el-select v-model="companyId" placeholder="请选择房间号" @change="getSumLivenumbers">
          <el-option
            v-for="item in companyList"
            :key="item.userId"
            :value="item.userId"
            :label="item.name"
            >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="roomList.length">
        <el-select v-model="roomId" placeholder="请选择直播间">
          <el-option
            v-for="item in roomList"
            :key="item.roomId"
            :value="item.roomId"
            :label="item.name"
            >
          </el-option>
        </el-select>
      </el-form-item>
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
        <el-button v-if="!roomId" @click.native="getSumLivenumbers">查询</el-button>
        <el-button v-if="companyId && roomId" @click.native="getLivenumbers">查询</el-button>
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
          endTime: '',
        },
        pickerOptions2: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          }
        },
        selectTime: new Date(),
        roomList: [],
        companyList: [],
        companyId: '',
        roomId: '',
      }
    },
    components: {
      VueHighcharts
    },
    activated () {
      this.getCompanylivenumbers()
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
      getLivenumbers() {
        this.getTimeParams();
        if(this.roomId == ''){
          this.getSumLivenumbers();
          return
        }
        this.queryForm['sumcompanyId'] = this.companyId;
        this.queryForm['uin'] = this.roomId;
        let lineCharts = this.$refs.lineCharts
        API.dmslivenumbers.livenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            let resultObj = data.page
            let xdata = resultObj.createTime;
            lineCharts.getChart().xAxis[0].categories = xdata;
            for (let key in resultObj) {
                if (key !== 'createTime') {
                  lineCharts.addSeries({ name: key == 'total'?'全部':key, data: resultObj[key] })
                }
            }
          }else{
            this.$message.error(data.msg)
          }
        })
      },
      getSumLivenumbers() {
        //选择全部子公司
        if(this.companyId == ''){
          this.getCompanylivenumbers()
          return;
        }
        this.roomId = ''
        this.roomList = []
        delete this.queryForm.uin;
        delete this.queryForm.sumcompanyId;
        this.queryForm['companyId'] = this.companyId
        this.getTimeParams();
        let lineCharts = this.$refs.lineCharts
        API.dmslivenumbers.sumlivenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            data.page.roomList.unshift({name: '全部' ,roomId: ''})
            this.roomList = data.page.roomList;
            let resultObj = data.page
            let xdata = resultObj.createTime;
            lineCharts.getChart().xAxis[0].categories = xdata;
            for (let key in resultObj) {
                if (key !== 'createTime' && key !== 'roomList') {
                  lineCharts.addSeries({ name: key == 'total'?'全部':key, data: resultObj[key] })
                }
            }
          }else{
            this.$message.error(data.msg)
          }
        })
      },
      getCompanylivenumbers() {
        this.getTimeParams();
        let lineCharts = this.$refs.lineCharts
        delete this.queryForm.uin;
        delete this.queryForm.companyId;
        delete this.queryForm.sumcompanyId;
        this.roomId = ''
        this.roomList = []
        API.dmslivenumbers.companylivenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            data.page.companyList.unshift({name: '全部', userId: ''})
            this.companyList = data.page.companyList;
            let resultObj = data.page
            let xdata = resultObj.createTime;
            lineCharts.getChart().xAxis[0].categories = xdata;
            for (let key in resultObj) {
                if (key !== 'createTime' && key !== 'companyList') {
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
