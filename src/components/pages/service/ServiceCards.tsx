import { services } from "../../../data/service"
export const ServiceCards = () => {
    return (
        <div className="box-container">
            {services.map((service, i) => (
                <div className="box" key={i}>
                    <img src={service.image} alt={`${service.title}`}/>
                    <div className="content">
                        <h3>{service.title}</h3>
                        <p>{service.content}</p>
                    </div>
                    {/* <a href="#" target="_blank" class="btn-1">más información</a> */}
                </div>
            ))}
        </div>
    )
}
