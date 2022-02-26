import { useSelector } from 'react-redux';
import { BlogsCards } from './BlogsCards';

interface State {
  Blog: any
};

export const BlogsComponent = () => {
  const { blogs } = useSelector((state: State) => state.Blog);
  return (
    <section className="blogs">
        {
          blogs.map((data: any) => (
            <BlogsCards
              key={data.id}
              {...data}
            />
          ))
        }
      </section>
    
  )
}
