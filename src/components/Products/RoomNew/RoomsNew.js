import React, { useEffect, useState } from 'react';
import './RoomsNew.scss';
import { handleGetAllHotel } from '../../../services/apiHotels';

const RoomsNew = (props) => {
  const [dataHotels, setDataHotel] = useState([])
  useEffect(() => {
    getHotels()
  }, [])
  const getHotels = async () => {
    const dataHotel = await handleGetAllHotel()
    if (dataHotel && dataHotel.EC === 0) {
      setDataHotel(dataHotel.DT)
    }
  }
  return (
    <>
      <div className="container-rooms-new container row mt-4">
        <div className='rooms-new col-12 form-control'>
          <div className='rooms-new-body row'>
            <div className='col-12 title'>
              <h3>Add New Product</h3>
            </div>
            <div className='rooms-new-content row mt-4 col-12'>
              <div className='item col-6'>
                <label>Title</label>
                <input className='form-control' placeholder='2 bed room' />
              </div>
              <div className='item col-6'>
                <label>Description</label>
                <input className='form-control' placeholder='King size bed, 1 bathrooms' />
              </div>
              <div className='item col-6 mt-2'>
                <label>Price</label>
                <input className='form-control' placeholder='100' />
              </div>
              <div className='item col-6 mt-2'>
                <label>Max People</label>
                <input className='form-control' placeholder='2' />
              </div>
              <div className='item col-4 mb-4'>
                <label for="floatingTextarea">Rooms</label>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              </div>
              <div className='item col-4 mt-4'>
                <label>Choose a hotel</label>
                <select className="form-select" aria-label="Default select example">
                  {dataHotels && dataHotels.length > 0 ?
                    dataHotels.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    )) : <option value="featured">Featured</option>
                  }
                </select>
              </div>
              <button className='btn btn-send col-3 mt-4'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsNew;
