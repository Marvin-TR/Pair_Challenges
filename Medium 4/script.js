var car = {
    make: 'Nissan',
    model: 'Silvia',
    year:'2000',
    milage: 180000,
    color: 'Black',
    newMilage: 0,

    driveToWork() {
        if (this.newMilage === 0){
            this.newMilage += this.milage + 33;
            console.log(`Old milage: ${this.milage} | New milage ${this.newMilage}`)
        } else {
            console.log(`Old milage: ${this.newMilage} | New milage ${this.newMilage + 33}`)
            this.newMilage += 33;
        }
        
    },

    driveAroundTheWorld() {
        if (this.newMilage === 0){
            this.newMilage += this.milage + 24000;
            console.log(`Old milage: ${this.milage} | New milage ${this.newMilage}`)
        } else {
            console.log(`Old milage: ${this.newMilage} | New milage ${this.newMilage + 24000}`)
            this.newMilage += 24000
        }
    },

    runErrands() {
        if (this.newMilage === 0){
            this.newMilage += this.milage + 30;
            console.log(`Old milage: ${this.milage} | New milage ${this.newMilage}`)
        } else {
            console.log(`Old milage: ${this.newMilage} | New milage ${this.newMilage + 30}`)
            this.newMilage += 30
        }
    }

}

car.driveAroundTheWorld();
car.runErrands();
car.driveToWork();

