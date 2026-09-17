import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    color: "white",
  },
});

export const Portfolio = () => {
  return <main {...stylex.props(styles.root)}>hello world</main>;
};
