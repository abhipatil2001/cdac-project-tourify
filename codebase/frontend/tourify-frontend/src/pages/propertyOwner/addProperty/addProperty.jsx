import React, { useState } from "react";
import "./addProperty.css";
import { useNavigate, useParams } from "react-router-dom";
import OwnerAfterLoginNav from "../../../components/propertyOwner/poAfterLoginNav";
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { addProperty } from "../../../services/owner";

const AddProperty = () => {
  const { cityId } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [poid, setPoid] = useState(localStorage.getItem("po_id"));

  const navigate = useNavigate();

  const saveProperty = async () => {
    const result = await addProperty(
      title,
      address,
      rate,
      description,
      img,
      cityId,
      category,
      poid
    );

    if (result["status"] === "success") {
      toast.success("Property Added Successfully.");
      navigate(`/owner/myprops`);
    } else {
      toast.error("Unable to add property.");
    }
  };

  return (
    <div>
      <OwnerAfterLoginNav />
      <div className="app-container">
        <h1>Add Your Property</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image Path Link</label>
          <input
            type="url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="301">Villa</option>
            <option value="302">Bungalow</option>
            <option value="303">Mansion</option>
          </select>
        </div>

        <div className="btns">
          <Button
            color="success"
            outline
            onClick={() => {
              saveProperty();
            }}
          >
            Save
          </Button>

          <Button
            className="ms-3"
            color="danger"
            outline
            onClick={() => {
              navigate("/owner/dashboard");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
