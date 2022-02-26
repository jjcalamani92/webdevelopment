import { Link } from "react-router-dom";

interface Props {
  title: String
  titleURL: any
  imageCard: String
  image: String
  description: String
  content: String
  modulos: String
  hours: String
};

export const BlogsCards = ({title, titleURL, image, imageCard, description, content, modulos, hours }:Props) => {
  return (
    <div className="box">
      <div className="image">
        <img src={`${imageCard}`} alt={`${title}`} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="btn" to={titleURL}>
          leer más
        </Link>
      </div>
    </div>
  );
};
