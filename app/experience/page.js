import ExperienceItem from "../components/ExperienceItem";
import Heading from "../components/Heading";
import { educationExperience } from "../data/data";

const ExperiencePage = () => {
  return (
    <div className="text-selection">
      <Heading heading={"Work Experience"} />
      <div>
        404 NOT FOUND!
      </div>

      <div className="my-4">&nbsp;</div>

      <Heading heading={"Education"} />
      <ol className="timeline flex-col">
        {educationExperience.map((eduEx) => (
          <ExperienceItem experience={eduEx} onlyTimeline={false} key={eduEx.key} />
        ))}
      </ol>
    </div>
  );
};

export default ExperiencePage;
