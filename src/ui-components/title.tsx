import * as stylex from "@stylexjs/stylex";

const titleStyles = stylex.create({
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    fontFamily: "KH Data",
    fontSize: "32px",
    lineHeight: 1,
    color: "#2C2C2C",
  },
  orb: {
    width: "30px",
    height: "30px",
    backgroundColor: "#2C2C2C",
    borderRadius: "50%",
  },
});

export const Title = ({ title }: { title?: string }) => (
  <div {...stylex.props(titleStyles.title)}>
    <div {...stylex.props(titleStyles.orb)} />
    {title}
  </div>
);
