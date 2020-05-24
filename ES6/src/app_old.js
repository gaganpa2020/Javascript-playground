class Drone{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let drone = new Drone('A123', 'Gagan');

console.log(drone.id + ', ' + drone.name);


console.log(typeof drone);
console.log(typeof Drone);
console.log(drone instanceof Drone);