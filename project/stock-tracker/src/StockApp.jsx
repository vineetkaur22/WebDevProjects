import React, { useState, useCallback, useEffect } from 'react';
import StockList from './StockList';
import {getStocks ,refreshStocks} from './services';
import AddStock from './AddStock'; 

const REFRESH_TIME_IN_MS = 60000;

function StockApp({onLogout, username, errorMessage, setErrorMessage}){

   const [stocks, setStocks] = useState([]);	
    
   const relaodStocks = useCallback(() => {
      getStocks()
      .then( stocklist => { 
         setStocks(stocklist);
      })
      .catch(function(err){
         setErrorMessage(err);
      });
   },[setErrorMessage]);

   const handleRefreshStocks = useCallback(() => {
      refreshStocks()
      .then( () => { 
         relaodStocks();
      })
      .catch(function(err){
         setErrorMessage(err);
      });
   },[setErrorMessage,relaodStocks]);

   useEffect(() => {
      if(username){
         handleRefreshStocks();
			const intervalId = setInterval( () => {
				handleRefreshStocks();
			}, REFRESH_TIME_IN_MS );
			return function cleanup() {
				clearInterval(intervalId);
         };      
      }
   },[handleRefreshStocks,username]);

	return (
   <div>
      <div className="top-bar">
         <span>Logged in : {username}</span>
         <button onClick={handleRefreshStocks}>Refresh</button>
         <button onClick={onLogout}>Logout</button>
      </div>
      <AddStock username={username} relaodStocks={relaodStocks}/>
      <StockList stocks={stocks} relaodStocks={relaodStocks} setErrorMessage={setErrorMessage}/>
   </div>
	);
};

export default StockApp;