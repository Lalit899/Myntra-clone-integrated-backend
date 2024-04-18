import React from 'react'
import { useSelector } from 'react-redux';

function BagSummary() {
  const bagItemIds = useSelector((store) => store.bag);
  const Items = useSelector(store => store.items);
  const summaryItems = Items.filter((item) => { const itemIndex = bagItemIds.indexOf(item.id); return itemIndex >=0;})
  
  const ConvenienceFee = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  
  summaryItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + ConvenienceFee;
  

  return (
    <>
    <div className="bag-summary">
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">{ConvenienceFee}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    </>
  )
}

export default BagSummary