import type { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { Title } from "./title";

const styles = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  borderLayer: {
    position: "absolute",
    inset: "0",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #FAF2F2 0%, #D7D7D7 30%, #ABABAB 70%, #9F9F9F 100%)",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "80px",
    borderBottomRightRadius: "80px",
    borderBottomLeftRadius: "40px",
    boxShadow: "3px 6px 3px rgb(0 0 0 / 50%)",
  },
  background: {
    position: "absolute",
    inset: "6px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #FAF2F2 0%, #D7D7D7 30%, #ABABAB 70%, #9F9F9F 100%)",
    borderTopLeftRadius: "28px",
    borderTopRightRadius: "68px",
    borderBottomRightRadius: "68px",
    borderBottomLeftRadius: "28px",
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingBlock: "5px",
    paddingInline: "10px",
    margin: "6px",
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
    width: "90%",
    height: "20%",
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

const descriptionStyles = stylex.create({
  description: {
    paddingLeft: "38px",
    fontFamily: "KH Data",
    fontSize: "32px",
    lineHeight: 1,
    color: {
      default: "#7C7A7A",
      ":hover": "#525151",
    },
    cursor: {
      default: null,
      ":hover": "pointer",
    },
  },
});

export const InfoElementPillDescription = ({
  description,
  onClick,
}: {
  description?: string;
  onClick?: () => void;
}) => (
  <div {...stylex.props(descriptionStyles.description)} onClick={onClick}>
    {description}
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
      <Title title={title} />
      {children}
    </div>
  </div>
);
