<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getLiveNumbers()">
      <el-form-item>
        <el-input v-model="queryForm.uin" placeholder="房间号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="queryForm.domain" placeholder="按照域名查询(开发中)" clearable></el-input>
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
        <el-button @click="getLiveNumbers()">查询</el-button>
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
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false,
        id: 'test',
        xdata: [],
        yalidata: [],
        ymydata: [],
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
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          key: this.dataForm.key
        }
        let lineCharts = this.$refs.lineCharts
        API.alilivenumbers.list(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            let yali = []
            let ymy = []
            this.dataList.forEach(data => {
              let aliobj = {name: data.createDate, y: data.alinumbers * 0.05}
              yali.push(aliobj)
              let myobj = {name: data.createDate, y: data.numbers * 0.05}
              ymy.push(myobj)
            })
            this.yalidata = yali
            this.ymydata = ymy
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            lineCharts.addSeries({ name: '阿里', data: this.yalidata })
            lineCharts.addSeries({ name: '自己', data: this.ymydata })

            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.alilivenumbers.del(ids).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      },
      // 获取在线表
      getLiveNumbers () {
        this.dataListLoading = true

        this.getTimeParams()

        let lineCharts = this.$refs.lineCharts
        API.alilivenumbers.livenumbers(this.queryForm).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            let yali = []
            let ymy = []
            let xdata = []
            this.dataList.forEach(data => {
              xdata.push(data.createDate)
              // let aliobj = {name: data.createDate, y: data.alinumbers}
              yali.push(data.alinumbers)
             // let myobj = {name: data.createDate, y: data.numbers}
              ymy.push(data.numbers)
            })
            this.yalidata = yali
            this.ymydata = ymy
            if (lineCharts != null) {
              lineCharts.removeSeries()
            }
            // lineCharts.addSeries(xdata)
            console.log(xdata)
            lineCharts.getChart().xAxis[0].categories = xdata
            lineCharts.addSeries({ name: '阿里', data: this.yalidata })
            lineCharts.addSeries({ name: '自己', data: this.ymydata })

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
    }
  }
</script>
