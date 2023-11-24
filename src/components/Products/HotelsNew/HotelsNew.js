import React, { useEffect, useMemo, useState } from "react";
import "./HotelsNew.scss";
import { handleGetAllRoom } from "../../../services/apiRooms";
import { handleCreateNewHotel } from "../../../services/apiHotels";
import _ from "lodash";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const HotelsNew = () => {
  const history = useHistory();
  const [roomsData, setRoomData] = useState([]);
  useEffect(() => {
    getRoomData();
  }, []);
  const getRoomData = async () => {
    let roomData = await handleGetAllRoom();
    if (roomData && roomData.EC === 0) {
      setRoomData(roomData.DT);
    }
  };
  const defaultDataHotels = {
    name: "",
    type: "",
    city: "",
    description: "",
    address: "",
    distance: "",
    title: "",
    price: "",
    images: "",
    featured: false,
    room: [],
  };
  const defaultIsValidInput = {
    name: true,
    type: true,
    city: true,
    address: true,
    description: true,
    distance: true,
    title: true,
    price: true,
  };
  const [listInput, setListInput] = useState(defaultDataHotels);
  const [isValidInput, setIsValidInput] = useState(defaultIsValidInput);

  const handleOnchangeInput = (key, value) => {
    let _listInput = _.cloneDeep(listInput);
    _listInput[key] = value;

    if (key === "room") {
      _listInput[key] = Array.from(value.selectedOptions, (option) => option.value);
    } else {
      _listInput[key] = value;
    }
    // Check these case special
    if (key !== "") {
      setIsValidInput({ ...defaultIsValidInput, [key]: true });
    }
    if (key === "price" && isNaN(_listInput[key])) {
      toast.error(`Please enter number ${key} `);
      setIsValidInput({ ...defaultIsValidInput, [key]: false });
    }
    if (key === "distance" && isNaN(_listInput[key])) {
      toast.error(`Please enter number ${key} `);
      setIsValidInput({ ...defaultIsValidInput, [key]: false });
    }
    setListInput(_listInput);
  };
  const memoizedToast = useMemo(() => {
    return () => toast.warn(`If there is more than 1 photo, please separate them with ( ", " ).`);
  });

  const buildDataToPersist = (dataInput) => {
    const data = {
      address: dataInput.address,
      cheapestPrice: dataInput.price,
      city: dataInput.city,
      desc: dataInput.description,
      distance: dataInput.distance,
      featured: dataInput.featured === "true", // covert string sang boolean
      name: dataInput.name,
      photos: dataInput.images.split(",").map((img) => img.trim()),
      rooms: dataInput.room,
      title: dataInput.title,
      type: dataInput.type,
    };
    return data;
  };
  const handleCreateHotel = async () => {
    let _listInput = _.cloneDeep(listInput);
    let keyInput = Object.keys(_listInput).find((key, index) => {
      //Chi check these case ''
      return _listInput[key] === "";
    });
    // keyInput = _listInput[key] === "" with Key example name, type ...
    if (keyInput) {
      toast.error(`Input ${keyInput} must not be empty...`);
      setIsValidInput({ ...defaultIsValidInput, [keyInput]: false });
      return;
    }
    if (listInput.room && listInput.room.length === 0) {
      toast.warn(`Input room must not be empty... If there is more than 1 room please hold down the Ctrl key`);
      return;
    }
    try {
      // call api
      let data = buildDataToPersist(listInput);
      // const res = await handleCreateHotel(data);
      const res = await handleCreateNewHotel(data);
      if (res && +res.EC === 0) {
        toast.success("Created new hotel successfully");
        history.push("/hotels");
      }
    } catch (error) {
      console.error("Error creating hotel:", error);
      // Handle the error, show a toast, or perform other error-handling actions.
    }
  };
  return (
    <div className="container-hotels-new container row mt-4">
      <div className="hotels-new col-12 form-control">
        <div className="hotels-new-body row">
          <div className="col-12 title">
            <h3>Add New Product</h3>
          </div>
          <div className="hotels-new-content row mt-4 col-12">
            <div className="item col-6">
              <label>Name</label>
              <input
                className={isValidInput.name ? "form-control" : "form-control is-invalid"}
                placeholder="My Hotel"
                value={listInput.name}
                onChange={(event) => handleOnchangeInput("name", event.target.value)}
              />
            </div>
            <div className="item col-6">
              <label>Type</label>
              <input
                className={isValidInput.type ? "form-control" : "form-control is-invalid"}
                placeholder="Hotel"
                value={listInput.type}
                onChange={(event) => handleOnchangeInput("type", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>City</label>
              <input
                className={isValidInput.city ? "form-control" : "form-control is-invalid"}
                placeholder="New York"
                value={listInput.city}
                onChange={(event) => handleOnchangeInput("city", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>Address</label>
              <input
                className={isValidInput.address ? "form-control" : "form-control is-invalid"}
                placeholder="eilton s1,216"
                value={listInput.address}
                onChange={(event) => handleOnchangeInput("address", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>Distance from City Center</label>
              <input
                className={isValidInput.distance ? "form-control" : "form-control is-invalid"}
                placeholder="500"
                value={listInput.distance}
                onChange={(event) => handleOnchangeInput("distance", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>Title</label>
              <input
                className={isValidInput.title ? "form-control" : "form-control is-invalid"}
                placeholder="The best Hotel"
                value={listInput.title}
                onChange={(event) => handleOnchangeInput("title", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>Description</label>
              <input
                className={isValidInput.description ? "form-control" : "form-control is-invalid"}
                placeholder="description"
                value={listInput.description}
                onChange={(event) => handleOnchangeInput("description", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-2">
              <label>Price</label>
              <input
                className={isValidInput.price ? "form-control" : "form-control is-invalid"}
                placeholder="100"
                value={listInput.price}
                onChange={(event) => handleOnchangeInput("price", event.target.value)}
              />
            </div>
            <div className="item col-6 mt-4">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={listInput.images}
                  onClick={() => memoizedToast()}
                  onChange={(event) => {
                    handleOnchangeInput("images", event.target.value);
                  }}
                ></textarea>
                <label>Images</label>
              </div>
            </div>
            <div className="item col-4">
              <label>Featured</label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={listInput.featured}
                onChange={(event) => handleOnchangeInput("featured", event.target.value)}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="item col-12 mt-4 mb-4">
              <label>Room</label>
              <select
                className="form-select"
                multiple
                aria-label="multiple select example"
                // value={listInput.room}
                onChange={(event) => {
                  handleOnchangeInput("room", event.target);
                }}
              >
                {roomsData &&
                  roomsData.map((item, index) => (
                    <option key={index + 1} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button className="btn btn-send col-2 mt-4" onClick={() => handleCreateHotel()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelsNew;
