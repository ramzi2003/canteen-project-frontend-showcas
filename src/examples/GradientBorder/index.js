

//  components
import VuiBox from "components/VuiBox";
//  context

function GradientBorder(props) {
  const { backgroundImage, children, borderRadius, width, minWidth, padding, ...rest } = props;
  return (
    <VuiBox
      padding={padding ? padding : "2px"}
      minWidth={minWidth}
      height="fit-content"
      borderRadius={borderRadius}
      sx={{
        width: "fit-content",
        height: "fit-content",
        backgroundImage: backgroundImage
          ? backgroundImage
          : "radial-gradient(94.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      {...rest}
    >
      {children}
    </VuiBox>
  );
}

export default GradientBorder;
