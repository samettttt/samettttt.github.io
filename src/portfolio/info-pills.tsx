import * as stylex from "@stylexjs/stylex";
import { InfoElementPill, InfoElementPillDescription } from "../ui-components";
import { useState } from "react";
import { AboutMeWindow } from "./about-me";

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
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(true);
  return (
    <>
      <div {...stylex.props(styles.infoPills)}>
        <InfoElementPill title="ABOUT ME">
          <InfoElementPillDescription
            description="CLICK HERE"
            onClick={() => setIsAboutMeOpen(true)}
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
      <AboutMeWindow
        isOpen={isAboutMeOpen}
        onClose={() => setIsAboutMeOpen(false)}
      />
    </>
  );
};
