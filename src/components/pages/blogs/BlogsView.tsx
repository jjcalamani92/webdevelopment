import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getProductByTitleURL } from '../../../selectors/getByTitleURL';
import { HeadingTertiary } from '../../layouts/HeadingTertiary';

interface State {
  Blog: any
};

export const BlogsView = () => {
  const { titleURL } = useParams();
  const { blogs } = useSelector((state: State) => state.Blog);
  const blog = getProductByTitleURL(blogs, titleURL)
  if ( !blog ) {
    return <Navigate to="/"/>
}
  const { title, image, content } = blog;
  return (
    <>
      <HeadingTertiary title={title} />
      <section>
        <img src={`${image}`} alt={`${title}`} />
        <div>{content}</div>
      </section>
      

    </>
  )
}
