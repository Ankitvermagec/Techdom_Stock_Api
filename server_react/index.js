const express = require("express")
const app = express()
const connection = require("./main")
var bodyParser = require('body-parser')
var cors = require('cors')

var axios = require("axios").default; 
//middlerware works like a broker between sender and receiver or request and response


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())




// where we will have to fetch data from server 


const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {
    Indices: 'NIFTY 50'
  },
  headers: {
    'X-RapidAPI-Key': '67e63e8089msh450e0c700daabd7p17e0b9jsn3e27fb322d83',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};




// EVERYTHING EXCEPT THE POST REQUEST 
// SECTION IS SAME AS EARLIER. 
// HANDLING THE POST REQUEST ON /DATA ROUTE. 
app.post("/data", function(req, res) { 
    console.log("body: ", req.body)

    var itemSelectedFromDropdown = req.body.stockSelected; 
    axios.request(options).then(function (response) { 
        console.log("response.data: ",response.data)
            var dataFromResponse = response.data; 
            for(var i = 0; i<dataFromResponse.length; i++)
            { 
                if(dataFromResponse[i].symbol == itemSelectedFromDropdown)
                {                    
                    var dataOfStock = dataFromResponse[i]; 
                    res.send("<html><body> <h1><strong> " + dataOfStock.symbol + "</strong></h1>"+ 
                    "<h1> Open: " + dataOfStock.open + "</h1>" + 
                    "<h1> Day High: "+ dataOfStock.dayHigh + "</h1>" + 
                    "<h1> Day Low: "+ dataOfStock.dayLow + "</h1>" + 
                    "<h1> Last Price: "+ dataOfStock.lastPrice + "</h1>" + 
                    "<h1> Previous Close: "+ dataOfStock.previousClose + "</h1>" + 
                    "<h1> Year Low: "+ dataOfStock.yearHigh + "</h1>" + 
                    "<h1> Year Low: "+ dataOfStock.yearLow + "</h1>" + 
                    "<h1> Last Update Time: "+ dataOfStock.lastUpdateTime + "</h1>" + 

                    "</body></html>") 
                    // res.json(dataOfStock)
                } 
            } 
    
    }).catch(function (error) { 
    console.error(error) 
    res.json({message: "Error: ", error})
    }); 
}); 






app.get("/",(req,res)=>{
    connection.query("select * from new_tb",(err,data)=>{
            res.json(data)
    })
})

app.post("/post",(req,res)=>{
console.log(req.body)

const email=req.body.email
const password=req.body.password

connection.query("insert into new_tb(email,password)  values(?,?)",[email,password],(err,data)=>{    
res.json(data)    
})
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    
    const name=req.body.name
    const email=req.body.email
    
    connection.query("select * from new_tb where name=? and email=?",[name,email],(err,data)=>{    
    res.json(data)    
    })
    })


app.put("/put/:id",(req,res)=>{
    const id = req.params.id
    const name=req.body.name
    const email=req.body.email
    connection.query("update new_tb set name=? email=? where id=?",[name,email,id],(err,data)=>{
        res.json(data)
    })
})


app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    connection.query("Delete from new_tb where id=?",[id],(err,data)=>{
        res.json(data)
    })
})





app.listen(4500,(err)=>{
    console.log("connected.....!")
})







