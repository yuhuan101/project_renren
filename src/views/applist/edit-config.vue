<template>
  <div>
    <el-col :span="18">
    <el-form :model="dataForm" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="100px">
      <el-form-item label="app" prop="app">
        <el-input v-model="configForm.PublishRoomInfo" placeholder="app"></el-input>
      </el-form-item>
      <el-form-item label="stream" prop="stream">
        <el-input v-model="configForm.stream" placeholder="stream"></el-input>
      </el-form-item>
      <el-form-item label="PubUrlPub" prop="stream">
        <el-input v-model="configForm.PubUrlPub" placeholder="PubUrlPub"></el-input>
      </el-form-item>
      <el-form-item label="Domain" prop="Domain">
        <el-input v-model="configForm.Domain" placeholder="Domain"></el-input>
      </el-form-item>
      <el-form-item label="播放地址">
        <el-input v-model="rtmpUrl" placeholder="Domain"></el-input>
        <el-input v-model="flvUrl" placeholder="Domain"></el-input>
        <el-input v-model="m3u8Url" placeholder="Domain"></el-input>
      </el-form-item>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="直播内容设置" name="first">
          <el-form-item label="聊天地址:" prop="ChatUrl">
            <el-input v-model="configForm.ChatUrl" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="最大分辨率:" prop="MaxOutResolution">
            <el-select v-model="configForm.MaxOutResolution" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <label>直播流最大输出分辨率</label>
          </el-form-item>

          <el-form-item label="关键帧间隔:" prop="MaxOutResolution">
            <el-select v-model="configForm.VDIntervalSecond" placeholder="请选择">
              <el-option
                v-for="item in optionsInternal"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <label>数值越大，视频画面连贯性越好，硬件及宽带要求越高</label>
          </el-form-item>

          <el-form-item label="音频码率:" prop="ADBitRate">
            <el-slider v-model="comencode.ADBitRate"></el-slider>
          </el-form-item>

        </el-tab-pane>
        <el-tab-pane label="桌面直播参数设置" name="second">
          <edit-encode v-model="dvideo"></edit-encode>
        </el-tab-pane>
        <el-tab-pane label="摄像头直播参数设置" name="third">
          <edit-encode v-model="cvideo"></edit-encode>
          <div>{{ cvideo }}</div>
        </el-tab-pane>
        <el-tab-pane label="本地视频直播参数设置" name="fourth">
          <edit-encode v-model="fvideo"></edit-encode>
        </el-tab-pane>
      </el-tabs>
    </el-form>
      <br/>
    <span class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
    </el-col>
  </div>
</template>

<script>
  import API from '@/api'
  import EditEncode from './edit-encode'
  export default {
    props: [
      'value'
    ],
    components: {
      EditEncode
    },
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          uin: '',
          user: '',
          name: '',
          password: '',
          app: '',
          stream: '',
          apptype: '',
          puburlpub: '',
          config: '',
          addtime: '',
          uptime: '',
          status: '',
          msmstate: ''
        },
        dataRule: {
          uin: [
            {required: true, message: '用户id不能为空', trigger: 'blur'}
          ],
          user: [
            {required: true, message: '主播账户不能为空', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '主播名称不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          app: [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          stream: [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          apptype: [
            {required: true, message: 'app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空', trigger: 'blur'}
          ],
          puburlpub: [
            {required: true, message: '自定义推流地址不能为空', trigger: 'blur'}
          ],
          config: [
            {required: true, message: '配置信息不能为空', trigger: 'blur'}
          ],
          addtime: [
            {required: true, message: '添加时间不能为空', trigger: 'blur'}
          ],
          uptime: [
            {required: true, message: '最后更新时间不能为空', trigger: 'blur'}
          ],
          status: [
            {required: true, message: '状态，1正常，0冻结不能为空', trigger: 'blur'}
          ],
          msmstate: [
            {required: true, message: '多卡推流：0未开通，1开通不能为空', trigger: 'blur'}
          ]
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
        activeName: 'first',
        options: [{
          value: '640*480',
          label: '640*480'
        }, {
          value: '720*540',
          label: '720*540'
        }, {
          value: '960*540',
          label: '960*540'
        }, {
          value: '1280*720',
          label: '1280*720'
        }, {
          value: '1920*1080',
          label: '1920*1080'
        }],
        valueRes: '1280*720',
        optionsInternal: [{
          value: '1',
          label: '1s'
        }, {
          value: '2',
          label: '2s'
        }, {
          value: '3',
          label: '3s'
        }, {
          value: '4',
          label: '4s'
        }],
        valueInternal: '3s',
        optionsEncode: [{
          value: 'abr',
          label: 'abr平均码率(推荐)'
        }, {
          value: 'vbr',
          label: 'vbr动态码率'
        }],
        valueEncode: 'abr',
        dvideoConfig: {
          method: 'cbr',
          fps: '10',
          biterate: '200',
          qmin: '31',
          qulity: '30'
        },
        cvideoConfig: {
          method: 'cbr',
          fps: '10',
          biterate: '200',
          qmin: '31',
          qulity: '30'
        },
        fvideoConfig: {
          method: 'cbr',
          fps: '10',
          biterate: '200',
          qmin: '31',
          qulity: '30'
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            API.applist.info(this.dataForm.id).then(({data}) => {
              console.log(data.appList)
              if (data && data.code === 0) {
                this.dataForm.uin = data.appList.uin
                this.dataForm.user = data.appList.user
                this.dataForm.name = data.appList.name
                this.dataForm.password = data.appList.password
                this.dataForm.app = data.appList.app
                this.dataForm.stream = data.appList.stream
                this.dataForm.apptype = data.appList.apptype
                this.dataForm.puburlpub = data.appList.puburlpub
                this.dataForm.config = data.appList.config
                this.dataForm.addtime = data.appList.addtime
                this.dataForm.uptime = data.appList.uptime
                this.dataForm.status = data.appList.status
                this.dataForm.msmstate = data.appList.msmstate
                let config = JSON.parse(this.dataForm.config)
                console.log(config)
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        var params = {
          'id': this.dataForm.id || undefined,
          'uin': this.dataForm.uin,
          'user': this.dataForm.user,
          'name': this.dataForm.name,
          'password': this.dataForm.password,
          'app': this.dataForm.app,
          'stream': this.dataForm.stream,
          'apptype': this.dataForm.apptype,
          'puburlpub': this.dataForm.puburlpub,
          'config': JSON.stringify(this.configForm),
          'status': this.dataForm.status,
          'msmstate': this.dataForm.msmstate
        }
        console.log(params)
        var tick = !this.dataForm.id ? API.applist.add(params) : API.applist.update(params)
        tick.then(({data}) => {
          if (data && data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                this.visible = false
                this.$emit('refreshDataList')
              }
            })
          } else {
            this.$message.error(data.msg)
          }
        })
      },
      handleClick (tab, event) {
        console.log(tab, event)
      }
    },
    computed: {
      comencode: {
        get: function () {
          let obj = {
          }
          obj.ADBitRate = Number.parseInt(this.configForm.ADBitRate)
          return obj
        },
        set: function (val) {
          this.configForm.ADBitRate = '' + val.ADBitRate
        }
      },
      dvideo: {
        get: function () {
          this.dvideoConfig.method = this.configForm.VD_method
          this.dvideoConfig.fps = this.configForm.VDFPS
          this.dvideoConfig.biterate = this.configForm.VDBitRate
          this.dvideoConfig.qmin = this.configForm.abrDqmin
          this.dvideoConfig.qulity = this.configForm.VBRDQuality
          // console.log(this.dvideoConfig)
          return [this.dvideoConfig.method, this.dvideoConfig.fps, this.dvideoConfig.biterate, this.dvideoConfig.qmin, this.dvideoConfig.qulity]
        },
        set: function (val) {
          this.dvideoConfig.method = val[0]
          this.dvideoConfig.fps = val[1]
          this.dvideoConfig.biterate = val[2]
          this.dvideoConfig.qmin = val[3]
          this.dvideoConfig.qulity = val[4]
          // console.log(this.dvideoConfig)
          this.configForm.VD_method = this.dvideoConfig.method
          this.configForm.VDFPS = this.dvideoConfig.fps
          this.configForm.VDBitRate = this.dvideoConfig.biterate
          this.configForm.abrDqmin = this.dvideoConfig.qmin
          if (this.dvideoConfig.method === 'vbr') {
            this.configForm.VBRDQuality = this.dvideoConfig.qulity
          }
        }
      },
      cvideo: {
        get: function () {
          this.cvideoConfig.method = this.configForm.VC_method
          this.cvideoConfig.fps = this.configForm.VCFPS
          this.cvideoConfig.biterate = this.configForm.VCBitRate
          this.cvideoConfig.qmin = this.configForm.abrCqmin
          this.cvideoConfig.qulity = this.configForm.VBRCQuality

          return [this.cvideoConfig.method, this.cvideoConfig.fps, this.cvideoConfig.biterate, this.cvideoConfig.qmin, this.cvideoConfig.qulity]
        },
        set: function (val) {
          this.cvideoConfig.method = val[0]
          this.cvideoConfig.fps = val[1]
          this.cvideoConfig.biterate = val[2]
          this.cvideoConfig.qmin = val[3]
          this.cvideoConfig.qulity = val[4]

          this.configForm.VC_method = this.cvideoConfig.method
          this.configForm.VCFPS = this.cvideoConfig.fps
          this.configForm.VCBitRate = this.cvideoConfig.biterate
          this.configForm.abrCqmin = this.cvideoConfig.qmin
          if (this.cvideoConfig.method === 'vbr') {
            this.configForm.VBRCQuality = this.cvideoConfig.qulity
          }
        }
      },
      fvideo: {
        get: function () {
          this.fvideoConfig.method = this.configForm.VF_method
          this.fvideoConfig.fps = this.configForm.VFFPS
          this.fvideoConfig.biterate = this.configForm.VFBitRate
          this.fvideoConfig.qmin = this.configForm.abrFqmin
          this.fvideoConfig.qulity = this.configForm.VBRFQuality
          return [this.fvideoConfig.method, this.fvideoConfig.fps, this.fvideoConfig.biterate, this.fvideoConfig.qmin, this.fvideoConfig.qulity]
        },
        set: function (val) {
          this.fvideoConfig.method = val[0]
          this.fvideoConfig.fps = val[1]
          this.fvideoConfig.biterate = val[2]
          this.fvideoConfig.qmin = val[3]
          this.fvideoConfig.qulity = val[4]

          this.configForm.VF_method = this.fvideoConfig.method
          this.configForm.VFFPS = this.fvideoConfig.fps
          this.configForm.VFBitRate = this.fvideoConfig.biterate
          this.configForm.abrFqmin = this.fvideoConfig.qmin
          if (this.fvideoConfig.method === 'vbr') {
            this.configForm.VBRFQuality = this.fvideoConfig.qulity
          }
        }
      },
      rtmpUrl: function () {
        let index = this.configForm.stream.indexOf('?')
        let stream = this.configForm.stream.substring(0, index)
        return 'rtmp://publish.astevencui.com/' + this.configForm.PublishRoomInfo + '/' + stream
      },
      flvUrl: function () {
        let index = this.configForm.stream.indexOf('?')
        let stream = this.configForm.stream.substring(0, index)
        return 'http://publish.astevencui.com/' + this.configForm.PublishRoomInfo + '/' + stream + '.flv'
      },
      m3u8Url: function () {
        let index = this.configForm.stream.indexOf('?')
        let stream = this.configForm.stream.substring(0, index)
        return 'http://publish.astevencui.com/' + this.configForm.PublishRoomInfo + '/' + stream + '.m3u8'
      }
    },
    mounted () {
      this.dataForm = this.value
      let config = JSON.parse(this.dataForm.config)
      this.configForm = config
      console.log(this.configForm)
    },
    watch: {
      currentValue (val, oldVal) {
        let config = JSON.parse(this.value)
        console.log(config)
      }
    }
  }
</script>
