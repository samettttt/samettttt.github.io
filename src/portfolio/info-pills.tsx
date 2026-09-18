import * as stylex from "@stylexjs/stylex";
import {
  InfoElementPill,
  InfoElementPillDescription,
  Window,
} from "../ui-components";
import { useState } from "react";

const styles = stylex.create({
  infoPills: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "16px",
    top: "-25px",
    left: "-40px",
    right: 0,
    bottom: "-10px",
    width: "30%",
  },
});

export const InfoPills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div {...stylex.props(styles.infoPills)}>
        <InfoElementPill title="ABOUT ME">
          <InfoElementPillDescription
            description="CLICK HERE"
            onClick={() => setIsModalOpen(true)}
          />
        </InfoElementPill>
        <InfoElementPill title="EXPERIENCE">
          <InfoElementPillDescription description="VIEW EXPERIENCE" />
        </InfoElementPill>
        <InfoElementPill title="PROJECTS">
          <InfoElementPillDescription description="VIEW PROJECTS" />
        </InfoElementPill>
        <InfoElementPill title="CONTACT">
          <InfoElementPillDescription description="SEND MESSAGE" />
        </InfoElementPill>
      </div>
      <Window
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="ABOUT ME"
      >
        <div>
          <h1>Modal</h1>
        </div>
      </Window>
    </>
  );
};
