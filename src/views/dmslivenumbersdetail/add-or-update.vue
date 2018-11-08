<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="直播间id" prop="uin">
        <el-input v-model="dataForm.uin" placeholder="直播间id"></el-input>
      </el-form-item>
      <el-form-item label="域名" prop="domain">
        <el-input v-model="dataForm.domain" placeholder="域名"></el-input>
      </el-form-item>
      <el-form-item label="播放ip" prop="playerip">
        <el-input v-model="dataForm.playerip" placeholder="播放ip"></el-input>
      </el-form-item>
      <el-form-item label="平台类型" prop="platform">
        <el-input v-model="dataForm.platform" placeholder="平台类型"></el-input>
      </el-form-item>
      <el-form-item label="在线人数" prop="numbers">
        <el-input v-model="dataForm.numbers" placeholder="在线人数"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createDate">
        <el-input v-model="dataForm.createDate" placeholder="创建时间"></el-input>
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
        visible: false,
        dataForm: {
          id: 0,
          uin: '',
          domain: '',
          playerip: '',
          platform: '',
          numbers: '',
          createDate: ''
        },
        dataRule: {
          uin: [
            { required: true, message: '直播间id不能为空', trigger: 'blur' }
          ],
          domain: [
            { required: true, message: '域名不能为空', trigger: 'blur' }
          ],
          playerip: [
            { required: true, message: '播放ip不能为空', trigger: 'blur' }
          ],
          platform: [
            { required: true, message: '平台类型不能为空', trigger: 'blur' }
          ],
          numbers: [
            { required: true, message: '在线人数不能为空', trigger: 'blur' }
          ],
          createDate: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
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
            API.dmslivenumbersdetail.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.uin = data.dmslivenumbersdetail.uin
                this.dataForm.domain = data.dmslivenumbersdetail.domain
                this.dataForm.playerip = data.dmslivenumbersdetail.playerip
                this.dataForm.platform = data.dmslivenumbersdetail.platform
                this.dataForm.numbers = data.dmslivenumbersdetail.numbers
                this.dataForm.createDate = data.dmslivenumbersdetail.createDate
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'id': this.dataForm.id || undefined,
              'uin': this.dataForm.uin,
              'domain': this.dataForm.domain,
              'playerip': this.dataForm.playerip,
              'platform': this.dataForm.platform,
              'numbers': this.dataForm.numbers,
              'createDate': this.dataForm.createDate
            }
            var tick = !this.dataForm.id ? API.dmslivenumbersdetail.add(params) : API.dmslivenumbersdetail.update(params)
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
