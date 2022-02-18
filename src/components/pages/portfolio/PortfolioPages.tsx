import { HeadingPrimary } from '../../layouts/HeadingPrimary'
import { PortfolioComponents } from './PortfolioComponents'

export const PortfolioPages = () => {
    return (
        <>
            <HeadingPrimary
                titleP='mis'
                titleS='proyectos'
            />
            <PortfolioComponents/>
        </>
    )
}
