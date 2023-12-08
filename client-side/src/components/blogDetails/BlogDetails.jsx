import { useEffect, useState } from "react";
import * as carService from "../../services/carService";
import * as blogService from "../../services/blogService";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Comment } from "../details/comment/Comment";
import { Button, Form } from "react-bootstrap";
import formatDateTime from "../../utils/formatDateTime";


export function BlogDetails(){
    const { id } = useParams();

    const [blog, setBlog] = useState({comments:[]});
useEffect(() => {
    blogService
      .getOne(id)
      .then((result) => {
        setBlog(result);
      })
      .catch((err) => {});
  }, []);

  const commentSubmitHandler = async (values) => {
    try {
      const comment = await carService.createComment(id, values);

      setBlog((current) => ({
        ...current,
        comments: [...current.comments, comment],
      }));
    } catch (err) {
      console.log(err.message);
    }
  };
 
  const { values, onChange, onSubmit, validated } = useForm(
    commentSubmitHandler,
    {
      content: "",
    }
  );
  const commentDeleteHandler = async (id) => {
    try {
        await carService.deleteComment(id);
      
        setBlog(current => ({
            ...current,
            comments: current.comments.filter(el => el._id != id)
        }))
    } catch (err) {
        console.log(err.message);
    }
}
  
    return(
        <>

<div
        className="page-heading header-text"
        style={{
          backgroundImage:`url(http://localhost:3000/uploads/${blog.imageUrl})`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{blog.title}</h1>
              
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                {blog.title}
              </h1>
              <span>
                <i className="fa fa-user" /> {blog.username} &nbsp;|&nbsp;{" "}
                <i className="fa fa-calendar" /> {formatDateTime(new Date(blog.createdAt))}
              </span>
            </div>
          </div>
        </div>
        <div className="more-info about-info">
          <div className="container">
            <div className="more-info-content">
              <div className="right-content">
                
                <br />
                <p>
                  {blog.context}
                </p>
               
               
              </div>
            </div>
          </div>
        </div>
        

        <div className="callback-form contact-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>
                    Leave a <em>comment</em>
                  </h2>
      <section className="comment-section ms-3 mb-3 pt-3">
        <Form
          className="mb-3"
          onSubmit={onSubmit}
          validated={validated}
          noValidate
        >
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Place your comment.... "
              name="content"
              onChange={onChange}
              value={values.content}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Comment
          </Button>
        </Form>
        {blog.comments.length === 0 ? (
          <i>
            <h3>No comments yet. Be the first one!</h3>
          </i>
        ) : (
          ""
        )}
        {blog.comments.map((comment) => (
          <Comment
            comment={comment}
            commentDeleteHandler={commentDeleteHandler}
            userId={blog.userId}
            key={comment._id}
          />
        ))}
      </section>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
      </>

      
    )
}