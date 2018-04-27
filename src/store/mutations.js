const ADD_ITEMNUM = 'ADD_ITEMNUM';    //累计题数
const MODIFY_ALLSTUDENT = 'MODIFY_ALLSTUDENT';  //修改班级人数

export default {
    // 跳到下一题并累计分数
    [ADD_ITEMNUM](state, isRight){
        if(isRight){
            state.score += 20;
        }
        state.num += 1;
    },
    // 班级人数+1
    [MODIFY_ALLSTUDENT](state){
        state.allStudent += 1;
    }
}