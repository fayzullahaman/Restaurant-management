import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function Addmenu() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      navigate("/admin_log");
    }
  });

  const [menuInfo, menuinfoSet] = useState({
    name: "",
    details: "",
    price: "",
    category: "",
  });

  const [image, setImage] = useState({
    file: "",
  });

  const changeValue = (e) => {
    menuinfoSet({ ...menuInfo, [e.target.name]: e.target.value });
  };

  const changeImage = (e) => {
    setImage({ file: e.target.files[0] });
  };
  const SubmitValue = (e) => {
    // alert("Submitted");
    e.preventDefault();
    fileUpload();
  };

  const fileUpload = () => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(menuInfo));
    datas.append("mydata1", image.file);
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/addmenu.php",
        datas,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        alert(res.data.msg);
        // console.log(res.data.msg);
        navigate("/admin/allmenu");
      });
  };

  return (
    <>
      <div className="col-sm-10">
        <br />
        <div className="content-wrapper">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add New Menu</h3>
            </div>

            <div className="card-body">
              <div className="container">
                <form className="insertproduct" onSubmit={SubmitValue}>
                  <div className="form-group">
                    <label className="fw-bold">Menu Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={changeValue}
                      placeholder="Enter Menu Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Details</label>
                    <textarea
                      type="text"
                      name="details"
                      onChange={changeValue}
                      className="form-control"
                      placeholder="Enter Menu Details"
                    ></textarea>

                    <label className="fw-bold">Menu Price</label>
                    <input
                      type="text"
                      name="price"
                      onChange={changeValue}
                      placeholder="Enter Menu Price"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Category</label>
                    <input
                      type="text"
                      name="category"
                      onChange={changeValue}
                      placeholder="Enter Menu Category"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={changeImage}
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
