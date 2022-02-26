import { HeadingPrimary } from "../../layouts/HeadingPrimary";
import { BlogsComponent } from './BlogsComponent';

export const BlogsPages = () => {
  return (
    <>
      <HeadingPrimary titleP="mis" titleS="blogs" />
      <BlogsComponent />
    </>
  );
};
