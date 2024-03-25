import { skills, profileDescription } from "./data/data";
import SkillItem from "./components/SkillItem";
import RenderImage from "./components/RenderImage";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <main>
      <div>
        <Heading heading="Mishan" />
        <section>
          <p className="text-self">{profileDescription[0]}</p>
          <RenderImage />
          <p className="text-self">{profileDescription[1]}</p>
          <div className="text-self">{profileDescription[2]}</div>
          <div className="text-self">{profileDescription[3]}</div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <SkillItem skillItem={skill} key={skill.key} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
