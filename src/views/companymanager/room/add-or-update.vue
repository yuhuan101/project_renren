<template>
  <el-dialog
    :title="!dataForm.roomId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="房间名称" prop="name">
        <el-input v-model="dataForm.name" placeholder="房间名称"></el-input>
      </el-form-item>
      <el-form-item label="并发总数" prop="concurrentSum">
        <el-input v-model="dataForm.concurrentSum" placeholder="并发总数"></el-input>
      </el-form-item>
      <el-form-item label="直播账号" prop="username">
        <el-input v-model="dataForm.username" placeholder="直播账号"></el-input>
      </el-form-item>
      <el-form-item label="主播密码" prop="password">
        <el-input v-model="dataForm.password" placeholder="主播密码"></el-input>
      </el-form-item>
      <el-form-item v-if="showIncrement" label="增幅" prop="increment">
        <el-input v-model="dataForm.increment" placeholder="增幅"></el-input>
      </el-form-item>
      <el-form-item label="状态" size="mini" prop="playerType">
        <el-radio-group v-model="dataForm.playerType">
          <el-radio :label="0">TXPlayer</el-radio>
          <el-radio :label="1">ADPlayer</el-radio>
        </el-radio-group>
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
        showIncrement: false,
        dataForm: {
          roomId: 0,
          name: '',
          username: '',
          password: '',
          concurrentSum: '',
          increment: '',
          mcsId: '',
          playerType: 0,
          agentId: 0,
          createUserId: '',
          createTime: ''
        },
        dataRule: {
          name: [
            { required: true, message: '房间名称不能为空', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          concurrentSum: [
            { required: true, message: '并发总数不能为空', trigger: 'blur' }
          ],
          mcsId: [
            { required: true, message: '对应的mcsid不能为空', trigger: 'blur' }
          ],
          createUserId: [
            { required: true, message: '创建者ID不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id, agentId) {
        this.dataForm.roomId = id || 0
        this.dataForm.agentId = agentId || 0;
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.roomId) {
            API.roomlist.info(this.dataForm.roomId).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.name = data.roomList.name
                this.dataForm.username = data.roomList.username
                this.dataForm.password = data.roomList.password
                this.dataForm.concurrentSum = data.roomList.concurrentSum
                this.dataForm.increment = data.roomlist.increment
                this.dataForm.mcsId = data.roomList.mcsId
                this.dataForm.playerType = data.roomList.playerType
                this.dataForm.agentId = data.roomList.agentId
                this.dataForm.createUserId = data.roomList.createUserId
                this.dataForm.createTime = data.roomList.createTime
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
              'roomId': this.dataForm.roomId || undefined,
              'name': this.dataForm.name,
              'username': this.dataForm.username,
              'password': this.dataForm.password,
              'concurrentSum': this.dataForm.concurrentSum,
              'increment': this.dataForm.increment,
              'mcsId': this.dataForm.mcsId,
              'playerType': this.dataForm.playerType,
              'agentId': this.dataForm.agentId,
              'createUserId': this.dataForm.createUserId,
              'createTime': this.dataForm.createTime
            }
            var tick = !this.dataForm.roomId ? API.roomlist.add(params) : API.roomlist.update(params)
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
