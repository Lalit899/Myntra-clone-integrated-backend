import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/BagSlice';

function HomeItem({ item }) {
  const Bag = useDispatch();

  const handleAddBag = () => {
    Bag(bagActions.addtoBag(item.id));
  }
  const handleRemoveBag = () => {
    Bag(bagActions.removefromBag(item.id));
  }
  
  const bagItem = useSelector(store => store.bag);
  const element = bagItem.indexOf(item.id) >= 0;

  return (
    <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {element ? <button className="btn-remove-bag" onClick={handleRemoveBag}>Remove from Bag</button> : <button className="btn-add-bag" onClick={handleAddBag}>Add to Bag</button>}
    </div>
    </>
  )
}

export default HomeItem