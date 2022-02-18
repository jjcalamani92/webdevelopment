import { works } from '../../../data/portfolio'

interface Props {
    type: string
}

export const PortfolioCards = ( { type }:Props) => {

    const getWorksByType = ( type: string ) => {
        const validType = ['page', 'site', 'app'];
    
        if (  !validType.includes( type ) ) {
            throw new Error(`Tipo de Web "${ type }" no es correcto`);
        }
    
        return works.filter( work => work.type === type );
    }
    
    const worksType = getWorksByType ( type );


    return (
        <section className="portfolio">
            <div className="box-container">
            {worksType.map((work, i) => (
                <div className="box" key={ work.id }>
                    <span>{i+1}</span>
                    <img src={work.image} alt=""/>
                    <div className="content">
                        <h3>{work.title}</h3>
                        <p>{work.content}</p>
                        <a href={work.url} rel="noopener">ver sitio</a>

                    </div>
                </div>
            ))}
            {/* <!-- <a href="#" class="btn"> ver mas <i class="fas fa-redo"></i> </a> --> */}
        </div>
        </section>
    )
}
