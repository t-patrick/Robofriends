class Penis {
    constructor(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}



let p = new Penis(5);

let me = {
    firstName: 'Tim',
    lastName: 'Patrick',
    penis: p
}

const moddy = {
    x: 42, 
    getX: function() {
        return this.x;
    }
}

const unboundGetX = function() {
    if (this === me) {
        return this.penis;
    }
    if (this === moddy) {
        return this.x;
    } else {
        return undefined;
    }
}

console.log(me.name);


const bindIt = unboundGetX.bind(moddy);
console.log(bindIt());
const bindMe = unboundGetX.bind(me);
console.log(bindMe())