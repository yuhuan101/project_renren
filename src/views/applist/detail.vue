<template>
    <div>
      <el-form>
        <el-form-item label="时间选择:">
          <!--<el-button type="info">昨天</el-button>-->
          <el-button type="info" @click="onToday">昨天</el-button>
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
      </el-form>
      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
    </div>
</template>
<script type="text/ecmascript-6">
  import API from '@/api'

  function format (date, fmt) {
    var o = {
      'M+': date.getMonth() + 1,                 // 月份
      'd+': date.getDate(),                    // 日
      'H+': date.getHours(),                   // 小时
      'm+': date.getMinutes(),                 // 分
      's+': date.getSeconds(),                 // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()             // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }

  function getUTC (date) {
    let fmt = format(date, 'yyyy-MM-dd HH:mm:ss')
    // fmt.replace(/\r\n/ig, 'T')
    fmt = fmt.replace(/\s+/g, 'T')

    return fmt + 'Z'
  }

  export default {
    data () {
      return {
        appName: '',
        endTime: '',
        startTime: '',
        streamName: '',
        xData: [],
        yData: [],
        pickerOptions2: {
          disabledDate (time) {
            return time.getTime() > Date.now() - 3600 * 1000 * 24
          }
        },
        value5: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 0, 0)
      }
    },
    mounted () {
      // this.getDataList()
    },
    activated () {
      this.appName = this.$route.query.config.PublishRoomInfo
      let stream = this.$route.query.config.stream
      stream = stream.substring(0, stream.indexOf('?'))
      this.streamName = stream
      this.value5.setHours(this.value5.getHours() - 8)
      this.startTime = getUTC(this.value5)
      var date = new Date(this.value5)
      date.setDate(date.getDate() + 1)
      date.setSeconds(date.getSeconds() - 1)
      this.endTime = getUTC(date)
      this.getDataList()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let echarts = this.$echarts
        let xData = this.xData
        let yData = this.yData

        let option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%']
            }
          },
          title: {
            left: 'center',
            text: '历史人数'
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name: '当前人数',
              type: 'bar',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: 'rgb(255, 70, 131)'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }])
                }
              },
              data: yData,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              }
            }
          ]
        }

        myChart.setOption(option)
      },
      // 获取数据列表
      getDataList () {
        let params = {
          appName: this.appName,
          endTime: this.endTime,
          startTime: this.startTime,
          streamName: this.streamName
        }
        API.appdetail.historynumber(params).then(({data}) => {
          if (data && data.code === 0) {
            let listArray = data.page.list
            let xdate = []
            let ydate = []
            listArray.map(usrInfo => {
              let localtime = new Date(usrInfo.streamTime).toString()
              console.log(localtime, usrInfo.streamTime)
              xdate.push(localtime)
              ydate.push(Number(usrInfo.userNum))
            })
            this.xData = xdate
            this.yData = ydate
            this.drawLine()
          } else {
            this.xData = []
            this.yData = []
          }
        })
      },
      onToday () {
        // picker.$emit('pick', new Date());
        let now = new Date()
        this.value5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0)
      }
    },
    watch: {
      value5 (val) {
        val.setHours(val.getHours() - 8)
        console.log(getUTC(val))
        this.startTime = getUTC(val)
        var date = new Date(val)
        date.setDate(date.getDate() + 1)
        date.setSeconds(date.getSeconds() - 1)
        this.endTime = getUTC(date)
        this.getDataList()
      }
    }
  }
</script>
<style>

</style>
