const express = require("express");
const router = express.Router();
const searchconnection = require("../models/searchconnection");
const axios = require("axios");
const _ = require("lodash");

router.post("/", async (req, res) => {

  const kword = req.body.kword;
  let newArray = [];
  console.log(kword);

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${kword}&apikey=ORFSBUQ3L0MBWU3T`
    );
if(response && response.data) {


      newArray = response.data.bestMatches.map((data) => {
     console.log(response.data.bestMatches)

      return
         {
          Symbol: "1. symbol"
          //symbol: data.bestMatches.symbol,
          // arrivalTimestamp: data.firstSeen * 1000,
          // departureTimestamp: data.lastSeen * 1000,
          // arrivalDateTimestamp: new Date(data.firstSeen * 1000),
          // arrivalTime: new Date(data.firstSeen * 1000).getTime(),
          // departureDateTimestamp: new Date(data.lastSeen * 1000),
          // departureTime: new Date(data.lastSeen * 1000).getTime(),
          // terminal: terminal,
       };
      })
      }
      // .sort((a, b) => parseInt(a.arrivalTime) - parseInt(b.arrivalTime));
     // console.log(response.data.bestMatches)
  // await searchconnection.collection.insertMany(newArray.flat());
   res.send(newArray);
  } catch (err) {
    console.log(err);
    res.send("Data is not available.");
  }

});

// router.post('/',async(req,res)=>{ç
//    const airportData = new Airport({
//        name : req.body.name,
//        terminal: req.body.terminal,
//        arrivalDate: req.body.arrivalDate,
//        departureDate: req.body.departureDate
//    });

//    try{
//     const saved = await airportData.save()
//     res.json(saved);
//    }catch(err){
//        res.send('Error')
//    }

// });

//http://localhost:5000/airport/T2
// router.get('/:terminal',async(req,res)=>{
//     try{
//         console.log(req.params.terminal);
//     const airportTerminalData = await Airport.find({terminal:req.params.terminal});
//     res.json(airportTerminalData);
//     }catch(err){
//         res.send('Error', err);
//     }
// });

router.get("/:terminal", async (req, res) => {
  try {

    const airportData = await Airport.find({
      arrivalTimestamp: { $gte: 1525942800 * 1000 },
      terminal: req.params.terminal,
    }).sort({ arrivalTime: 1 });

    let extractedAirportData = airportData.map(
      ({ arrivalTimestamp, departureTimestamp, terminal }) => ({
        arrivalTimestamp,
        departureTimestamp,
        terminal
      })
    );
    let flag = 0;

    let result = [];
    getNonConflictedPlanes(extractedAirportData);

    function getNonConflictedPlanes(data) {
      if (flag == 0) {
        result.push(data[0]);
        data.shift();
        flag++;
        getNonConflictedPlanes(data);
      }
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].arrivalTimestamp >
          result[result.length - 1].departureTimestamp
        ) {
          result.push(data[i]);
          data.splice(0, i);
          if (data.length) {
            getNonConflictedPlanes(data);
          } else {
            break;
          }
        }
      }
    }

    res.json(result);
  } catch (err) {
    res.send("Error", err);
  }
});

module.exports = router;