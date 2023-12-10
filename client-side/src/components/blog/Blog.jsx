import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import * as blogService from "../../services/blogService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogCard } from "./blogCard";
export function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        setBlogs(await blogService.getAll());
      } catch (err) {
        console.log(err.message);
      }
    };
    getAll();
  }, []);

  console.log(blogs);
  const onBlogSubmitHandler = async (values, e) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("shortcont", values.shortcont);
      formData.append("context", values.context);
      formData.append("image", values.image);

      console.log(formData.get("image"));
      const blog = await blogService.create(formData);
      setBlogs((current) => [...current, blog]);
      //navigate("/catalog");
    } catch (err) {
      console.log(err.message);
    }
  };

  const { values, onChange, onSubmit, validated, onFileChange } = useForm(
    onBlogSubmitHandler,
    {
      image: "",
      title: "",
      shortcont: "",
      context: "",
    }
  );
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Read our Blog</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="single-services" style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <section className="tabs-content">
                {blogs.length === 0 && (
                  <h3
                    className="fst-italic text-secondary fs-5"
                    style={{ textAlign: "center" }}
                  >
                    No blogs avaliable
                  </h3>
                )}
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} {...blog}></BlogCard>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>

      <Form validated={validated} noValidate onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Title
          </Form.Label>
          <Form.Control
            type="text"
            style={{ width: "40rem", margin: "0 auto" }}
            placeholder="Enter title"
            value={values.title}
            onChange={onChange}
            name="title"
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter a valid title!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Short description
          </Form.Label>
          <Form.Control
            type="text"
            style={{ width: "40rem", margin: "0 auto" }}
            placeholder="Enter short description"
            value={values.shortcont}
            onChange={onChange}
            name="shortcont"
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter a short description!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Description
          </Form.Label>
          <Form.Control
            type="text"
            style={{ width: "40rem", margin: "0 auto" }}
            placeholder="Enter description"
            value={values.context}
            onChange={onChange}
            name="context"
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter a short description!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Image
          </Form.Label>
          <Form.Control
            style={{ width: "40rem", margin: "0 auto" }}
            type="file"
            placeholder="Enter Url"
            name="image"
            onChange={onFileChange}
            required
          />
          <Form.Control.Feedback type="invalid" style={{ textAlign: "center" }}>
            Provide a image.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{ display: "flex", margin: "0 auto" }}
        >
          Create blog
        </Button>
      </Form>
      <br />
      <br />
    </>
  );
}
