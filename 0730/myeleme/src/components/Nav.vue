<template>
  <div>
    <van-swipe :loop="false" indicator-color="#fe7100">
      <van-swipe-item>
        <div>
          <van-grid :column-num="5">
            <van-grid-item v-for="(k,index) in kingkongListComputed" :key="index" :icon="k.link" :text="k.name" />
          </van-grid>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <van-grid :column-num="5">
            <van-grid-item v-for="(k,index) in kingkongListComputed2" :key="index" :icon="k.link" :text="k.name" />
          </van-grid>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div>
      <div class="index-1ECZ3_0">
        <section id="activity-lego" class="index-1y1Q5_0">
          <div class="index-3xB2N_0">
            <div class="index-Q3GS5_0 index-1xT5J_0">
              <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
              <div class="index-2W67h_0">搭配齐全吃得好</div>
              <div class="index-1DFa7_0">
                <!---->立即抢购 &gt;
              </div><img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"></div>
            <!---->
          </div>
        </section>
        <div class="index-3eoZ-_0">
          <div class="index-3M-d6_0"><img alt="" class="index-1QvOZ_0" src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/">
            <span class="index-M9mXY_0">超级会员</span>
            <span class="index-tO6Fz_0">
              <b></b>每月领20元红包</span>
          </div>
          <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
            <b class="index-4F0aw_0"></b>立即开通</a>
        </div>
        <!---->
        <!---->
      </div>
      <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" class="BackTop-icon_2Js4K94"></div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   宫格
      kingkongList: []
    };
  },
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 10);
    },
    kingkongListComputed2() {
      // 切割成八个宫格
      return this.kingkongList.slice(10);
    }
  },
  async created() {
    //   获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4041cad3d96f3926d5d9fc/nav/nav"
    );
    this.kingkongList = kingkongList.data[0].entries;
    // console.log(kingkongList.data[0].entries);
  }
};
</script>


<style>
.van-swipe__track {
  overflow: hidden;
}

.van-swipe__indicator {
  background: #000;
  opacity: 0.2;
  width: 2.4vw;
  height: 0.4vw;
  border-radius: 0;
}

.van-swipe__indicator--active {
  opacity: 1;
}

.index-1ECZ3_0 {
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 2.666667vw;
}

.index-1y1Q5_0 {
  background: #fff;
}

.index-3xB2N_0 {
  display: flex;
  margin-bottom: 0.8vw;
}

.index-1xT5J_0 {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
  height: 29.333333vw;
}

.index-1qvN6_0 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1.333333vw;
  color: #333;
}

.index-2W67h_0 {
  font-size: 14px;
  color: #777;
  margin-bottom: 2.4vw;
}

.index-1DFa7_0 {
  font-size: 13px;
  color: #af8260;
  font-weight: 700;
}

.index-Q3GS5_0 img {
  max-width: 100%;
  position: absolute;
  bottom: -2vw;
  top: 2.4vw;
  right: 3.733333vw;
  width: 37.6vw;
  height: 25.066667vw;
}

.index-3eoZ-_0 {
  height: 10.666667vw;
  margin-bottom: 1.066667vw;
  border-radius: 0.533333vw;
  background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
  background-size: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 2.666667vw 0 4vw;
  color: #644f1b;
  font-size: 0.293333rem;
}

.index-3M-d6_0 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.index-1QvOZ_0 {
  width: 4.533333vw;
  height: 4.533333vw;
  margin-right: 2vw;
  max-width: 100%;
}

.index-M9mXY_0 {
  font-size: 14px;
  font-weight: 700;
}

.index-tO6Fz_0:before {
  content: "\B7";
  margin: 0 0.106667rem;
  margin: 0 1.066667vw;
  font-weight: 700;
}

.index-1-R5E_0 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 10.666667vw;
  font-size: 13px;
  color: #644f1b;
}

.index-1-R5E_0:after {
  display: block;
  content: "";
  width: 1.066667vw;
  height: 1.066667vw;
  border-right: 0.266667vw solid #8c632b;
  border-bottom: 0.266667vw solid #8c632b;
  transform: rotate(-45deg);
  margin-left: 1.066667vw;
}
</style>

