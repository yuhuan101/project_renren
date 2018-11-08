<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList">
      <el-form-item>
        <el-input v-model="queryForm.uin" placeholder="房间号" clearable></el-input>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
          v-model="value5"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          align="right">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="charts">
      <vue-highcharts :options="options" ref="lineCharts" ></vue-highcharts>
    </div>
  </div>
</template>

<script>
  import API from '@/api'
  import AddOrUpdate from './add-or-update'
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
        value5: new Date()
      }
    },
    components: {
      AddOrUpdate,
      VueHighcharts
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true

        this.getTimeParams()

        let lineCharts = this.$refs.lineCharts
        API.dmslivenumbers.livenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }

            let resultObj = data.page

            let xdata = resultObj.createTime
            lineCharts.getChart().xAxis[0].categories = xdata

            for (let key in resultObj) {
              //console.log(key, resultObj[key])
              if (key !== 'createTime') {
                lineCharts.addSeries({ name: key, data: resultObj[key] })
              }
            }
            // lineCharts.addSeries(xdata)

            // lineCharts.addSeries({ name: '自己', data: this.ymydata })
            // lineCharts.loadData()
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      getTimeParams () {
        let date = this.format(this.value5, 'yyyy-MM-dd')
        this.queryForm.startTime = date + ' 00:00:00'
        let now = this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        console.log(now)
        if (now.indexOf(date) !== -1) {
          this.queryForm.endTime = now
        } else {
          this.queryForm.endTime = date + ' 23:59:59'
        }
      }
    },
    watch: {
      value5 (val) {
        let date = this.format(val, 'yyyy-MM-dd')
        this.queryForm.startTime = date + ' 00:00:00'
        let now = this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        console.log(now)
        if (now.indexOf(date) !== -1) {
          this.queryForm.endTime = now
        } else {
          this.queryForm.endTime = date + ' 23:59:59'
        }
        console.log(this.queryForm)
      }
    },
    computed: {
      options: function () {
        let datatmp = [{name: '2018-05-10 12:05:00', y: 100 * Math.random()}]

        var DATA_POINTINTERVAL = 600000
        var DATA_POINTSTART = 1532793000000
        var COLOR_LIST = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
          '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
          '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']

        return {
          chart: {
            height: 300,
            // width: 1024,
            zoomType: 'x',
            type: 'area'
          },
          colors: COLOR_LIST,
          global: {
            useUTC: false
          },
          title: {
            text: '用户数来源统计'
          },
          subtitle: {
            text: ''
          },
          plotOptions: {
            area: {
              turboThreshold: 20000
            },
            turboThreshold: 20000
          },
          xAxis: {
            labels: {
              enabled: false
            }
          },
          yAxis: {
            title: {
              text: '用户数 (个)'
            },
            tooltip: {
              shared: true,
              valueSuffix: '个',
              xDateFormat: '%Y-%m-%d %H:%M:%S'
            },
            plotOptions: {
              area: {
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              },
              series: {
                lineWidth: 1,
                marker: {
                  enabled: false
                },
                pointInterval: DATA_POINTINTERVAL, // one hour
                pointStart: DATA_POINTSTART,
                point: {
                  events: {
                    'click': function (e) {
                      // var arr_index = (e.point.x-DATA_POINTSTART)/DATA_POINTINTERVAL;
                      // percent( parseInt(arr_index) );
                      // $('#page-wrapper').scrollTop(10000);
                    },
                    'mouseOver': function () {
                    }
                  }
                }
              }
            },
            labels: {
              formatter: function () {
                return this.value + '个'
              }
            },
            series: [{
              data: datatmp
            }]
          }
        }
      }
    }
  }
</script>
