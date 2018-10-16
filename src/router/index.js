/**
 * Created by user on 2018/9/21.
 */
import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';
Vue.use(Router);
const routes = [{
  path:'/',
  redirect:'/goods'          //重定向
},{
  path:'/goods',
  component:goods
},{
  path:'/ratings',
  component:ratings
},{
  path:'/seller',
  component:seller
}];
//创建router实例
export default new Router({
  linkActiveClass:'active',
  routes
});
