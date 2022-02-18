import { HeadingSecundary } from "../../layouts/HeadingSecundary"
import { SkillCards } from "./SkillCards"

export const SkillComponent = () => {
    return (
        <>
            <HeadingSecundary
                title = 'mis habilidades'
                btnTitle = 'Agregar'
                btnClassName = 'btn-1'
                // btnHandleclick={ OpenModal }
                btnIcon='plus-square'
            />
            <SkillCards/>
        </>
    )
}
