export class Vehicle {
    // If you don't have a default consturctor for javascript class, 
    // it will provide one by default. 
    constructor(license, model, latlong){
        this.license = license; 
        this.model = model;
        this.latlong = latlong;
    }
}
