import * as stylex from "@stylexjs/stylex";
import { Title } from "../title";
import { useEffect, useState } from "react";

export { WindowManagerProvider, useWindowManager } from "./window-manager";

const styles = stylex.create({
  window: {
    position: "fixed",
    width: "50%",
    height: "50%",
    transform: "translate(-50%, -50%)",
  },
  windowHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "8px",
    paddingRight: "16px",
    paddingLeft: "8px",
  },
  windowBorderLayer: {
    position: "absolute",
    inset: "0",
    display: "flex",
    flexDirection: "row",
    height: "100%",
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
    width: "90%",
    height: "4%",
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
    padding: "8px",
    marginInline: "8px",
    marginTop: "8px",
    marginBottom: "8px",
    backgroundColor: "#2F2F2F",
    borderRadius: "10px",
  },
});

const closeButton = stylex.create({
  button: {
    width: "20px",
    height: "20px",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#2C2C2C",
  },
});

type WindowPosition = {
  x: number;
  y: number;
};

export const Window = ({
  isOpen,
  title,
  initialPosition,
  onClose,
  onFocus,
  children,
}: {
  isOpen: boolean;
  title: string;
  initialPosition: WindowPosition;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}) => {
  const [windowPosition, setWindowPosition] =
    useState<WindowPosition>(initialPosition);
  const [dragState, setDragState] = useState<WindowPosition | null>(null);

  useEffect(() => {
    if (dragState === null) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) =>
      setWindowPosition({
        x: event.clientX - dragState.x,
        y: event.clientY - dragState.y,
      });

    const handleMouseUp = () => setDragState(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragState]);

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    setDragState({
      x: event.clientX - windowPosition.x,
      y: event.clientY - windowPosition.y,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      {...stylex.props(styles.window)}
      style={{ top: windowPosition.y, left: windowPosition.x }}
      onMouseDown={onFocus}
    >
      <div {...stylex.props(styles.windowBorderLayer)}>
        <div {...stylex.props(styles.bottomBorder)} />
        <div {...stylex.props(styles.leftSide)}>
          <div {...stylex.props(styles.topBorder)} />
        </div>
        <div {...stylex.props(styles.rightSide)} />
      </div>
      <div {...stylex.props(styles.windowBackground)}>
        <header
          onMouseDown={handleMouseDown}
          {...stylex.props(styles.windowHeader)}
        >
          <Title title={title} />
          <button
            onClick={onClose}
            onMouseDown={(event) => event.stopPropagation()}
            {...stylex.props(closeButton.button)}
          />
        </header>
        <section {...stylex.props(styles.content)}>{children}</section>
      </div>
    </div>
  );
};
