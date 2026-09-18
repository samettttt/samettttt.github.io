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

export const Portfolio = () => {
  return (
    <main {...stylex.props(styles.root)}>
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
