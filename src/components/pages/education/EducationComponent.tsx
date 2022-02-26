
import { useSelector } from "react-redux";
import { HeadingSecundary } from "../../layouts/HeadingSecundary"
import { AcademyCards } from "../academy/AcademyCards"
import { EducationCards } from "./EducationCards"

interface State {
    Course: any
    Academy: any
}


export const EducationComponent = () => {
    const { courses } = useSelector((state: State) => state.Course);
    const { academys } = useSelector((state: State) => state.Academy);
    return (
        <>
            <HeadingSecundary
                title='mi educación'
                btnTitle='Agregar'
                btnClassName='btn-1'
                btnIcon='plus-square'
            />
            <section className="education">
            {courses.map((data: any, i:number) => (
                <EducationCards key={i} {...data} />
            ))}
            </section>
            
            <section className="academys">
            {academys.map((data: any, i:number) => (
                <AcademyCards key={i} {...data} />
            ))}
            </section>
        </>
    )
}
