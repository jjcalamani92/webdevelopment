
import { HeadingSecundary } from "../../layouts/HeadingSecundary"
import { AcademyCards } from "../academy/AcademyCards"
import { EducationCards } from "./EducationCards"


export const EducationComponent = () => {

    return (
        <>
            <HeadingSecundary
                title='mi educación'
                btnTitle='Agregar'
                btnClassName='btn-1'
                btnIcon='plus-square'
            />
            <EducationCards/>

            <AcademyCards/>
        </>
    )
}
