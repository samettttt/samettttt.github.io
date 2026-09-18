import { useWindowManager, Window } from "../../ui-components";

export const ProjectsWindow = () => {
  const { stack, bringToFront, closeWindow } = useWindowManager();

  return (
    <Window
      isOpen={stack.includes("projects")}
      onClose={() => closeWindow("projects")}
      onFocus={() => bringToFront("projects")}
      title="PROJECTS"
      initialPosition={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }}
    >
      <div>
        <h1>Projects</h1>
      </div>
    </Window>
  );
};
