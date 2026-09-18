import * as stylex from "@stylexjs/stylex";
import { Title } from "../title";

const styles = stylex.create({
  window: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  windowContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
  },
  windowHeader: {
    display: "flex",
    paddingTop: "8px",
    paddingLeft: "8px",
    paddingRight: "16px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  windowBorderLayer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    height: "100%",
    inset: "0",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #FAF2F2 0%, #D7D7D7 30%, #ABABAB 80%, #9F9F9F 100%)",
    borderRadius: "24px",
    boxShadow: "3px 6px 3px rgb(0 0 0 / 50%)",
  },
  windowBackground: {
    position: "absolute",
    inset: "6px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, #FAF2F2 0%, #D7D7D7 30%, #ABABAB 70%, #9F9F9F 100%)",
    borderRadius: "20px",
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
    height: "4%",
    width: "90%",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.22) 80%, transparent 100%)",
  },
  rightSide: {
    alignSelf: "flex-end",
    width: "10%",
    height: "99%",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.22) 80%, transparent 100%)",
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#2F2F2F",
    marginTop: "8px",
    marginBottom: "8px",
    marginInline: "8px",
    padding: "8px",
    borderRadius: "10px",
  },
});

const closeButton = stylex.create({
  button: {
    backgroundColor: "#2C2C2C",
    width: "20px",
    height: "20px",
    padding: "10px",
    cursor: "pointer",
  },
});

export const Window = ({
  isOpen,
  onClose,
  children,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div {...stylex.props(styles.window)}>
      <div {...stylex.props(styles.windowContent)}>
        <div {...stylex.props(styles.windowBorderLayer)}>
          <div {...stylex.props(styles.bottomBorder)} />
          <div {...stylex.props(styles.leftSide)}>
            <div {...stylex.props(styles.topBorder)} />
          </div>
          <div {...stylex.props(styles.rightSide)} />
        </div>
        <div {...stylex.props(styles.windowBackground)}>
          <div {...stylex.props(styles.windowHeader)}>
            <Title title={title} />
            <button onClick={onClose} {...stylex.props(closeButton.button)} />
          </div>
          <div {...stylex.props(styles.content)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
