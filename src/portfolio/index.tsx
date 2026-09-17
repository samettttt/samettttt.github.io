import * as stylex from "@stylexjs/stylex";
import { InfoPills } from "./info-pills";

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
    fontFamily: "KH Data",
    alignSelf: "flex-end",
    fontSize: "1.5rem",
    color: "#028084",
  },
  frame: {
    width: "min(80vw, 70rem)",
    height: "min(70vh, 50rem)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#028084",
    borderRadius: 24,
  },
  infoPills: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "8px",
    top: "-25px",
    left: "-40px",
    right: 0,
    bottom: "-10px",
    width: "30%",
  },
});

export const Portfolio = () => {
  return (
    <main {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.wrapper)}>
        <p {...stylex.props(styles.title)}>Samet Halili - Software Developer</p>
        <div {...stylex.props(styles.frame)}>
          <InfoPills />
        </div>
      </div>
    </main>
  );
};
