<template>
  <div class="room-data">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-input v-model="queryForm.uin" placeholder="房间号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="queryForm.domain" placeholder="按照域名查询(开发中)" clearable></el-input>
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
        <el-button>查询</el-button>
      </el-form-item>
    </el-form>
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
          uin: '',
          domain: '',
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
      
    },
    computed: {
      options: function () {
        let datatmp = [{name: '2018-05-10 12:05:00', y: 100 * Math.random()}]
        return {
          title: {
            text: 'Chart reflow is set to true'
          },
          chart: {
            height: 300,
            // width: 1024,
            zoomType: 'x',
            type: 'line'
          },
          plotOptions: {
            area: {
              turboThreshold: 20000
            },
            turboThreshold: 20000
          },
          subtitle: {
            text: 'When resizing the window or the frame, the chart should resize'
          },
          xAxis: {
            labels: {
              enabled: false
            }
          },
          series: [{
            data: datatmp
          }]
        }
      }
    },
    methods: {
      
    },
    watch: {
      
    }
  }
</script>
