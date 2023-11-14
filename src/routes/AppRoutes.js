import React from 'react';
import { Route, Switch } from "react-router-dom";
import Hotels from '../components/Hotels/Hotels';
import InfoBoard from '../components/InfoBoard/InfoBoard';
import Transaction from '../components/Transaction/Transaction'
import HotelsNew from '../components/Products/HotelsNew/HotelsNew';
import Rooms from '../components/Rooms/Rooms';
import RoomsNew from '../components/Products/RoomNew/RoomsNew';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/transactions' component={Transaction} />
      <Route path='/new-hotel' component={HotelsNew}></Route>
      <Route path='/new-rooms' component={RoomsNew} />
      <Route path='/rooms' component={Rooms} />
      <Route path="/hotels" component={Hotels}></Route>
      <Route exact path="/">
        <InfoBoard />
        <Transaction />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
