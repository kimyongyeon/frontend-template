class GlobalException extends Ecxeption {
    constructor() {
    }

    constructor(str) {
        console.log(str);
    }

    constructor(str, err) {
        console.error(str, err);
    }
}