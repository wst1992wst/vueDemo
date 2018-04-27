<template>
  <div>
      <strong>您的最后的成绩为：{{score}}</strong>
      <div class="result">
        你们班的平均成绩为:{{getAverage}}，
        <span v-if="score > getAverage" class="luck">你为班级荣誉争光了~~</span>
        <span v-else class="warn">你给班级扯后腿了~~</span>
      </div>
      <div class="refresh">
        <el-button type="primary" @click="addStudent">刷新</el-button>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
        
    }
  },
  computed: {
    ...mapState([
      'score'
    ]),
    ...mapGetters([
      'getAverage'
    ])
  },
  methods: {
    ...mapActions([
      'addStudent'
    ])
  }
}
</script>

<style lang="less" scoped>
.result{
  margin-top: 40px;
  .luck{
    color: #2c64b2;
  }
  .warn{
    color: #f00;
  }
}
.refresh{
  margin-top: 40px;
}
</style>



