import { HeadingSecundary } from "../../layouts/HeadingSecundary"
import { PortfolioCards } from "./PortfolioCards"

export const PortfolioComponents = () => {
    return (
        <>
            <HeadingSecundary
            title = 'páginas web'
            btnTitle = 'Agregar'
            btnClassName = 'btn-1'
            // btnHandleclick={handleAddNew}
            btnIcon='plus-square'
            />

            <PortfolioCards
                type= 'page'
            />

            <HeadingSecundary
            title = 'sitios web'
            btnTitle = 'Agregar'
            btnClassName = 'btn-1'
            // btnHandleclick={handleAddNew}
            btnIcon='plus-square'
            />

            <PortfolioCards
                type= 'site'
            />

            <HeadingSecundary
            title = 'aplicaciones'
            btnTitle = 'Agregar'
            btnClassName = 'btn-1'
            // btnHandleclick={handleAddNew}
            btnIcon='plus-square'
            />

            <PortfolioCards
                type= 'app'
            />
        </>
    )
}
