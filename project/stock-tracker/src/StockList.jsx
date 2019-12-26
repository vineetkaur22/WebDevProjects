import React, { useState} from 'react';
import { updateStock, deleteStock } from './services';

function StockList({stocks, relaodStocks, setErrorMessage}){

   let [value, setValue] = useState(0);
   const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

   const handleUpdateStock = ((e) => {
      const indexString = e.target.id;
      const index = indexString.split("_")[0];
      const stockname = stocks[index]["stockName"];
      const quantity = stocks[index]["quantity"];
      const equity = stocks[index]["equity"];
      updateStock({stockname, quantity, equity})
      .then( () => { 
         setUpdateButtonDisabled(true);
      })
      .catch(function(e){
         setErrorMessage("Unable to update stock: " + e);
      });
   });

   const handleQuantityChange = ((e) => {
      let quantityText = e.target.value;
      if(quantityText === ""){
         quantityText = 0;
      }
      const index = e.target.id;
      const isnum = /^\d+$/.test(quantityText);
      if(isnum){
         const quantity = parseInt(quantityText);
         stocks[index]["quantity"] = quantity;
         let equity = stocks[index]["price"] * quantity;
         stocks[index]["equity"] = equity.toFixed(2);
         setUpdateButtonDisabled(false);
         setValue(++value);
      }
   });

   const handlDeleteStock = ((e)=> {
      const indexString = e.target.id;
      const index = indexString.split("_")[0];
      const stockname = stocks[index]["stockName"];
      deleteStock({stockname})
      .then(()=>{
         relaodStocks();
      })
      .catch(function(e){
         setErrorMessage("Unable to delete stock: " + e);
      });
   });

	return (
   <div>
   <h2>Your Stock Portfolio</h2>
   <ol className="stock-list"> 
      <li className="stock-item-header">
         <div>
         <div>Stock Symbol</div>
         <div>Price</div>
         <div>Last Updated Date and Time</div>
         <div>Quantity</div>
         <div>Your Equity</div>
         <div/>
      </div> 
      </li>
   {
    stocks.map((stockMap,index)=>{
      const dateTime = new Date(stockMap["lastUpdatedDate"]);
      const formattedDate = dateTime.getFullYear() + "-" + (dateTime.getMonth() + 1) + "-" + dateTime.getDate() 
      + " " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds() ;

      return  <li className="stock-item" key={index}>
                  <div>
                  <div>{stockMap["stockName"]}</div>
                  <div>{stockMap["price"]}</div>
                  <div>{formattedDate}</div>
                  <div>
                     <input className="quantity-input" type="text" id={index} value={stockMap["quantity"]} 
                      onChange={ e => handleQuantityChange(e)}/>
                     <button  id={index+"_save"} disabled={updateButtonDisabled} onClick={handleUpdateStock}>Update</button>
                  </div>
                  <div>{stockMap["equity"]}</div>
                  <div><button id={index+"_delete"} onClick={handlDeleteStock}>Delete</button></div>
                </div> 
             </li>
          })
       }
    </ol>
    </div>
	);
};

export default StockList;