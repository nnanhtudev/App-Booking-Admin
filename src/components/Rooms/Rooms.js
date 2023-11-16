import React, { useEffect, useState } from 'react';
import './Rooms.scss';
import { handleGetAllRoomPaginate } from '../../services/apiRooms';
import ReactPaginate from "react-paginate";

const Rooms = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [roomData, setRoomData] = useState([]);
  // Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    handleRoomData()
  }, [currentPage])

  const handleRoomData = async () => {
    let response = await handleGetAllRoomPaginate(currentPage, currentLimit)
    if (response && response.EC === 0) {
      setTotalPages(response.DT && response.DT.totalPages)
      setRoomData(response.DT && response.DT.rooms)
    }
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1)
  };

  return (
    <>
      <div className="container-rooms container row mt-4">
        <div className='rooms col-12 form-control'>
          <div className='rooms-body d-flex'>
            <button className='btn btn-outline-success'>Add New</button>
            <h3 className='title'>Rooms List</h3>
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
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Max People</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {roomData && roomData.length > 0 ? roomData.map((item) => (
                  <tr>
                    <td>
                      <input type="checkbox" checked={selectAll} />
                    </td>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td>{item.maxPeople}</td>
                    <td>
                      <button className='btn btn-outline-danger'>Delete</button>
                    </td>
                  </tr>
                )) : <tr><td>Hotels not Found</td></tr>}
                {/* Add more table rows here */}
              </tbody>
            </table>
            {totalPages > 0 &&
              <div className="room-footer">
                <ReactPaginate
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={totalPages}
                  previousLabel="< Previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
