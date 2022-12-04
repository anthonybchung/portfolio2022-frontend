import { useEffect, useState } from "react";
import "./BlogCards.styles.scss";
import axios from "../../config/axios";
const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const BLOGS_URL = "/api/v1/blogs/";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(BLOGS_URL);
        setBlogs(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  const descriptionList = (descriptions) => {
    return descriptions.map((description, index) => {
      return (
        <p key={index} className="blog-description">
          {description}
        </p>
      );
    });
  };

  const blogList = blogs.map((blog, index) => {
    const createdDate = (value) => {
      return value.substr(0, value.indexOf("T"));
    };
    return (
      <div key={index} className="blog-card">
        <div className="card-blog-title">
          <div>
            <h3 className="card-title"> {blog.title}</h3>
            <h4 className="card-blog">{createdDate(blog.createdAtDate)} </h4>
          </div>
          <div>
            {blog.gitHub && (
              <a
                href={blog.gitHub}
                target="_blank"
                rel="noreferrer"
                className="blog-link"
              >
                Github
              </a>
            )}
          </div>
        </div>
        {descriptionList(blog.descriptions)}
      </div>
    );
  });

  return <section className="blog-cards-container">{blogList}</section>;
};

export default BlogCards;
