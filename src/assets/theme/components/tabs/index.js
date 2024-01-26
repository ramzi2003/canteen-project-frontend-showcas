
//  base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

//  helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey, info, transparent } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

export default {
  styleOverrides: {
    root: {
      minWidth: "fit-content !important",
      position: "relative",
      background: transparent.main,
      borderRadius: borderRadius.md,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: info.main,
      transition: "all 500ms ease",
    },
  },
};
