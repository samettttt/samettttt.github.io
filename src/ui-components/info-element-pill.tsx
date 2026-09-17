import type { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  borderLayer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    height: "100%",
    inset: "0",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #EBEBEB 0%, #ABABAB 60%, #9F9F9F 100%)",
    borderTopLeftRadius: "40px",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "80px",
    borderBottomRightRadius: "80px",
  },
  background: {
    position: "absolute",
    inset: "6px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #EBEBEB 0%, #ABABAB 60%, #9F9F9F 100%)",
    borderTopLeftRadius: "28px",
    borderBottomLeftRadius: "28px",
    borderTopRightRadius: "68px",
    borderBottomRightRadius: "68px",
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    margin: "6px",
    paddingInline: "10px",
    paddingBlock: "5px",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "100%",
  },
  topBorder: {
    height: "80%",
  },
  bottomBorder: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: "20%",
    width: "90%",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.22) 80%, transparent 100%)",
  },
  rightSide: {
    alignSelf: "flex-end",
    width: "10%",
    height: "80%",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.22) 80%, transparent 100%)",
  },
});

const titleStyles = stylex.create({
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    fontFamily: "KH Data",
    fontSize: "1.5rem",
    lineHeight: 1,
    color: "#2C2C2C",
  },
  orb: {
    width: "24px",
    height: "24px",
    backgroundColor: "#2C2C2C",
    borderRadius: "50%",
  },
});

const descriptionStyles = stylex.create({
  description: {
    fontFamily: "KH Data",
    fontSize: "1.5rem",
    lineHeight: 1,
    color: "#7C7A7A",
    paddingLeft: "32px",
  },
});

export const InfoElementPillDescription = ({
  description,
}: {
  description?: string;
}) => <div {...stylex.props(descriptionStyles.description)}>{description}</div>;

const InfoElementPillTitle = ({ title }: { title?: string }) => (
  <div {...stylex.props(titleStyles.title)}>
    <div {...stylex.props(titleStyles.orb)} />
    {title}
  </div>
);

export const InfoElementPill = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => (
  <div {...stylex.props(styles.root)}>
    <div {...stylex.props(styles.borderLayer)}>
      <div {...stylex.props(styles.bottomBorder)} />
      <div {...stylex.props(styles.leftSide)}>
        <div {...stylex.props(styles.topBorder)} />
      </div>
      <div {...stylex.props(styles.rightSide)} />
    </div>
    <div {...stylex.props(styles.background)} />
    <div {...stylex.props(styles.content)}>
      <InfoElementPillTitle title={title} />
      {children}
    </div>
  </div>
);
