import { skills } from "../../../data/skill"

export const SkillCards = () => {
    return (
        <section className="skills">
            <div className="box-container">   
                {
                    skills.map( (skill, i) => (
                        <div className="box" key = { i }>
                            <img src={ skill.image } alt={ skill.title }/>
                            <h3>{ skill.title }</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
