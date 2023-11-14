import React, { useState } from 'react';
import './Rooms.scss';

const Rooms = () => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <>
      <div className="container-rooms container row mt-4">
        <div className='rooms col-12 form-control'>
          <div className='rooms-body d-flex'>
            <h3 className='title'>Rooms List</h3>
            <button className='btn btn-outline-success'>Add New</button>
            <table className="table table-hover table-bordered mt-2">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Title</th>
                  <th scope="col">City</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" checked={selectAll} />
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button className='btn btn-outline-danger'>Delete</button>
                  </td>
                </tr>
                {/* Add more table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;