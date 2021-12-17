const get = require('../services/GET');

const bondController = {
    async getBondPrice(req, res) {

        const name = req.query.name

        const config = { params: { tickers: name } }
        
        const data = await get(res, 'https://www.allaria.com.ar/es/Bono/EspecieEvolutionGraph', config);

        const parsedData = JSON.parse(`${data.split('"dataProvider": ')[1].split('}],')[0]}}]`)
        const lastPrice = parsedData.pop()

        res.json(lastPrice)

    },
  };
  
  module.exports = bondController;
  