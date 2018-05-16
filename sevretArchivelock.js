"use strict";

function secretArchivesLock(lock, actions) {
    let sal = new SAL(lock, actions);
    return sal.solve();
}

class SAL {
    constructor(lock, actions) {
        this.lock = lock;
        this.actions = actions;
    }

    solve() {
        for(let action of this.actions) {
            switch(action) {
                case 'R':
                    this.pushRight();
                    break;
                case 'L':
                    this.pushLeft();
                    break;
                case 'D':
                    this.pushDown();
                    break;
                case 'U':
                    this.pushUp();
                    break;
                default:
                    break;
            }
        }
        return this.lock;
    }

    pushRight() {
        let lock = this.lock;
        let quantity = lock[0].length;
        this.lock = [];
        for(let [index, level] of lock.entries()) {
            let data = this.getLevel(level);
            let length = data !== null ? data.length : 0;
            this.lock[index] = '';
            for(let i = 0; i < quantity - length; ++i) {
                this.lock[index] += '.';
            }
            if(length > 0) {
                for(let i = 0; i < length; ++i){
                    this.lock[index] += data[i];
                }
            }
        }
    }

    pushLeft() {
        let lock = this.lock;
        let quantity = lock[0].length;
        this.lock = [];
        for(let [index, level] of lock.entries()) {
            let data = this.getLevel(level);
            let length = data !== null ? data.length : 0;
            this.lock[index] = '';
            if(length > 0) {
                for(let i = 0; i < length; ++i){
                    this.lock[index] += data[i];
                }
            }
            for(let i = length; i < quantity; ++i) {
                this.lock[index] += '.';
            }
        }
    }

    pushDown() {
        let lock = this.lock;
        let quantity = lock[0].length;
        this.lock = '';
        this.lock = new Array(lock.length).fill('');
        for(let i = 0; i < quantity; ++i) {
            let letters = [];
            for(let j = 0; j < lock.length; ++j) {
                let current = lock[j];
                let letter = current[i];
                if(letter.match(/[A-Z]/gi)) {
                    letters.push(letter);
                }
            }
            let counter = 0;
            for(let j = 0; j < lock.length; ++j) {
                if(j < lock.length - letters.length) {
                    this.lock[j] += '.';
                } else {
                    this.lock[j] += letters[counter++];
                }
            }
        }
    }

    pushUp() {
        let lock = this.lock;
        let quantity = lock[0].length;
        this.lock = '';
        this.lock = new Array(lock.length).fill('');
        for(let i = 0; i < quantity; ++i) {
            let letters = [];
            for(let j = 0; j < lock.length; ++j) {
                let current = lock[j];
                let letter = current[i];
                if(letter.match(/[A-Z]/gi)) {
                    letters.push(letter);
                }
            }
            let counter = 0;
            for(let j = 0; j < lock.length; ++j) {
                if(j >= letters.length) {
                    this.lock[j] += '.';
                } else {
                    this.lock[j] += letters[counter++];
                }
            }
        }
    }

    getLevel(level) {
        return level.match(/[A-Z]/gi);
    }
}
