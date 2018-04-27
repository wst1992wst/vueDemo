<template>
  <div>
        <p>您目前的总分为：{{score}}</p>
        <header class="item_title">题目{{num+1}}</header>
        <p>{{questionList[num].topic_desc}}</p>
        <el-radio-group v-model="answer_key" @change="answer_key_change" class="answer-list">
            <el-radio v-for="(item,i) in questionList[num]['topic_answer']" :key="i" :label="i">{{item}}</el-radio>
        </el-radio-group>

        
        <!-- <router-link to="/score" v-if="isLast" class="btnNext">
            <el-button type="primary">结束答卷</el-button>
        </router-link> -->
        <div class="btnNext">
            <el-button type="primary" @click="next()">{{isLast ? '结束答卷' : '下一题'}}</el-button>
        </div>

        <p v-show="show_result_msg && !result_isRight" class="result-msg-error">回答错误，继续加油</p>
        <p v-show="show_result_msg && result_isRight" class="result-msg-right">非常棒，回答正确</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
        answer_key: -1,
        answer_selected: false,
        show_result_msg: false,
        result_isRight: false
    }
  },
  computed: {
      ...mapState([
        'num',
        'questionList',
        'score'
    ]),
    isLast(){
        return this.num === this.questionList.length
    }
  },
  methods: {
    ...mapMutations({
        add: 'ADD_ITEMNUM'
    }),
    next(){
        //判断是否选择答案
        if(this.answer_key < 0){
            alert('您还没有选择答案哦~~')
            return;
        }
        //判断当前选择是否正确
        let isRight = false;
        if(this.questionList[this.num]['standard_answer'] == this.answer_key){
            this.result_isRight = true;
        }
        this.show_result_msg = true;
        const that = this;
        setTimeout(function(){
            that.show_result_msg = false;
            that.add(that.result_isRight);
            if(that.isLast){
                that.$router.push('Score');
            }
        },1000)
    },
    answer_key_change(){
        this.answer_selected = true;
    }
  },
  updated(){
    //   console.log('answer_key------------->',this.answer_key);
  },
  watch:{
      num(){
          this.show_result_msg = false;
          this.answer_key = -1;
          this.result_isRight = false;
      }
  }
}
</script>

<style class="less">
    .answer-list{
        margin-top: 30px;
    }
    .btnNext{
        display: block;
        padding: 10px 20px;
        margin-top: 40px;
    }
    .error-tip{
        color: red;
    }
    .result-msg-error{
        color: red
    }
    .result-msg-right{
        color: green
    }
</style>

