class Vehicle{
    constructor(capacity,wheels,enterprise){
        this.capacity = capacity;
        this.wheels = wheels;
        this.enterprise = enterprise;
    }

    use(gas){
        while(gas >= 0){
            console.log("Gas: ",gas);
            gas--;
        }
        console.log("Hora de abastecer...");
    }
}

const car = new Vehicle(4,4,"Honda");

car.use(20)