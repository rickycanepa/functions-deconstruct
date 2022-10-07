// I like to build computers, these are functions explaining the steps generally

let seatRam = () => {
    console.log("Seat ram in ram slots of motherboard")
}

let installProc = () => {
    console.log("Seat processor in mobo and apply dab of thermal paste, and install the CPU cooler")
}

let installGPU = () => {
    console.log("Seat GPU in mobo")
}

let installPSU = () => {
    console.log("Plug PSU into components")
}

seatRam()
installProc()
installGPU()
installPSU()

let subtract = (n1, n2) => {
    let diff = n1 - n2
    return diff
}

let divide = (n1, n2) => {
    let quotient = n1 / n2
    return quotient
}

let multiply = (n1, n2) => {
    let mult = n1 * n2
    return mult
}

let square = (n1) => {
    squared = n1 * n1
    return squared
}

let addWheels = (obj) => {
    obj.wheels = 4
    return obj
}

let addEngine = (obj) => {
    obj.engine = "4.8L"
    return obj
}

let addSteeringWheel = (obj) => {
    obj.steeringWheel = "tilting"
    return obj
}

let addDriveTrain = (obj) => {
    obj.driveTrain = "Two wheel drive"
    return obj
}

carObj = {}
addWheels(carObj)
addEngine(carObj)
addSteeringWheel(carObj)
addDriveTrain(carObj)
console.log(carObj)

// let buyChocolate = () => {
//     let chocolate = {type: "Milk chocolate"}
//     return chocolate
// }

// let addFlavoring = (obj) => {
//     obj.flavor = "Mint"
//     return obj
// }

// let makeBarkMixture = (obj) => {
// if (obj.flavor === "Mint"){
//     obj.mixed = true
// } else {
//     obj.mixed = false
// }
// return obj
// }

// let bakeCandy = (obj) => {
//     if(obj.mixed == true){
//         obj.baked = true
//     } else {
//         obj.baked = false
//     }
//     return obj
// }

// let breakBark = (obj) => {
//     if(obj.baked = true){
//         let array = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
//         return array
//     }
// }


const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

let htmlMac = (obj) => {
    str = `<section id="Computer ${computer.id}>\n<h1>${computer.manufacturer} ${computer.make}</h1>\n<div>Model: ${computer.model}</div>\n<div>Memory: ${computer.specs.memory}</div>\n<div>Hard drive Space: ${computer.specs.hardDrive}</div>\n<div>Processor speed: ${computer.specs.processor} ${'Ghz'}\n</section>`
    return str
}
console.log(htmlMac(computer))