import _ from 'underscore';
import {Car} from '../classes/Car.js';
import {Drone} from '../classes/Drone.js';
import {DtaError, DataError} from './data-error.js';

export class FleetDataService{
    constructor(){
        this.cars = [];
        this.drone = [];
        this.all = []
        this.errors = [];
    }

    loadData(fleet){
        for(let data of fleet){
            switch(data.type){
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;

                case 'drone':                    
                    let drone = this.loadDrone(data);
                    this.drone.push(drone);
                    break;

                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }

        this.all = _.union(this.cars, this.drone);
    }

    loadCar(car){
        try{
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        }
        catch(e){
            this.errors.push(new DataError('error loading car', car));
        }
    }

    loadDrone(drone){
       try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
       }
       catch(e){
            this.errors.push(new DataError('error loading drone', drone));
       }
    }
}