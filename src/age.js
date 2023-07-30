export class Person {
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = this.age * .24;
    return this.age;
  }
  venus(){
    this.age = this.age * .62;
    return this.age;
  }
  mars(){
    this.age = this.age * 1.88;
    return this.age;
  }
  jupiter(){
    this.age = this.age * 11.86;
    return this.age;
  }
}

export class YearsPassed {
    constructor(current, past, total){
    this.current = current;
    this.past  = past;
    this.total= total;
    }

    earthPast(){
        this.total = (this.current-this.past);
        return this.total;
    }
    mercuryPast(){
        this.total = (this.current - this.past);
        this.total = (this.total * .24);
        return this.total;
    }
    venusPast(){
        this.total = (this.current - this.past);
        this.total = (this.total * .62);
        return this.total;
    }
    marsPast(){
        this.total = (this.current - this.past);
        this.total = (this.total * 1.88);
        return this.total;
    }
    jupiterPast(){
        this.total = (this.current - this.past);
        this.total = (this.total * 11.86);
        return this.total;
    }
}

export class FutureAge {
    constructor(future, current, total){
        this.future = future;
        this.current = current;
        this.total = total;
    }
    earthFuture(){
        this.total = (this.future - this.current);
        return this.total;
    }
    mercuryFuture(){
        this.total = (this.future - this.current);
        this.total = this.total * .24;
        return this.total;
    }
    venusFuture(){
        this.total = (this.future - this.current);
        this.total = this.total * .62;
        return this.total;
    }  
    marsFuture(){
        this.total = (this.future - this.current);
        this.total = this.total * 1.88;
        return this.total;
    }   
}















