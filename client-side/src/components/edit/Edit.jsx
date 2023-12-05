import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
export function Edit(){
    const {id} = useParams()
    const [offer,setOffer] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        carService.getOne(id)
            .then(result => {
                setOffer(result);
            })
            .catch(err => {
              
            });
    }, []);
    const editCarOfferSubmitHandler = async (values,e) => {
        try {
          const formData = new FormData();
          formData.append("model", values.model);
          formData.append("price", values.price);
          formData.append("mileage", values.mileage);
          formData.append("fuel", values.fuel);
          formData.append("seats", values.seats);
          formData.append("description", values.description);
          formData.append("carImage", values.carImage);
          formData.append("color", values.color);
          formData.append("telephone", values.telephone);
    
          console.log(formData);
          await carService.update(id,formData);
    
          navigate("/catalog/"+id);
        } catch (err) {
          console.log(err.message);
        }
      };
    const { values, onChange, onSubmit, validated } = useForm(editCarOfferSubmitHandler,offer,true);
    return(
      <>
      <div
        className="page-heading header-text"
        style={{backgroundImage:`url(${offer.carImage})`}}
      >
        <div className="container" >
          <div className="row">
            <div className="col-md-12">
              <h1>Edit</h1>
              <span>
                Edit your offer right now and you can make some money :)
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />

      <Form
        className="ps-5 pe-5"
        onSubmit={onSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter model"
            name="model"
            onChange={onChange}
            value={values.model}
            required style={{ width: "40rem", margin: "0 auto" }}
            
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a model.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Price</Form.Label>
          <Form.Control
            type="number"
            min={1}
            placeholder="Enter price"
            name="price"
            onChange={onChange}
            value={values.price}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Mileage</Form.Label>
          <Form.Control
            type="number"
            min={0}
            placeholder="Enter mileage"
            name="mileage"
            onChange={onChange}
            value={values.mileage}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a mileage.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Fuel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter fuel"
            name="fuel"
            onChange={onChange}
            value={values.fuel}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a fuel.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Seats</Form.Label>
          <Form.Control
            type="number"
            min={1}
            placeholder="Enter seats"
            name="seats"
            onChange={onChange}
            value={values.seats}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a seats.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter color"
            name="color"
            onChange={onChange}
            value={values.color}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a color.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={onChange}
            value={values.description}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Provide a description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>Telephone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter telephone"
            name="telephone"
            onChange={onChange}
            value={values.telephone}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Provide a telephone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="createFormName">
          <Form.Label style={{ textAlign: "center", display: "block" }}>car image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car image"
            name="carImage"
            onChange={onChange}
            value={values.carImage}
            required style={{ width: "40rem", margin: "0 auto" }}
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Provide a car image.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="dark" type="submit" style={{display:'flex', margin:'0 auto'}}>
          Edit
        </Button>
      </Form>
      <br />
      <br />

    </>
    )
   
}