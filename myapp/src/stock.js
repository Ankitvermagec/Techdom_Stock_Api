import React, { useEffect, useState } from 'react';
import './stock.css';

function Stock()
{
    //const [stockChartXvalues,setXvalues]=useState([])
    //const [stockChartYvalues,setYvalues]=useState([])

    const [stockArray, setStockArray] = useState([]) 

    useEffect(()=>{
        getStockData()
    })

    let getStockData = async () => 
    {
        try 
        {
          let res = await fetch("https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY 50", 
          {
            method: "GET",
            headers: 
            {
                'X-RapidAPI-Key': '67e63e8089msh450e0c700daabd7p17e0b9jsn3e27fb322d83',
                'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
            }
          });
          let resJson = await res.json();
          setStockArray(resJson)
          console.log("resJson: ", resJson)
          console.log("res:", res)
          if (res.status === 200) 
          {
            console.log("Success!");
          } 
          else 
          {
            console.log("Some error occured");
          }
        } 
        catch (err) 
        {
            console.log(err);
        }
      };

    // const fetchStock=()=>
    // {
    //             const API_KEY='AXMQTK13APVVI13B'
    //             const symbol = "AMZN"
    //             // const API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`      //compact

    //             const API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=1year&apikey=${API_KEY}`

    //         fetch(API_CALL)
    //         .then(function (response){
    //               return response.json()
    //         })
    //         .then(function(data){
    //             console.log(data)
    //         })

    // }

    return(
            <div>
                <h1>STOCK MARKET</h1>
                {
                    stockArray.map(iterator =>
                    {
                        return <div style = {{
                                        borderRadius: "10px", 
                                        backgroundColor: "#FFFFFF", 
                                        margin: "10px", 
                                        padding: "5px", 
                                        fontWeight: "bold"
                                    }}>
                            <label>
                                Symbol: {iterator.symbol}
                            </label><br/>
                            <label>
                                Identifier: {iterator.identifier}
                            </label><br/>
                            <label>
                                Open: {iterator.open}
                            </label><br/>
                            <label>
                                Day High: {iterator.dayHigh}
                            </label><br/>
                            <label>
                                Day Low: {iterator.dayLow}
                            </label><br/>
                            <label>
                                Last Price: {iterator.lastPrice}
                            </label><br/>
                            <label>
                                Previous Close: {iterator.previousClose}
                            </label><br/>
                            <label>
                                Change: {iterator.change}
                            </label><br/>
                            <label>
                                P Change: {iterator.pChange}
                            </label><br/>
                            <label>
                                Year High: {iterator.yearHigh}
                            </label><br/>
                            <label>
                                Year Low: {iterator.yearLow}
                            </label><br/>
                            <label>
                                Total Traded Volume: {iterator.totalTradedVolume}
                            </label><br/>
                            <label>
                                Total Traded Value: {iterator.totalTradedValue}
                            </label><br/>
                            <label>
                                Last Update Time: {iterator.lastUpdateTime}
                            </label><br/>
                            <label>
                                Per Change 365d: {iterator.perChange365d}
                            </label><br/>
                            <label>
                                Per Change 30d: {iterator.perChange30d}
                            </label><br/>
                        </div>
                    })
                }
            </div>
    )
}

export default Stock;