const get = require('../services/GET');

const bondController = {
    async getBondPrice(req, res) {

        const name = req.query.name

        const config = { params: { tickers: name } }

        //allow all origins TODO: read a env variable
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        const data = await get(res, 'https://www.allaria.com.ar/es/Bono/EspecieEvolutionGraph', config);

        const existBound = data.indexOf('dataProvider') != -1
        if(existBound){
            //parse data
            const parsedData = JSON.parse(`${data.split('"dataProvider": ')[1].split('}],')[0]}}]`)
            //return the updatest price
            const lastPrice = parsedData.pop()
    
            res.json(lastPrice)
        }else{
            res.status(404)
            res.json({
                msg: 'no bond was found with that name'
            })
        }
    },
  };
  
  module.exports = bondController;
  