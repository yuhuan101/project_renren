<template>
  <div class="menu-box">
    <el-submenu
      v-if="menuNav.length"
      v-for="(item,index) in menuNav"
      :key="item.menuId"
      :index="item.menuId + ''">
      
      <template slot="title">
        <i :class="['site-sidebar__menu-icon', item.icon ? item.icon : 'fa fa-circle-o']"></i>
        <span>{{ item.name }}</span>
      </template>

      <!-- type 0目录1菜单 -->
      <el-submenu 
        v-if="listItem.type == 0"
        v-for="listItem in item.list" 
        :index="listItem.menuId + ''"
        :key="listItem.menuId"
        >

        <template slot="title">
          <i :class="['site-sidebar__menu-icon', listItem.icon ? listItem.icon : 'fa fa-circle-o']"></i>
          <span>{{ listItem.name }}</span>
        </template>
        <el-menu-item
          v-if="listItem.list.length"
          v-for="el in listItem.list"
          :index="el.menuId + ''"
          :key="el.menuId"
          @click="gotoRouteHandle(el.url)">
          <template slot="title">
            <i :class="['site-sidebar__menu-icon', el.icon ? el.icon : 'fa fa-circle-o']"></i>
            <span>{{ el.name }}</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-menu-item 
        v-if="list.type == 1"
        v-for="list in item.list" 
        :index="list.menuId + ''"
        :key="list.menuId"
        @click="gotoRouteHandle(list.url)">
        <template slot="title">
          <i :class="['site-sidebar__menu-icon', list.icon ? list.icon : 'fa fa-circle-o']"></i>
          <span>{{ list.name }}</span>
        </template>
      </el-menu-item>

    </el-submenu>
  </div>
</template>

<script>
  import SubMenuNav from '../sub-menu-nav'
  import { getRouteNameByUrl } from '@/utils'
  export default {
    name: 'sub-menu-nav',
    props: {
      menuNav: {},
    },
    components: {
      SubMenuNav
    },
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
      // 跳转到菜单导航对应路由
      gotoRouteHandle (url) {
        var routeName = getRouteNameByUrl(url)
        if (/\S/.test(routeName)) {
          this.$router.push({ name: routeName })
        }
      }
    },
    mounted() {
    }
  }
</script>
