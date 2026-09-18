import * as stylex from "@stylexjs/stylex";
import { InfoPills } from "./info-pills";
import { WindowManagerProvider } from "../ui-components";

const styles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100dvh",
    color: "#77e9ff",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    alignSelf: "flex-end",
    fontFamily: "KH Data",
    fontSize: "1.5rem",
    color: "#028084",
  },
  frame: {
    width: "min(80vw, 70rem)",
    height: "min(70vh, 50rem)",
    borderColor: "#028084",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 24,
  },
});

const scanline = stylex.keyframes({
  "0%": {
    bottom: "100%",
  },
  "80%": {
    bottom: "100%",
  },
  "100%": {
    bottom: "0%",
  },
});

const crtStyle = stylex.create({
  crt: {
    position: "relative",
    "::before": {
      content: '" "',
      position: "absolute",
      inset: 0,
      zIndex: 2,
      display: "block",
      pointerEvents: "none",
      backgroundImage:
        "linear-gradient(to bottom, rgba(18, 16, 16, 0) 70%, rgba(0, 0, 0, 0.25) 70%)",
      backgroundSize: "100% 4px",
    },
  },
  scanline: {
    position: "absolute",
    bottom: "100%",
    zIndex: 8,
    width: "100%",
    height: 100,
    opacity: 0.1,
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 10%, rgba(0, 0, 0, 0.1) 100%)",
    animationName: scanline,
    animationDuration: "20s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

export const Portfolio = () => {
  return (
    <main {...stylex.props(styles.root, crtStyle.crt)}>
      <div {...stylex.props(crtStyle.scanline)} />
      <div {...stylex.props(styles.wrapper)}>
        <p {...stylex.props(styles.title)}>Samet Halili - Software Developer</p>
        <div {...stylex.props(styles.frame)}>
          <WindowManagerProvider>
            <InfoPills />
          </WindowManagerProvider>
        </div>
      </div>
    </main>
  );
};
