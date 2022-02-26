import { useSelector } from "react-redux";
import { getByType } from "../../../selectors/getByType";
import { PortfolioCards } from "./PortfolioCards"

interface Props {
    Portfolio: any
}
interface Type {
    type: String
}

export const PortfolioComponents = ({ type }:Type) => {
    const { works } = useSelector((state: Props) => state.Portfolio);
    const work = getByType ( works, type );
    
    return (
        <>
            
            
            {work.map((data: any, i:number) => (
                <PortfolioCards
                    key={i} {...data}
                />
            ))}

            {/* <HeadingSecundary
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
            /> */}
        </>
    )
}
