import { useWindowManager, Window } from "../../ui-components";

export const ExperienceWindow = () => {
  const { stack, bringToFront, closeWindow } = useWindowManager();

  return (
    <Window
      isOpen={stack.includes("experience")}
      onClose={() => closeWindow("experience")}
      onFocus={() => bringToFront("experience")}
      title="EXPERIENCE"
      initialPosition={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }}
      initialWidth={500}
      initialHeight={500}
    >
      <div>
        <h1>Experience</h1>
      </div>
    </Window>
  );
};
