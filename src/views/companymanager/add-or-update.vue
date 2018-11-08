<template>
  <el-dialog
    :title="!dataForm.agentId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="100px">

      <el-form-item label="子公司名称" prop="company">
        <el-input v-model="dataForm.company" placeholder="子公司名称"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="dataForm.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="dataForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="并发总数" prop="concurrentSum">
        <el-input v-model="dataForm.concurrentSum" placeholder="并发总数"></el-input>
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
          agentId: 0,
          parentId: '',
          userId: '',
          company: '',
          name: '',
          password: '',
          concurrentSum: '',
          concurrentRem: '',
          createUserId: '',
          createTime: '',
          orderNum: '',
          agentFlag: ''
        },
        dataRule: {
          company: [
            { required: true, message: '子公司名称不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          concurrentSum: [
            { required: true, message: '并发总数不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.agentId = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.agentId) {
            API.companymanager.info(this.dataForm.agentId).then(({data}) => {
              if (data && data.code === 0) {
                console.log(data);
                this.dataForm.parentId = data.companyManager.parentId
                this.dataForm.userId = data.companyManager.userId
                this.dataForm.company = data.companyManager.company
                this.dataForm.name = data.companyManager.name
                this.dataForm.password = data.companyManager.password
                this.dataForm.concurrentSum = data.companyManager.concurrentSum
                this.dataForm.concurrentRem = data.companyManager.concurrentRem
                this.dataForm.createUserId = data.companyManager.createUserId
                this.dataForm.createTime = data.companyManager.createTime
                this.dataForm.orderNum = data.companyManager.orderNum
                this.dataForm.agentFlag = data.companyManager.agentFlag
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
              'agentId': this.dataForm.agentId || undefined,
              'parentId': this.dataForm.parentId,
              'userId': this.dataForm.userId,
              'company': this.dataForm.company,
              'name': this.dataForm.name,
              'password': this.dataForm.password,
              'concurrentSum': this.dataForm.concurrentSum,
              'concurrentRem': this.dataForm.concurrentRem,
              'createUserId': this.dataForm.createUserId,
              'createTime': this.dataForm.createTime,
              'orderNum': this.dataForm.orderNum,
              'agentFlag': 2
            }
            var tick = !this.dataForm.agentId ? API.companymanager.add(params) : API.companymanager.update(params)
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
