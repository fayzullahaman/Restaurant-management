import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

export default function Editchefs() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  let params = useParams();
  const [chefs, setChefs] = useState([]);

  //   console.log(chefs);

  const submitValue = (e) => {
    e.preventDefault();
    chefsSubmit();
  };

  const chefsSubmit = () => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/editchefs.php",
        {
          id: chefs.chf_id,
          name: chefs.chf_name,
          designation: chefs.chf_designation,
          image: chefs.chf_image,
        }
      )
      .then((res) => {
        naviGate("/admin/allchefs");
        alert(res.data.msg);
        // console.log(res.data);
      });
  };

  useEffect(() => {
    chefsOne(params.id);
  }, []);
  // console.log("MyID:" + params.id);
  const changeValue = (e) => {
    setChefs({ ...chefs, [e.target.name]: e.target.value });
  };
  const chefsOne = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/getchefs.php",
        {
          chid: id,
        }
      )
      .then((res) => {
        setChefs(res.data.item.chdata);
        // console.log(res.data.item.chdata);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="col-sm-10">
        <br />
        <div className="content-wrapper">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Edit Chefs</h3>
            </div>
            <div className="card-body">
              <div className="container">
                <form onSubmit={submitValue} className="insertproduct">
                  <div className="form-group">
                    <label className="fw-bold">Chefs Name</label>
                    <input
                      type="text"
                      name="name"
                      value={chefs.chf_name}
                      onChange={changeValue}
                      placeholder="Enter Product Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Chefs Designation</label>
                    <textarea
                      type="text"
                      name="details"
                      value={chefs.chf_designation}
                      onChange={changeValue}
                      className="form-control"
                      placeholder="Enter Menu Details"
                    ></textarea>

                    <label className="fw-bold">Chefs Image</label>
                    <input
                      type="text"
                      name="image"
                      value={chefs.chf_image}
                      onChange={changeValue}
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Update
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
