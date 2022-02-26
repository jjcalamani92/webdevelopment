import { HeadingPrimary } from '../../layouts/HeadingPrimary'
import { HeadingSecundary } from '../../layouts/HeadingSecundary'
import { PortfolioComponents } from './PortfolioComponents'

export const PortfolioPages = () => {
    return (
        <>
            <HeadingPrimary
                titleP='mis'
                titleS='proyectos'
            />

            <HeadingSecundary
                title = 'páginas web'
            />
            <section className="portfolio">
                <PortfolioComponents
                    type= 'page'
                />
            </section>

            <HeadingSecundary
                title = 'sitios web'
            />
            <section className="portfolio">
                <PortfolioComponents
                    type= 'site'
                />
            </section>

            <HeadingSecundary
                title = 'aplicaciones web'
            />
            <section className="portfolio">
                <PortfolioComponents
                    type= 'app'
                />
            </section>

        </>
    )
}
