import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Hotels from "../components/Hotels/Hotels";
import InfoBoard from "../components/InfoBoard/InfoBoard";
import Transaction from "../components/Transaction/Transaction";
import HotelsNew from "../components/Products/HotelsNew/HotelsNew";
import Rooms from "../components/Rooms/Rooms";
import RoomsNew from "../components/Products/RoomNew/RoomsNew";
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = () => {
  return (
    <Switch>
      <PrivateRoutes path="/transactions" component={Transaction} />
      <PrivateRoutes path="/new-hotel" component={HotelsNew}></PrivateRoutes>
      <PrivateRoutes path="/new-rooms" component={RoomsNew} />
      <PrivateRoutes path="/rooms" component={Rooms} />
      <PrivateRoutes path="/hotels" component={Hotels}></PrivateRoutes>
      <Route exact path="/">
        <InfoBoard />
        <Transaction />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
