import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Addchefs() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      navigate("/admin_log");
    }
  });

  const [chefsinfo, setChefsinfo] = useState({
    name: "",
    designation: "",
    image: "",
  });

  const onChangeValue = (e) => {
    setChefsinfo({ ...chefsinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //  alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/addchefs.php",
        {
          name: chefsinfo.name,
          designation: chefsinfo.designation,
          image: chefsinfo.image,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        //   navigate("/admin/chefs");
      });
  };
  return (
    <>
      <div className="col-sm-10">
        <br />
        <div className="content-wrapper">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add New Chefs</h3>
            </div>

            <div className="card-body">
              <div className="container">
                <form className="insertproduct" onSubmit={SubmitValue}>
                  <div className="form-group">
                    <label className="fw-bold">Chefs Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={onChangeValue}
                      placeholder="Enter Chefs Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Chefs Designation</label>
                    <input
                      type="text"
                      name="designation"
                      onChange={onChangeValue}
                      placeholder="Enter Chefs Designation"
                      className="form-control"
                    />
                    <label className="fw-bold">Chefs Image</label>
                    <input
                      type="file"
                      name="image"
                      multiple
                      accept="image/*"
                      onChange={onChangeValue}
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
