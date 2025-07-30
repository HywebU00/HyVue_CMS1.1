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
          "primary-lighten-1": "#0463b8", //$primary50
          "primary-lighten-2": "#f6fbff", //$primary70
          //secondary 設定
          secondary: "#2d62b3", //secondary40
          "secondary-lighten-1": "#057bb7", //secondary60
          "secondary-lighten-2": "#80cbd7", //secondary80
          "secondary-lighten-3": "#ebf0f9", //secondary100
          //Neutral 設定
          neutral: "#ffffff", //Neutral100
          "neutral-darken-1": "#F8F8F8", //Neutral80
          "neutral-darken-2": "#F1F1F1", //Neutral70
          "neutral-darken-3": "#DEE0E3", //Neutral60
          "neutral-darken-4": "#97A3B6", //Neutral40
          "neutral-darken-5": "#69707D", //Neutral30
          "neutral-darken-6": "#555555", //Neutral20
          "neutral-darken-7": "#333333", //Neutral10
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
        },
      },
      color1: {
        dark: false,
        colors: {
          primary: "#1e484a",
          secondary: "#1f6053",
          loginColor: "#1e484a",
          light: "#36e79e",
          navText: "#1e484a",
          thead: "#dae0db",
        },
      },
      color3: {
        dark: false,
        colors: {
          primary: "#103d5c",
          secondary: "#0786b2",
          loginColor: "#103d5c",
          light: "#00f0ff",
          navText: "#103d5c",
          thead: "#dadfe0",
        },
      },
      color2: {
        dark: false,
        colors: {
          primary: "#4e0c30",
          secondary: "#852648",
          loginColor: "#4e0c30",
          light: "#ff378c",
          navText: "#4e0c30",
          thead: "#e0dadd",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#fefefe",
          loginColor: "#000",
          secondary: "#695f5f",
          light: "#ff378c",
          thead: "#525252",
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
    // VStepper: {
    //   stepperItemAvatarFontSize: "32px",
    // },
  },
});
