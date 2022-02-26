import { useSelector } from "react-redux";
import { HeadingSecundary } from "../../layouts/HeadingSecundary";
import { SkillCards } from "./SkillCards";

interface State {
  Skill: any;
}

export const SkillComponent = () => {
  const { skills } = useSelector((state: State) => state.Skill);
  return (
    <>
      <HeadingSecundary
        title="mis habilidades"
        btnTitle="Agregar"
        btnClassName="btn-1"
        // btnHandleclick={ OpenModal }
        btnIcon="plus-square"
      />
      <section className="skills">
        {skills.map((data: any, i:number) => (
            <SkillCards key={i} {...data} />
        ))}
      </section>
    </>
  );
};
