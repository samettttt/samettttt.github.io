import { Window } from "../../ui-components";

export const AboutMeWindow = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Window
      isOpen={isOpen}
      onClose={onClose}
      title="ABOUT ME"
      initialPosition={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }}
    >
      <div>
        <h1>About Me</h1>
      </div>
    </Window>
  );
};
