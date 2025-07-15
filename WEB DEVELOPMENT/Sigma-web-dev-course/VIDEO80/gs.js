class User {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short");
            return;
        } else {
            this._name = value;
        }
    }
}

let user = new User("Bal");
console.log(user.name); // Balaji

user.name = "Balaji"; // Valid name
console.log(user.name); // Balaji