import React, { useState } from 'react';
import './RoomsNew.scss';

const RoomsNew = () => {

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
                <label>Room</label>
                <select class="form-select" multiple aria-label="multiple select example">
                  <option selected value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item col-4 mt-4'>
                <label>Choose a hotel</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Featured</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
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
