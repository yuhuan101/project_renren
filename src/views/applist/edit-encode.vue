<template>
    <div >
      <el-form-item label="视频编码方式:" prop="MaxOutResolution">
        <el-select v-model="valueEncode" placeholder="请选择">
          <el-option
            v-for="item in optionsEncode"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="视频帧率:" prop="fps">
        <el-slider :max="25" v-model="vfps"></el-slider>
      </el-form-item>
      <el-form-item v-if="valueEncode=='vbr'" label="视频质量参数:" prop="qulity">
        <el-slider :max="51" v-model="qulity"></el-slider>
      </el-form-item>
      <div v-else>
        <el-form-item  label="视频码率:">
          <el-slider :max="3000" v-model="vbiterate"></el-slider>
        </el-form-item>
        <el-form-item label="视频质量:" prop="qulity">
          <el-slider :max="51" v-model="qmin"></el-slider>
        </el-form-item>
        <label>{{ value }}</label>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props: [
        // fps: {
        //   Number,
        //   default: 0
        // },
        // biterate: {
        //   Number,
        //   default: 0
        // },
        // qulity: {
        //   Number,
        //   default: 0
        // }
        'value'
      ],
      data () {
        return {
          optionsEncode: [{
            value: 'cbr',
            label: 'abr平均码率(推荐)'
          }, {
            value: 'vbr',
            label: 'vbr动态码率'
          }],
          valueEncode: this.value[0],
          fps: Number(this.value[1]),
          biterate: Number(this.value[2]),
          qmin: Number(this.value[3]),
          qulity: Number(this.value[4])
        }
      },
      watch: {
        // value (val, oldVal) {
        //   if (Array.isArray(val) &&
        //     Array.isArray(oldVal) &&
        //     val.every((item, index) => item === oldVal[index])) {
        //     return
        //   }
        //   this.setValues()
        // },
        fps (val) {
          this.setValues()
        },
        biterate (val) {
          this.setValues()
        },
        qulity (val) {
          this.setValues()
        },
        qmin (val) {
          this.setValues()
        },
        valueEncode (val) {
          this.setValues()
        }
      },
      methods: {
        setValues () {
          this.$emit('input', [this.valueEncode, '' + this.fps, '' + this.biterate, '' + this.qmin, '' + this.qulity])
        }
      },
      computed: {
        vbiterate: {
          get: function () {
            let biterate = Number(this.value[2])
            return biterate
          },
          set: function (vale) {
            this.biterate = vale
          }
        },
        vfps: {
          get: function () {
            let fps = Number(this.value[1])
            return fps
          },
          set: function (vale) {
            this.fps = vale
          }
        }
      }
    }
</script>
<style>

</style>
