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
        v-model:opened="opened"
        @update:opened="menuTarget"
      >
        <!-- 若要點擊選單都展開，移除「@update:opened="menuTarget"」 -->
        <!-- Home start -->
        <v-list-group value="Home">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-home"
              v-bind="props"
              append-icon=""
              title="Home"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- Home end -->
        <!-- 案件管理 end -->
        <v-divider class="ma-1"></v-divider>

        <!-- Components start -->
        <v-list-group value="Components">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Components"
            >
            </v-list-item>
          </template>
          <v-list-item title="Containment" :to="'/component/containment'">
          </v-list-item>
          <v-list-item title="Controls" :to="'/component/controls'">
          </v-list-item>
          <v-list-item title="Feedback" :to="'/component/feedback'">
          </v-list-item>
          <v-list-item title="Image & Icon" :to="'/component/imageIcon'">
          </v-list-item>
          <v-list-item title="Navigation" :to="'/component/navigation'">
          </v-list-item>
          <v-list-item title="Pickers" :to="'/component/pickers'">
          </v-list-item>
          <v-list-item title="Selection" :to="'/component/selection'">
          </v-list-item>
          <v-list-item title="Grid System" :to="'/component/system'">
          </v-list-item>
          <v-list-item title="From" :to="'/component/from'"> </v-list-item>
          <v-list-item title="Table" :to="'/component/table'"> </v-list-item>
          <v-list-item title="Card" :to="'/component/card'"> </v-list-item>
          <v-list-item title="Chart" :to="'/component/chart'"> </v-list-item>
        </v-list-group>
        <!-- Components end -->
        <!-- Basic Layout start -->
        <v-list-group value="BasicLayout">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-layers"
              v-bind="props"
              title="Basic Layout"
            >
            </v-list-item>
          </template>
          <v-list-item title="Widget" :to="'/widget'"> </v-list-item>
          <v-list-item title="AddNews" :to="'/addNews'"> </v-list-item>
          <v-list-item title="MediaPhoto" :to="'/mediaPhoto'"> </v-list-item>
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
      <!-- style="display: none" -->
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 sideBarBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!--  navigation-drawer end-->
    </v-navigation-drawer>

    <v-app-bar class="navigationBar">
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 sideBarBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
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
    // open: ["Home1"],
    theme: "default",
    themeDark: "false",
    opened: ["Home"],
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
