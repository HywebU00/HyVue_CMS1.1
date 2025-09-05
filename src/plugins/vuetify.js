// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
// import { md3 } from "vuetify/blueprints";
// import { VDataTableServer } from "vuetify/labs/VDataTable";
export default createVuetify({
  // blueprint: md3,藍圖樣式
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          // primary 設定
          primary: "#014d92", //$primary30
          primary50: "#0463b8", //$primary50
          primary70: "#f6fbff", //$primary70
          //secondary 設定
          secondary: "#2d62b3", //secondary40
          "secondary-lighten-0": "#0055A0",
          secondary60: "#057bb7", //secondary60
          secondary80: "#80cbd7", //secondary80
          secondary100: "#ebf0f9", //secondary100
          //Neutral 設定
          neutral: "#ffffff", //Neutral100
          neutral80: "#F8F8F8", //Neutral80
          neutral70: "#F1F1F1", //Neutral70
          neutral60: "#DEE0E3", //Neutral60
          neutral40: "#97A3B6", //Neutral40
          neutral30: "#69707D", //Neutral30
          neutral20: "#555555", //Neutral20
          neutral10: "#333333", //Neutral10
          //Success 設定
          success: "#00754B", //Green30
          "success-lighten-1": "#EEF8E4", //Green70
          //Info 設定
          info: "#00529B", //blue30
          "info-lighten-1": "#E7F3FF", //blue70
          //warning 設定
          warning: "#C23E00", //warning30
          "warning-lighten-1": "#FAECE6", //warning70
          //Error 設定
          error: "#C40000", //red30
          "error-lighten-1": "#FFEDF1", //red70
          light: "#36e79e",
          //thead
          thead: "#057bb7", //secondary60,
        },
      },
      green: {
        dark: false,
        colors: {
          // primary 設定
          primary: "#1f7848", //$primary30
          primary50: "#44aa55", //$primary50
          primary70: "#e5f7eb", //$primary70
          //secondary 設定
          secondary: "#1ab64c", //secondary40
          secondary60: "#33a59c", //secondary60
          secondary80: "#86d9bc", //secondary80
          secondary100: "#f2fbf6", //secondary100
          //Neutral 設定
          neutral: "#ffffff", //Neutral100
          neutral80: "#F8F8F8", //Neutral80
          neutral70: "#F1F1F1", //Neutral70
          neutral60: "#DEE0E3", //Neutral60
          neutral40: "#97A3B6", //Neutral40
          neutral30: "#69707D", //Neutral30
          neutral20: "#555555", //Neutral20
          neutral10: "#333333", //Neutral10
          //Success 設定
          success: "#00754B", //Green30
          "success-lighten-1": "#EEF8E4", //Green70
          //Info 設定
          info: "#00529B", //blue30
          "info-lighten-1": "#E7F3FF", //blue70
          //warning 設定
          warning: "#C23E00", //warning30
          "warning-lighten-1": "#FAECE6", //warning70
          //Error 設定
          error: "#C40000", //red30
          "error-lighten-1": "#FFEDF1", //red70
          light: "#86d9bc",
          //thead
          thead: "#33a59c", //secondary60
        },
      },
      purple: {
        dark: false,
        colors: {
          // primary 設定
          primary: "#8e0d70", //$primary30
          primary50: "#cf3eab", //$primary50
          primary70: "#f8ebf6", //$primary70
          //secondary 設定
          secondary: "#911a76", //secondary40
          secondary60: "#ce3d86", //secondary60
          secondary80: "#dd6081", //secondary80
          secondary100: "#fff2fa", //secondary100
          //Neutral 設定
          neutral: "#ffffff", //Neutral100
          neutral80: "#F8F8F8", //Neutral80
          neutral70: "#F1F1F1", //Neutral70
          neutral60: "#DEE0E3", //Neutral60
          neutral40: "#97A3B6", //Neutral40
          neutral30: "#69707D", //Neutral30
          neutral20: "#555555", //Neutral20
          neutral10: "#333333", //Neutral10
          //Success 設定
          success: "#00754B", //Green30
          "success-lighten-1": "#EEF8E4", //Green70
          //Info 設定
          info: "#00529B", //blue30
          "info-lighten-1": "#E7F3FF", //blue70
          //warning 設定
          warning: "#C23E00", //warning30
          "warning-lighten-1": "#FAECE6", //warning70
          //Error 設定
          error: "#C40000", //red30
          "error-lighten-1": "#FFEDF1", //red70
          light: "#dd6081",
          //thead
          thead: "#ce3d86", //secondary60
        },
      },
      red: {
        dark: false,
        colors: {
          // primary 設定
          primary: "#91404A", //$primary30
          primary50: "#b6636E", //$primary50
          primary70: "#f6e8ed", //$primary70
          //secondary 設定
          secondary: "#ad3b5f", //secondary40
          secondary60: "#c88490", //secondary60
          secondary80: "#e6c9cc", //secondary80
          secondary100: "#ebf0f9", //secondary100
          //Neutral 設定
          neutral: "#ffffff", //Neutral100
          neutral80: "#F8F8F8", //Neutral80
          neutral70: "#F1F1F1", //Neutral70
          neutral60: "#DEE0E3", //Neutral60
          neutral40: "#97A3B6", //Neutral40
          neutral30: "#69707D", //Neutral30
          neutral20: "#555555", //Neutral20
          neutral10: "#333333", //Neutral10
          //Success 設定
          success: "#00754B", //Green30
          "success-lighten-1": "#EEF8E4", //Green70
          //Info 設定
          info: "#00529B", //blue30
          "info-lighten-1": "#E7F3FF", //blue70
          //warning 設定
          warning: "#C23E00", //warning30
          "warning-lighten-1": "#FAECE6", //warning70
          //Error 設定
          error: "#C40000", //red30
          "error-lighten-1": "#FFEDF1", //red70
          light: "#e6c9cc",
          //thead
          thead: "#c88490", //secondary60,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#fefefe",
          secondary: "#695f5f",
          light: "#33a59c",
          thead: "#555555",
        },
      },
    },
  },
  components: {
    // VDataTableServer,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  defaults: {
    VAlert: {
      rounded: "sm", // 修改全域圓角
    },
    VChip: {
      rounded: "sm", // 修改全域圓角
    },
    VSnackbar: {
      rounded: "sm", // 修改全域圓角
      minHeight: "72px",
    },
    VTabs: {
      height: "72px",
    },

    VAvatar: {
      size: "44px",
    },
    VTextField: {
      rounded: "sm",
    },
    VBtn: {
      rounded: "sm",
    },
  },
});
