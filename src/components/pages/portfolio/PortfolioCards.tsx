interface Props {
  title: String;
  image: String;
  content: String;
  url: any;
  id: Number;
  work: String;
}

export const PortfolioCards = ({
  title,
  image,
  content,
  url,
  id,
  work,
}: Props) => {
  return (
    <div className="box">
      <span> </span>
      <img src={`${image}`} alt={`${title}`} />
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={url} target="_blank"  rel="noopener noreferrer">
          ver sitio
        </a>
      </div>
    </div>
  );
};
