import * as stylex from "@stylexjs/stylex";
import { InfoElementPill, InfoElementPillDescription } from "../ui-components";

const styles = stylex.create({
  infoPills: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "8px",
    top: "-25px",
    left: "-40px",
    right: 0,
    bottom: "-10px",
    width: "30%",
  },
});

export const InfoPills = () => (
  <div {...stylex.props(styles.infoPills)}>
    <InfoElementPill title="ABOUT ME">
      <InfoElementPillDescription description="CLICK HERE" />
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
);
