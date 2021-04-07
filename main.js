

getData("London")


async function getData (shahar){
    let response = await fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${shahar}&school=1`)
    let encoding = await response.json()
    renderData(encoding)
}   

let tbody = document.querySelector('.tbody')

let obj = {
    x: 1
}

// obj.x


function renderData(malumot){
    tbody.textContent = ""
    let timings = malumot.data.timings
    for(let item in timings){
        let newTrElement = document.createElement('tr')
        let newTimeNameElement = document.createElement('td')
        let newTimeValueElement = document.createElement('td')

        newTimeNameElement.textContent = item
        newTimeValueElement.textContent = timings[item]

        newTrElement.appendChild(newTimeNameElement)
        newTrElement.appendChild(newTimeValueElement)
        
        tbody.appendChild(newTrElement)
    }
}
