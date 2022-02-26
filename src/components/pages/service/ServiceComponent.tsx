import { useSelector } from "react-redux";
import { ServiceCards } from "./ServiceCards";

interface State {
  Service: any;
}

export const ServiceComponent = () => {
  const { services } = useSelector((state: State) => state.Service);
  return (
    <section className="services">
      {services.map((data: any, i:Number) => (
        <ServiceCards key={i} {...data} />
      ))}
    </section>
  );
};
