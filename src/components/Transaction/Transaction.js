import React, { useContext, useState } from "react";
import "./Transaction.scss";
import { UserContext } from "../../context/UserContext";

const Transaction = () => {
  const { user } = useContext(UserContext);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  if (user && user.isAuthenticated === true) {
    return (
      <>
        <div className="container-transaction col-12 container row mt-4">
          <div className="transaction col-12">
            <div className="transaction-body">
              <h3 className="title">Latest Transactions</h3>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </th>
                    <th scope="col">ID</th>
                    <th scope="col">User</th>
                    <th scope="col">Hotel</th>
                    <th scope="col">Room</th>
                    <th scope="col">Price</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Status</th>
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
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  {/* Add more table rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Transaction;
