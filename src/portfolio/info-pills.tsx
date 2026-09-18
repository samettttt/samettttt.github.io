import * as stylex from "@stylexjs/stylex";
import {
  InfoElementPill,
  InfoElementPillDescription,
  useWindowManager,
} from "../ui-components";
import { AboutMeWindow } from "./about-me";
import { ExperienceWindow } from "./experience";
import { ProjectsWindow } from "./projects";

const styles = stylex.create({
  infoPills: {
    position: "relative",
    top: "-25px",
    right: 0,
    bottom: "-10px",
    left: "-40px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "30%",
  },
});

export const InfoPills = () => {
  const { stack, bringToFront } = useWindowManager();

  const windows = [
    {
      id: "about-me" as const,
      window: <AboutMeWindow key="about-me" />,
    },
    {
      id: "experience" as const,
      window: <ExperienceWindow key="experience" />,
    },
    {
      id: "projects" as const,
      window: <ProjectsWindow key="projects" />,
    },
  ];

  return (
    <>
      <div {...stylex.props(styles.infoPills)}>
        <InfoElementPill title="ABOUT ME">
          <InfoElementPillDescription
            description="CLICK HERE"
            onClick={() => bringToFront("about-me")}
          />
        </InfoElementPill>
        <InfoElementPill title="EXPERIENCE">
          <InfoElementPillDescription
            description="VIEW EXPERIENCE"
            onClick={() => bringToFront("experience")}
          />
        </InfoElementPill>
        <InfoElementPill title="PROJECTS">
          <InfoElementPillDescription
            description="VIEW PROJECTS"
            onClick={() => bringToFront("projects")}
          />
        </InfoElementPill>
        <InfoElementPill title="CONTACT">
          <InfoElementPillDescription description="SEND MESSAGE" />
        </InfoElementPill>
      </div>
      {windows
        .toSorted((a, b) => stack.indexOf(a.id) - stack.indexOf(b.id))
        .map(({ window }) => window)}
    </>
  );
};
