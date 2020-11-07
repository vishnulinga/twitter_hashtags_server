const Twit = require('twit')
const db=require("./firebase_connect")

const apikey = 'yWhFICmNaonZj4uyC13iWDrkV'
const apiSecretKey = 'TdXJ1svnyhnVfTPOAQ5xe58VO0WVPVPt44WC0pJgW42Gz2vDL3'
const accessToken = '925719265-0r0TL7A4eKp1GYAAI0s4eBTJUB0T2jfYaLO9BJPB'
const accessTokenSecret = '1PKIbVqgOMMvf6LYJ7b7rjiGP2mUFDh3nNoGiIffVe9i1'

const T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

  // ['#Tesla','#Audi',"Ferrari","Lamborghini",'BMW','McLaren','Maserati','Toyota','Bentley','Ford' ]
    var stream = T.stream('statuses/filter', { track: ['#Tesla','#Audi',"Ferrari","Lamborghini",'BMW','McLaren','Maserati','Toyota','Bentley','Ford' ]})
    stream.on('tweet', function (tweet) {
       
      
      
      if(tweet.text.includes('Maserati'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Maserati").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Tesla'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Tesla").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Audi'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Audi").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Ford'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Ford").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Ferrari'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Ferrari").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('BMW'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("BMW").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Lamborghini'))
      {
        
        console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Lamborghini").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      
      
      }

      if(tweet.text.includes('McLaren'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("McLaren").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Bentley'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Bentley").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

      if(tweet.text.includes('Toyota'))
      {console.log(tweet.text)
      var data={id:tweet.timestamp_ms,length:tweet.text.length}
        db.collection("Toyota").doc(`${tweet.timestamp_ms}`).set(data)
      .then(()=>{console.log("success")})
        .catch((error)=>{
            console.log(error)
        })
      }

    
    })
   
})();