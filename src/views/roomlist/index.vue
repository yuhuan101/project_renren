<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.key" placeholder="参数名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button v-if="isAuth('generator:roomlist:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button v-if="isAuth('generator:roomlist:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="roomId"
        header-align="center"
        align="center"
        label="">
      </el-table-column>
      <el-table-column
        prop="name"
        header-align="center"
        align="center"
        label="房间名称">
      </el-table-column>
      <el-table-column
        prop="username"
        header-align="center"
        align="center"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="password"
        header-align="center"
        align="center"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="concurrentSum"
        header-align="center"
        align="center"
        label="并发总数">
      </el-table-column>
      <el-table-column
        prop="mcsId"
        header-align="center"
        align="center"
        label="对应的mcs">
      </el-table-column>
      <el-table-column
        prop="playerType"
        header-align="center"
        align="center"
        width="100"
        label="播放器类型">
        <template slot-scope="scope">
          <label v-if="scope.row.playerType === 0">txPlayer</label>
          <label v-else>ADPlayer</label>
        </template>
      </el-table-column>
      <el-table-column
        prop="createUserId"
        header-align="center"
        align="center"
        label="创建者ID">
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="coverpic"
        label="封面图"
        sortable
        align="center">
        <template slot-scope="scope">
          <img  :src="scope.row.coverpic" alt="" style="width: 50px;height: 50px">
          <el-button type="text" size="small" @click="showUpload(scope.row.roomId)">上传封面图</el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showCode(scope.row.roomId)">复制代码</el-button>
          <el-button type="text" size="small" @click="showPlayer(scope.row.roomId)">预览</el-button>
          <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.roomId)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.roomId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    <el-dialog
      title="复制下面代码到你的项目中"
      :visible.sync="dialogVisible">
      <el-container>
        <el-main style="background-color: #909399">
          <textarea v-model="code" rows="8" style="width: 100%; font-family:Fixedsys;">
            mycode
          </textarea>
        </el-main>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 弹窗, 上传文件 -->
    <upload v-if="uploadVisible" ref="upload" @refreshDataList="getDataList"></upload>
  </div>
</template>

<script>
  import API from '@/api'
  import AddOrUpdate from './add-or-update'
  import Upload from './upload'
  export default {
    data () {
      return {
        dataForm: {
          key: ''
        },
        configForm: {
          PubUrlPub: '1069.lsspublish',
          PublishRoomInfo: 'cbqwhy',
          stream: 'test',
          StrKey: '',
          PubWay: 'rtmp',
          strUserID: '2748912479',
          ADSampleRate: '44100',
          ADChannels: '2',
          ADBitperSample: '16',
          ChatUrl: '',
          MaxOutResolution: '720*540',
          VDIntervalSecond: '3',
          ADBitRate: '31',
          VD_method: 'cbr',
          VDFPS: '8',
          VDBitRate: '230',
          VC_method: 'cbr',
          VCFPS: '10',
          VCBitRate: '308',
          VF_method: 'vbr',
          VFFPS: '20',
          VBRFQuality: '24',
          abrDqmin: '31',
          abrCqmin: '31',
          abrFqmin: '31',
          Uin: '1069',
          Domain: 'aodianyun.com'
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false,
        dialogVisible: false,
        uploadVisible: false,
        uin: ''
      }
    },
    components: {
      AddOrUpdate,
      Upload
    },
    activated () {
      this.getDataList()
    },
    computed: {
      playercode: function () {
        return '<script type="text/javascript" src="http://cdn.financeplayer.astevencui.com/renren-fast/app/yjplayer?r=' + this.uin + '"><' + '/' + 'script>'
      },
      mycode: function () {
        return '<div id="play" style="width: 100%;height: 480px;"></div>'
      },
      jqcode: function () {
        return '<script src="https://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"><' + '/' + 'script>'
      },
      code: function () {
        return this.mycode + '\n' + this.jqcode + '\n' + this.playercode
      },
      player () {
        return this.$refs.videoPlayer.player
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
        API.roomlist.list(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
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
      // 显示复制代码对话框
      showCode (uin) {
        this.uin = uin
        this.dialogVisible = true
      },
      showPlayer (roomId) {
        // API.applist.info(mcsId).then(({data}) => {
        //   console.log(data.appList)
        //   if (data && data.code === 0) {
        //     let config = JSON.parse(data.appList.config)
        //     this.configForm = config
        //     let index = this.configForm.stream.indexOf('?')
        //     let stream = this.configForm.stream.substring(0, index)
        //     let playurl = 'http://publish.astevencui.com/' + this.configForm.PublishRoomInfo + '/' + stream + '.m3u8'
        //     this.$router.push({path: '/videodetail', query: { url: playurl }})
        //   }
        // })
        window.open('/videoplayer.html?r='+roomId, '_blank')
      },
      showUpload (id) {
        this.uploadVisible = true
        this.$nextTick(() => {
          this.$refs.upload.init(id)
        })
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
          return item.roomId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.roomlist.del(ids).then(({data}) => {
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
      }
    }
  }
</script>
