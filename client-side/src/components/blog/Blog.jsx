import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import * as blogService from "../../services/blogService";
import { useNavigate } from "react-router-dom";
export function Blog() {
  const navigate = useNavigate();
  const onBlogSubmitHandler = async (values, e) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("shortcont", values.shortcont);
      formData.append("context", values.context);
      formData.append("image",values.image);

      console.log(formData.get("image"));
      await blogService.create(formData);

      //navigate("/catalog");
    } catch (err) {
      console.log(err.message);
    }
  };

  const { values, onChange, onSubmit, validated, onFileChange } = useForm(
    onBlogSubmitHandler,
    {
      image: '',
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
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-services">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <section className="tabs-content">
                <article id="tabs-1">
                  <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                  <h4>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </a>
                  </h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15
                      comments
                    </span>
                  </div>
                  <p>
                    Sed ut dolor in augue cursus ultrices. Vivamus mauris
                    turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                    vitae scelerisque orci. Nunc non magna orci. Aliquam commodo
                    mauris ante, quis posuere nibh vestibulum sit amet.
                  </p>
                  <br />
                  <div>
                    <a href="blog-details.html" className="filled-button">
                      Continue Reading
                    </a>
                  </div>
                </article>
                <br />
                <br />
                <br />
                <article id="tabs-2">
                  <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                  <h4>
                    <a href="blog-details.html">
                      Mauris lobortis quam id dictum dignissim
                    </a>
                  </h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15
                      comments
                    </span>
                  </div>
                  <p>
                    Sed ut dolor in augue cursus ultrices. Vivamus mauris
                    turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                    vitae scelerisque orci. Nunc non magna orci. Aliquam commodo
                    mauris ante, quis posuere nibh vestibulum sit amet
                  </p>
                  <br />
                  <div>
                    <a href="blog-details.html" className="filled-button">
                      Continue Reading
                    </a>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
      <Form validated={validated} noValidate onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Email address
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
            placeholder="Enter short description"
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
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter Url"
            name="image"
            onChange={onFileChange}
            required
          />
          <Form.Control.Feedback type="invalid">
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
