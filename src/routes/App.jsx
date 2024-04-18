import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/ItemSlice'
import { fetchStatusActions } from '../store/FetchStatusSlice'
import Loader  from '../components/Loader'

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if(fetchStatus.fetchdone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.fetchingStart());
    fetch("http://localhost:8080/items",{signal})
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.fetched());
        dispatch(fetchStatusActions.fetchingDone());
        dispatch(itemsActions.addInitialitems(items));})
        
    return () => {
      controller.abort();
    };
  },[fetchStatus])
  
  return (
    <>
    <Header/>
    {fetchStatus.currentlyfetching ? <Loader/>:<Outlet/>}
    <Footer/>
    </>
  )
}

export default App