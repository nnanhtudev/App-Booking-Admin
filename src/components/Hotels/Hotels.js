import React, { useEffect, useState } from "react";
import "./Hotels.scss";
import { handleGetAllHotel } from "../../services/apiHotels";

const Hotels = (props) => {
  const [selectAll, setSelectAll] = useState(false);
  const [hotelData, setHotelData] = useState({});
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  useEffect(() => {
    handleHotelData();
  }, []);
  const handleHotelData = async () => {
    let response = await handleGetAllHotel();
    if (response && response.EC === 0) {
      setHotelData(response.DT);
    }
  };
  return (
    <>
      <div className="container-hotels container row mt-4">
        <div className="hotels col-12 form-control">
          <div className="hotels-body d-flex">
            <h3 className="title">Hotels List</h3>
            <button className="btn btn-outline-success">Add New</button>
            <table className="table table-hover table-bordered mt-2">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                  </th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">City</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {hotelData && hotelData.length > 0 ? (
                  hotelData.map((item) => (
                    <tr>
                      <td>
                        <input type="checkbox" checked={selectAll} />
                      </td>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.city}</td>
                      <td>
                        <button className="btn btn-outline-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Hotels not Found</td>
                  </tr>
                )}
                {/* Add more table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
