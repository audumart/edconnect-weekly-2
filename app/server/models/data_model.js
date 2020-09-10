class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        let obj = this.data.find(obj => obj.id == id)
        if (obj === undefined) {
            return null;
        } else {
            return obj;
        }
        
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
       let item = this.data.find(item => item.id == id);
       if (item === undefined){
           return false;
       }
       else{
           for (var x in item){
               for (var y in obj){
                   if (x === y){
                       item[x] = obj[y];
                   }
                   else {
                       continue;
                   }
               }
           }
           return true;
       } 
    }

    delete(id) {
       var index = this.data.map(function(item){return item.id;}).indexOf(id);
       if (index > -1){
           this.data.splice(index, 1);
           return true;
       } else if(index === -1){
           return false;
       }
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;