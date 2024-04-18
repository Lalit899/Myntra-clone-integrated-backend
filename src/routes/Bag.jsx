import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux';

function Bag() {
  const bagItems = useSelector(store => store.bag);
  const Items = useSelector(store => store.items);
  const summaryItems = Items.filter((item) => { const itemIndex = bagItems.indexOf(item.id); return itemIndex >=0 ;})

  return (
    <>
    <main>
      <div className="bag-page">
        {summaryItems.map((item) => <BagItem key={item.id} item={item}/>)}
        <BagSummary/>

      </div>
    </main>
    </>
  )
}

export default Bag