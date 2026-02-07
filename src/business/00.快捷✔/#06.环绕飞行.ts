
import { Flow } from 'lodash-decorators'
import { kebabCase } from 'lodash';

class Person {
    @Flow('getName', kebabCase)
    logName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Joe', 'Smith');

person.logName(); // joe-smith