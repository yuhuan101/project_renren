<template>
  <div>
    <el-submenu
      v-if="menuNav.list && menuNav.list.length >= 1"
      :data-idx="menuNav.menuId + ''"
      :index="menuNav.menuId + ''">
      <template slot="title">
        <i :class="['site-sidebar__menu-icon', menuNav.icon ? menuNav.icon : 'fa fa-circle-o']"></i>
        <span>{{ menuNav.name }}</span>
      </template>

     <!--  <sub-menu-nav
        v-for="item in menuNav.list" 
        :key="item.menuId"
        :menu-nav="item">
      </sub-menu-nav> -->
      <el-menu-item 
        v-for="item in $store.state.menuNavList.list" 
        :index="item.menuId + ''"
        :key="item.menuId"
      >
        <template slot="title">
          <i :class="['site-sidebar__menu-icon', item.icon ? item.icon : 'fa fa-circle-o']"></i>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>

      <el-submenu>
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
      </el-submenu>

    </el-submenu>

  <!-- <el-menu-item
    v-else
    :index="menuNav.menuId + ''"
    :data-idx="menuNav.menuId + ''"
    @click="gotoRouteHandle(menuNav.url)">

    <template 
      slot="title">
      <i :class="['site-sidebar__menu-icon', menuNav.icon ? menuNav.icon : 'fa fa-circle-o']"></i>
      <span>{{ menuNav.name }}</span>
    </template>

  </el-menu-item> -->
  </div>
</template>

<script>
  import SubMenuNav from '../sub-menu-nav'
  import { getRouteNameByUrl } from '@/utils'
  export default {
    name: 'sub-menu-nav',
    props: {
      menuNav: Object,
      required: true
    },
    components: {
      SubMenuNav
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
      console.log(this.$store.state.menuNavList)
    }
  }
</script>
