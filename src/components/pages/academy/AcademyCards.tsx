import { academys } from "../../../data/academy"

export const AcademyCards = () => {
    return (
        <section className="academys">
            <div className="box-container">   
                {
                    academys.map( (skill, i) => (
                        <div className="box" key = { i }>
                            <img src={ skill.image } alt={ skill.academy }/>
                            <h3>{ skill.academy }</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
