<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="用户id" prop="uin">
        <el-input v-model="dataForm.uin" placeholder="用户id"></el-input>
      </el-form-item>
      <el-form-item label="主播账户" prop="user">
        <el-input v-model="dataForm.user" placeholder="主播账户"></el-input>
      </el-form-item>
      <el-form-item label="主播名称" prop="name">
        <el-input v-model="dataForm.name" placeholder="主播名称"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="dataForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="app" prop="app">
        <el-input v-model="dataForm.app" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="stream" prop="stream">
        <el-input v-model="dataForm.stream" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="app类型" prop="apptype">
        <el-input v-model="dataForm.apptype" placeholder="0无，1lss，2lcps, 3 微视评， 4 LPS"></el-input>
      </el-form-item>
      <el-form-item label="自定义推流地址" prop="puburlpub">
        <el-input v-model="dataForm.puburlpub" placeholder="自定义推流地址"></el-input>
      </el-form-item>
      <el-form-item label="配置信息" prop="config">
        <el-input v-model="dataForm.config" placeholder="配置信息"></el-input>
      </el-form-item>
      <el-form-item label="添加时间" prop="addtime">
        <el-input v-model="dataForm.addtime" placeholder="添加时间"></el-input>
      </el-form-item>
      <el-form-item label="最后更新时间" prop="uptime">
        <el-input v-model="dataForm.uptime" placeholder="最后更新时间"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="dataForm.status" placeholder="1正常，0冻结"></el-input>
      </el-form-item>
      <el-form-item label="多卡推流" prop="msmstate">
        <el-input v-model="dataForm.msmstate" placeholder="0未开通，1开通"></el-input>
      </el-form-item>
      <el-form-item label="增幅" prop="increment">
        <el-input v-model="dataForm.increment" placeholder="增幅"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        config: {
          PubUrlPub: 'push2',
          PublishRoomInfo: 'cbqwhy',
          stream: 'stream1234?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612',
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
          Domain: 'astevencui.com'
        },

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
          msmstate: '',
          increment: ''
        },
        dataRule: {
          uin: [
            { required: true, message: '用户id不能为空', trigger: 'blur' }
          ],
          user: [
            { required: true, message: '主播账户不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '主播名称不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          app: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          stream: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          apptype: [
            { required: true, message: 'app类型，0无，1lss，2lcps, 3 微视评， 4 LPS不能为空', trigger: 'blur' }
          ],
          puburlpub: [
            { required: true, message: '自定义推流地址不能为空', trigger: 'blur' }
          ],
          config: [
            { required: true, message: '配置信息不能为空', trigger: 'blur' }
          ],
          addtime: [
            { required: true, message: '添加时间不能为空', trigger: 'blur' }
          ],
          uptime: [
            { required: true, message: '最后更新时间不能为空', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '状态，1正常，0冻结不能为空', trigger: 'blur' }
          ],
          msmstate: [
            { required: true, message: '多卡推流：0未开通，1开通不能为空', trigger: 'blur' }
          ]
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
                this.dataForm.increment = data.appList.increment
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.config.stream = 'stream' + this.dataForm.stream + '?k=e011cee7546a2b18b3bc9e1520cd4aa0&t=1523689612'
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
              'config': this.dataForm.config,
              'status': this.dataForm.status,
              'msmstate': this.dataForm.msmstate,
              'increment': this.dataForm.increment
            }
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
          }
        })
      }
    }
  }
</script>
