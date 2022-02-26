import { Popover } from 'react-tiny-popover'

interface Props {
  title: String;
  titleURL: any;
  imageCard: String;
  image: String;
  description: String;
  content: String;
  modulos: String;
  hours: String;
}

export const SkillCards = ({
  title,
  titleURL,
  image,
  imageCard,
  description,
  content,
  modulos,
  hours,
}: Props) => {
  return (
    <div className="box">
        <img src={`${image}`} alt={`${title}`} />
        <h3>{title}</h3>
    </div>

  );
};
