import React, { useEffect, useState } from 'react';
import './HotelsNew.scss';
import { handleGetAllRoom } from '../../../services/apiRooms';

const HotelsNew = () => {
  const [roomsData, setRoomData] = useState([])
  useEffect(() => {
    getRoomData()
  }, [])
  const getRoomData = async () => {
    let roomData = await handleGetAllRoom()
    if (roomData && roomData.EC === 0) {
      setRoomData(roomData.DT)
    }
  }
  return (
    <>
      <div className="container-hotels-new container row mt-4">
        <div className='hotels-new col-12 form-control'>
          <div className='hotels-new-body row'>
            <div className='col-12 title'>
              <h3>Add New Product</h3>
            </div>
            <div className='hotels-new-content row mt-4 col-12'>
              <div className='item col-6'>
                <label>Name</label>
                <input className='form-control' placeholder='My Hotel' />
              </div>
              <div className='item col-6'>
                <label>Type</label>
                <input className='form-control' placeholder='Hotel' />
              </div>
              <div className='item col-6 mt-2'>
                <label>City</label>
                <input className='form-control' placeholder='New York' />
              </div>
              <div className='item col-6 mt-2'>
                <label>Address</label>
                <input className='form-control' placeholder='eilton s1,216' />
              </div>
              <div className='item col-6 mt-2'>
                <label>Description</label>
                <input className='form-control' placeholder='description' />
              </div>
              <div className='item col-6 mt-2'>
                <label>Price</label>
                <input className='form-control' placeholder='100' />
              </div>
              <div className='item col-6 mt-4'>
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Images</label>
                </div>
              </div>
              <div className='item col-4 mt-4'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Featured</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
              <div className='item col-12 mt-4 mb-4'>
                <label>Room</label>
                <select class="form-select" multiple aria-label="multiple select example">
                  {roomsData && roomsData.length > 0 ?
                    roomsData.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    )) : <option value="featured">Featured</option>
                  }
                </select>
              </div>
            </div>
            <button className='btn btn-send col-2 mt-4'>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsNew;
