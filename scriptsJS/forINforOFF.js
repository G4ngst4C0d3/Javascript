const cars = [
    {
        modelo: "F50",
        marca: "Ferrari",
        anoFabricacao: 2009
    },
    {
        modelo:  "Veyron",
        marca:  "Bugatti",
        anoFabricacao: 2018

    }
]


for( let key in cars){   //for in trás os dados junto com seus respectivos íncides//
    console.log(key, cars[key]);
}

for(let valor of cars){
    console.log(valor);
}