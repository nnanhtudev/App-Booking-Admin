import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoBoard.scss'
import { faCartShopping, faDollar, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
const InfoBoard = (props) => {
  return (
    <>
      <div className="info-board-container container mt-4 row">
        <div className="item col-3">
          <div className="item-row col-9">
            <span className="title">
              Users
            </span>
            <h3 className="current">100</h3>
          </div>
          <div className="item-row-icon icon-user col-2">
            <FontAwesomeIcon className='i-user' icon={faUser} />
          </div>
        </div>
        <div className="item col-3">
          <div className="item-row col-9">
            <span className="title">
              Orders
            </span>
            <h3 className="current">100</h3>
          </div>
          <div className="item-row-icon icon-cart col-2">
            <FontAwesomeIcon icon={faCartShopping} className='i-cart' />
          </div>
        </div>
        <div className="item col-3">
          <div className="item-row col-9">
            <span className="title">
              Earnings
            </span>
            <h3 className="current">$ 100</h3>
          </div>
          <div className="item-row-icon icon-dollar col-2">
            <FontAwesomeIcon icon={faDollar} className='i-dollar' />
          </div>
        </div>
        <div className="item col-3">
          <div className="item-row col-9">
            <span className="title">
              Balance
            </span>
            <h3 className="current">$ 100</h3>
          </div>
          <div className="item-row-icon icon-wallet col-2">
            <FontAwesomeIcon icon={faWallet} className='i-wallet' />
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBoard