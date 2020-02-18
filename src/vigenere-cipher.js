class VigenereCipheringMachine {
    constructor(isRev) {
        if (typeof isRev == 'undefined') {
            this.isRev = true;
        } else {
            this.isRev = isRev;
        }
    }
    encrypt(m, k) {
        m = m.toUpperCase();
        k = k.toUpperCase();
        let res = '';
        let moduleN = '';
        let j = 0;
        for (let i = 0; i < m.length; i++) {
            if (/[A-Z]/.test(m[i])) {
                let mesNum = m.charCodeAt(i) - 65;
                let keyNum = k.charCodeAt(j) - 65;
                let sum = mesNum + keyNum;
                moduleN = sum >= 26 ? sum - 26 : sum;
                res += String.fromCharCode(moduleN + 65);
                j === k.length - 1 ? j = 0 : j++;
            } else {
                res += m[i];
            }
        }

        return this.isRev ? res : res.split('').reverse().join('');
    }

    decrypt(m, k) {
        m = m.toUpperCase();
        k = k.toUpperCase();
        let res = '';
        let moduleN = '';
        let j = 0;
        for (let i = 0; i < m.length; i++) {
            if (/[A-Z]/.test(m[i])) {
                let mesNum = m.charCodeAt(i) - 65;
                let keyNum = k.charCodeAt(j) - 65;
                let sum = mesNum + 26 - keyNum;
                moduleN = sum >= 26 ? sum - 26 : sum;
                moduleN < 0 ? moduleN = moduleN + 26 : false;
                res += String.fromCharCode(moduleN + 65);
                j === k.length - 1 ? j = 0 : j++;
            } else {
                res += m[i];
            }
        }

        return this.isRev ? res : res.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;