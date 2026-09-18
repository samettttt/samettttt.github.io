import { useWindowManager, Window } from "../../ui-components";

export const AboutMeWindow = () => {
  const { stack, bringToFront, closeWindow } = useWindowManager();

  return (
    <Window
      isOpen={stack.includes("about-me")}
      onClose={() => closeWindow("about-me")}
      onFocus={() => bringToFront("about-me")}
      title="ABOUT ME"
      initialPosition={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }}
      initialWidth={500}
      initialHeight={500}
    >
      <div>
        <h1>About Me</h1>
      </div>
    </Window>
  );
};
