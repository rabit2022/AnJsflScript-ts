/**
 * @file: #06.环绕飞行.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */


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