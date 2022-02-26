interface Props {
  title: String
  image: String
  academy: String
}

export const AcademyCards = ({
  title,
  image,
  academy
}: Props) => {
  return (
    <div className="box">
      <img src={`${image}`} alt={`${title}`} />
      <h3>{academy}</h3>
    </div>
  );
};
