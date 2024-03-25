const ExperienceItem = ({ experience, onlyTimeline }) => {
  const isEducationExperience = (edEx) => {
    return edEx.type === "education";
  };

  const isWorkExperience = (workEx) => {
    return workEx.type === "work";
  };

  const renderWorkExperience = () => {
    if (isWorkExperience(experience)) {
      let response = experience.description.map((descItem, index) => (
        <p key={index} className="mb-2">
          {descItem}
        </p>
      ));
      return response;
    }
  };

  const renderEducationExperience = () => {
    if (isEducationExperience(experience)) {
      const response = <p className="">{experience.degree}</p>;
      return response;
    }
  };

  return (
    <li className={`mb-6 ml-4 flex flex-col items-start`}>
      <div
        className={`absolute w-3 h-3 rounded-full ${
          onlyTimeline ? "mt-4" : "mt-2"
        } left-[-1.4em] border border-gray-900 bg-gray-700`}
      ></div>
      <h3 className="text-lg font-semibold text-neutral-200">
        {isWorkExperience(experience)
          ? experience.company
          : experience.institution}
        <span className="ml-2 italic text-base font-normal text-neutral-400">
          {isWorkExperience(experience) && experience.designation}
        </span>
      </h3>
      <time className="text-sm font-normal leading-none text-neutral-600">
        {isWorkExperience(experience)
          ? experience.duration
          : experience.graduation}
      </time>
      {!onlyTimeline && (
        <div className="mb-4 text-base font-normal text-neutral-500">
          {experience.type === "work"
            ? renderWorkExperience()
            : renderEducationExperience()}
        </div>
      )}
    </li>
  );
};

export default ExperienceItem;
