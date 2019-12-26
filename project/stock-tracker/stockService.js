function getStockData(stockname) {
	return new Promise(function(resolve, reject) {
		const https = require('https');
		const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + stockname + '&apikey=51EF6QXBTLYMRKN0';
		https.get(url, (res) => {
			let data = '';
			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				resolve(JSON.parse(data));
			});
	
			}).on("error", (err) => {
				reject({ err: 'server-error', details: err.message });
		});
	});
}

module.exports = {
    getStockData
}
