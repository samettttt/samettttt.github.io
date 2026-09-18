import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type WindowId = "about-me" | "experience" | "projects" | "contact";

type WindowManagerContext = {
  stack: Array<WindowId>;
  bringToFront: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
};

const WindowManagerContext = createContext<WindowManagerContext>({
  stack: [],
  bringToFront: () => {},
  closeWindow: () => {},
});

export const WindowManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [stack, setStack] = useState<Array<WindowId>>([]);

  const bringToFront = useCallback(
    (id: WindowId) =>
      setStack((current) => [...current.filter((item) => item !== id), id]),
    [setStack],
  );
  const closeWindow = useCallback(
    (id: WindowId) =>
      setStack((current) => current.filter((item) => item !== id)),
    [setStack],
  );

  const value = useMemo(
    () => ({ stack, bringToFront, closeWindow }),
    [stack, bringToFront, closeWindow],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);

  if (!context) {
    throw new Error(
      "useWindowManager must be used within a WindowManagerProvider",
    );
  }

  return context;
};
