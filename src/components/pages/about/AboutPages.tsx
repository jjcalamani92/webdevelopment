import { HeadingPrimary } from "../../layouts/HeadingPrimary"
import { EducationComponent } from "../education/EducationComponent"
import { SkillComponent } from "../skill/SkillComponent"
import { AboutComponent } from "./AboutComponent"

export const AboutPages = () => {
    return (
        <>
            <HeadingPrimary
                titleP='sobre'
                titleS='mi'
            />
            <AboutComponent />
            <SkillComponent />
            <EducationComponent />
        </>
    )
}
