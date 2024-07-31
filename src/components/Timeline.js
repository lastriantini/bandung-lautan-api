import React from 'react';
import { sections } from '../data';
import TimelineLeft from './TimelineCard/TimelineLeft';
import TimelineRight from './TimelineCard/TimelineRight';
import '../index.css';

function Timeline() {
  return (
    <>
      {sections
        .filter((section) => section.name === "timeline-left" || section.name === "timeline-right")
        .map((section, index) => (
          <React.Fragment key={index}>
            {section.id === 2 && (
              <TimelineRight
                id={section.id}
                title={section.title}
                description={section.description}
                img={section.img}
              />
            )}
            {section.id === 3 && (
              <TimelineLeft
                id={section.id}
                title={section.title}
                description={section.description}
                img={section.img}
              />
            )}
            {section.id === 4 && (
              <TimelineRight
                id={section.id}
                title={section.title}
                description={section.description}
                img={section.img}
              />
            )}
            {section.id === 5 && (
              <TimelineLeft
                id={section.id}
                title={section.title}
                description={section.description}
                img={section.img}
              />
            )}
          </React.Fragment>
        ))}
    </>
  );
}

export default Timeline;
