// 同步代码
// import state from './state';

const mutations = {
  HANDLE_CUR_COMPONENT(state, cbData) {
    console.log('mu', cbData);
    state.curComponent = cbData;
  },
};

export default mutations;
