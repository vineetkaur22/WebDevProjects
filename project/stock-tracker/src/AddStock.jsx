import React, { useState } from 'react';
import { addStock } from "./services";

function AddStock({username, relaodStocks}){
    const [stockname, setStockname] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = ((inputText) => {
        setStockname(inputText);
    });

    const handleinput  = (() => {
        addStock({stockname,username})
			.then( function(response) {
                setStockname("");
                setErrorMessage("");
                relaodStocks();
			})
			.catch(function(e) {
                setErrorMessage("Error in Adding Stock");
			});
    });

    return (
        <div className="to-add">               
            <input type="text" name="text" value={stockname} placeholder="Enter stock symbol to add" onChange={ e => handleChange(e.target.value)}/>
            <button type="submit" onClick={handleinput}>Add</button>
            <div><span className="errorMessage">{errorMessage}</span></div>
        </div>
    );
}

export default AddStock;

