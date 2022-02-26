interface Props {
  title: String;
  image: String;
  content: String;
}

export const ServiceCards = ({ title, image, content }: Props) => {
  return (
    <div className="box">
      <img src={`${image}`} alt={`${title}`} />
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {/* <a href="#" target="_blank" class="btn-1">más información</a> */}
    </div>
  );
};
