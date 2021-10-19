function query(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve(locs)
        }, 5000);
    })
}



const locs = [
    {
        "name":"Haifa",
        "lat":32.794044,
        "lng":34.989571
    },
    {
        "name":"Tel Aviv",
        "lat":32.109333,
        "lng":34.855499
    },
    {
        "name":"Jerusalem",
        "lat":31.771959,
        "lng":35.217018
    },
    {
        "name":"Eilat",
        "lat":29.55805,
        "lng":34.94821
    }
]
