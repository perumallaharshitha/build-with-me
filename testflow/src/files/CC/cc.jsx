import React from 'react';
import './cc.css';
import debate from '../../assets/actvt/debate.jpg';
import fancyDress from '../../assets/actvt/fancydress.png';
import jam from '../../assets/actvt/jam.jpg';
import uif from '../../assets/actvt/uif2024.jpeg';
import nec from '../../assets/actvt/nec.jpeg';
import traditional from '../../assets/actvt/traditional.jpg';

const activities = [
  {
    title: "UIF Meetup 2024 – Netherlands",
    description: "Attended the University Innovation Fellows meetup at University of Twente, Netherlands.",
    image: uif,
  },
  {
    title: "NEC – Business & Entrepreneurship",
    description: "Participated in NEC to learn business and entrepreneurial skills.",
    image: nec,
  },
  {
    title: "Indian Traditional Competition",
    description: "Won 1st prize in Indian traditional competition. (2K participants)",
    image: traditional,
  },
  {
    title: "Debate Competition",
    description: "Won 1st prize in a debate competition. (500 participants)",
    image: debate,
  },
  {
    title: "Fancy Dress – Business Woman",
    description: "Won 1st prize for dressing as a business woman.",
    image: fancyDress,
  },
  {
    title: "Just A Minute (JAM)",
    description: "Won 1st prize in Just A Minute event. (1K participants)",
    image: jam,
  },
];

const TimelineCard = ({ title, description, image, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`timeline-item `}>
      <div className="timeline-content">
        <img src={image} alt={title} />
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const CoCurricularTimeline = () => {
  return (
    <>
      <h2 className="timeline-title">My Activities</h2>
      <div className="timeline">
        {activities.map((activity, index) => (
          <TimelineCard key={index} {...activity} index={index} />
        ))}
      </div>
    </>
  );
};


export default CoCurricularTimeline;
