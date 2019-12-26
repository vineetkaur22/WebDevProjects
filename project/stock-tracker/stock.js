const stockService = require('./stockService');
const userStocks = {};

//Initial Users
addUser("Amit");
addUserStock("Amit", "AMZN");

function isExistingUser(username){
    let found = false;
    for (let key in userStocks) {
        if( key === username){
            found = true;
        }
    }
    return found;
}

function addUser(username){
    if(!isExistingUser(username)){
        userStocks[username] = [];
    }
}

function addUserStock(username, newStockName){
    const stocksList = userStocks[username];
    if(!isExistingStock(username, newStockName.toUpperCase())){
    return new Promise(function(resolve, reject) {
        stockService.getStockData(newStockName)
            .then((stockJson) => {
                const stockQuote = stockJson['Global Quote']
                if(stockQuote){
                    const stockMap = {};
                    populateNewStock(stockQuote, stockMap);
                    stocksList.push(stockMap);   
                    resolve("add stock success");
                }
                reject({ err: 'server-error', details: "add stock error"});
            }).catch((error) => {
                reject({ err: 'server-error', details: error });
            });
        }
        );
    }
}

function populateNewStock(stockQuote, stockMap){
    stockMap["quantity"] = 0;    
    populateStock(stockQuote, stockMap);
}

function populateStock(stockQuote, stockMap){
    const stockName = stockQuote["01. symbol"];
    const stockPriceString = stockQuote["05. price"];
    const stockPrice = parseFloat(stockPriceString);
    const stockDate = new Date();

    stockMap["stockName"] = stockName;
    stockMap["price"] = stockPrice.toFixed(2);
    stockMap["equity"] = stockPrice * stockMap["quantity"];
    stockMap["lastUpdatedDate"] = stockDate;
}

function isExistingStock (username, newStockName){
    const stocksList = userStocks[username];
    let stockExisting = false;
    if(stocksList){
        stocksList.forEach((stockMap) => {
            if(stockMap["stockName"] === newStockName){
                stockExisting = true;
            }
        });
    }
    return stockExisting;
}

function getStocks(username){
    return userStocks[username];
}

function deleteUserStock(username, stockName){
    const stocksList = userStocks[username];
    let toBeDeletedStock;
    if(stocksList){
        stocksList.forEach((stockMap) => {
            if(stockMap["stockName"] === stockName){
                toBeDeletedStock = stockMap;
            }
        });
    }
    if(toBeDeletedStock){
        const index = stocksList.indexOf(toBeDeletedStock);
        stocksList.splice(index, 1);
    }
}

function updateUserStock(username, stockName, stockQuantity, stockEquity){
    const stocksList = userStocks[username];
    if(stocksList){
        stocksList.forEach((stockMap) => {
            if(stockMap["stockName"] === stockName){
                stockMap["quantity"] = stockQuantity;
                stockMap["equity"] = stockEquity;
            }
        });
    }
}

function refreshUserStock(username){
    const stocksList = userStocks[username];
    const promises = [];

    stocksList.forEach((stockMap) => {
        promises.push(
                    new Promise(function(resolve, reject) {
                        stockService.getStockData(stockMap["stockName"])
                        .then((stockJson) => {
                            const stockQuote = stockJson['Global Quote']
                            if(stockQuote){
                                populateStock(stockQuote, stockMap);
                                resolve("refreshed stock" + stockMap["stockName"]);
                            }
                            reject({ err: 'server-error', details: "add stock error"});
                        }).catch((error) => {
                            reject({ err: 'server-error', details: error });
                        });
        }));
    });

    return Promise.all(promises);
}

    

module.exports = {
    addUser,
    isExistingStock,
    addUserStock,
    deleteUserStock,
    updateUserStock,
    getStocks,
    refreshUserStock,
}
