import { HeadingPrimary } from "../../layouts/HeadingPrimary"
import { ServiceComponent } from "./ServiceComponent"

export const ServicePages = () => {
    return (
        <>
            <HeadingPrimary
                titleP='mis'
                titleS='servicios'
            />
            <ServiceComponent/>
        </>
    )
}
