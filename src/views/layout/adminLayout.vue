<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :class="['sideBar', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      :width="300"
      @click="rail = false"
    >
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        height="64"
        class="rounded-0 navBtn d-md-none ml-auto"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!-- 平台logo start -->
      <div class="logoImg d-none d-md-flex mt-5 align-center justify-center">
        <v-img
          class="logo"
          height="32"
          max-width="32"
          src="~@/assets/images/logo.png"
          alt=""
        />
        <h1 class="ml-2 text-h4 text-primary">HyVue CMS</h1>
      </div>
      <!-- 平台logo end -->
      <v-list
        density="compact"
        nav
        class="folderMenu"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <!-- Home1 start -->
        <v-list-group value="Home1">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-home"
              v-bind="props"
              append-icon=""
              title="Home"
              :to="'/'"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- Home1 end -->
        <!-- 案件管理 end -->
        <v-divider class="ma-1"></v-divider>

        <!-- Element start -->
        <v-list-group value="Element">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Element"
            >
            </v-list-item>
          </template>
          <v-list-item title="Grid System" value="Grid System" :to="'/system'">
          </v-list-item>

          <v-list-item title="From" value="From" :to="'/from'"> </v-list-item>
          <v-list-item title="Table" value="Table" :to="'/table'">
          </v-list-item>
          <v-list-item title="Card" value="Card" :to="'/card'"> </v-list-item>
          <v-list-item title="Chart" value="Chart" :to="'/chart'">
          </v-list-item>
        </v-list-group>
        <!-- Element end -->

        <!-- Element start -->
        <v-list-group value="Components">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Components"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Containment"
            value="Containment"
            :to="'/component/containment'"
          >
          </v-list-item>
          <v-list-item
            title="Controls"
            value="Controls"
            :to="'/component/controls'"
          >
          </v-list-item>
          <v-list-item
            title="Feedback"
            value="Feedback"
            :to="'/component/feedback'"
          >
          </v-list-item>
          <v-list-item
            title="Image & Icon"
            value="imageIcon"
            :to="'/component/imageIcon'"
          >
          </v-list-item>
          <v-list-item
            title="Navigation"
            value="Navigation"
            :to="'/component/navigation'"
          >
          </v-list-item>
          <v-list-item
            title="Pickers"
            value="Pickers"
            :to="'/component/pickers'"
          >
          </v-list-item>
          <v-list-item
            title="Selection"
            value="Selection"
            :to="'/component/selection'"
          >
          </v-list-item>
        </v-list-group>
        <!-- Element end -->
        <!-- Basic Layout start -->
        <v-list-group value="Basic Layout">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-layers"
              v-bind="props"
              title="Basic Layout"
            >
            </v-list-item>
          </template>
          <v-list-item title="Widget" value="Widget" :to="'/widget'">
          </v-list-item>
          <v-list-item title="新增資料" value="addNews" :to="'/addNews'">
          </v-list-item>
          <v-list-item
            title="多媒體資料庫"
            value="mediaPhoto"
            :to="'/mediaPhoto'"
          >
          </v-list-item>
        </v-list-group>
        <!-- Basic Layout end -->
        <v-divider class="ma-1"></v-divider>
        <!-- 登入頁面 start -->
        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-login"
              v-bind="props"
              append-icon=""
              title="login"
              :to="'/login'"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 登入頁面 end -->
      </v-list>
      <!-- 使用者 登入視窗start -->
      <v-btn class="loginInfo" variant="text">
        <div class="icon">
          <span class="material-icons-round"> logout </span>
        </div>
        <ul class="">
          <li>LoginOut</li>
        </ul>
      </v-btn>
      <!-- 使用者 登入視窗end -->
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 sideBarBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!--  navigation-drawer end-->
    </v-navigation-drawer>

    <v-app-bar class="navigationBar">
      <!-- <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon> -->
      <Navigation />
    </v-app-bar>
    <v-main>
      <pageView />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/functionNavigation.vue";
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "0",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    Navigation,
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 80);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
