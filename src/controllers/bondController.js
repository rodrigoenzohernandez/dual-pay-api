const get = require('../services/GET');

const bondController = {
    async getBondPrice(req, res) {

        const data = await get(res, 'https://www.allaria.com.ar/es/Bono/EspecieEvolutionGraph?tickers=GD30');
        const parsedData = JSON.parse(`${data.split('"dataProvider": ')[1].split('}],')[0]}}]`)
        const lastPrice = parsedData.pop()

        res.json(lastPrice)
    },
  };
  
  module.exports = bondController;
  