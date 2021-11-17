import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path:"/", component: Home },
        { path:"/about", component: About },
    ],
});

// 11월 16일, 1/2만 진행할 수 밖에 없었던 이유는 아래 코드 한 줄의 부재..
export default router;