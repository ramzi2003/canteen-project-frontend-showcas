
//  base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { dark, white, info } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      color: info.main,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: white.main,
      },

      "&.Mui-completed": {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[3]} !important`,
      borderColor: "currentColor",
    },
  },
};
