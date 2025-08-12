<template>
  <div class="loginPage h-screen w-100 d-flex justify-center align-center">
    <div ref="loginCard" class="loginCard">
      <v-sheet elevation="5" rounded="md" class="mx-auto">
        <v-img
          :width="104"
          aspect-ratio="1/1"
          class="mx-auto logo"
          cover
          src="~@/assets/images/logo.png"
        ></v-img>
        <h2 class="title text-center">網站管理平台</h2>

        <v-form fast-fail>
          <v-text-field
            density="compact"
            messages="說明文字"
            single-line
            variant="outlined"
            label="請輸入帳號"
          >
            <template #append-inner>
              <span class="material-symbols-rounded"> key_vertical </span>
            </template>
          </v-text-field>
          <v-text-field
            label="請輸入密碼"
            single-line
            :type="visible ? 'text' : 'password'"
            density="compact"
            :messages="['說明文字']"
            variant="outlined"
            @click="visible = !visible"
          >
            <template #append-inner>
              <span v-if="visible" class="icon material-symbols-rounded">
                visibility
              </span>
              <span v-else class="icon material-symbols-rounded">
                visibility_off
              </span>
            </template>
          </v-text-field>
          <div class="d-flex align-center justify-center">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || '']"
              label="記住密碼"
              required
              hide-details=""
            ></v-checkbox>
            <v-btn variant="text">忘記密碼</v-btn>
          </div>
          <v-btn type="submit" block color="primary" class="loginBtn"
            >登入</v-btn
          >
        </v-form>
        <ul class="list text-center">
          <li>如有登入問題，請聯繫資訊科 王大明 分機123</li>
          <li>電子郵件：abc@gmail.com</li>
        </ul>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: () => ({
    visible: false,
    checkbox: false,
    theme: "",
    dark: false,
  }),

  methods: {
    cardAnimate() {
      const th = this.$refs.loginCard;
      gsap.fromTo(
        th,
        {
          y: 50,
          opacity: 0.5,
        },
        { y: 0, duration: 1, opacity: 1 }
      );
    },
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = "; expires=" + _date.toGMTString();
      } else {
        _expires = "";
      }
      document.cookie = name + "=" + value + _expires + "; path=/";
    },
    changeTheme(color) {
      const theme = this.$vuetify.theme;
      // 使用新 API 切換主題
      theme.change(color);
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },

    themeInit() {
      const savedTheme = this.readCookie("Theme");
      if (savedTheme == null) {
        this.theme = "default";
        this.themeDark = false;
      } else {
        this.themeDark = true;
      }
      this.changeTheme(this.theme);
    },
  },
  mounted() {
    //this.cardAnimate();
    this.themeInit();
  },
};
</script>
