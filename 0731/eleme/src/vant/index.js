import Vue from 'vue'
// 第三方组件

// 轮播图
import {
    Swipe,
    SwipeItem
} from 'vant';
// 宫格
import {
    Grid,
    GridItem
} from 'vant';
// 底部 
import {
    Tabbar,
    TabbarItem
} from 'vant';

export default () => {
    // Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Tabbar).use(TabbarItem);
}