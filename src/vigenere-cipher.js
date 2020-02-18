class VigenereCipheringMachine {
    constructor(isRev) {
        this.isRev = isRev != undefined ? isRev : true;
    }
    encrypt(m, k) {
        let res = this.crypt(m, k, true);
        this.isRev ? res : res = res.split('').reverse().join('');
        return res;
    }

    decrypt(m, k) {
        let res = this.crypt(m, k, false);
        this.isRev ? res : res = res.split('').reverse().join('');
        return res;
    }

    crypt(m, k, enc) {
        m = m.toUpperCase();
        k = k.toUpperCase();
        let res = '';
        let moduleN = '';
        let j = 0;
        for (let i = 0; i < m.length; i++) {
            if (/[A-Z]/.test(m[i])) {
                let mesNum = m.charCodeAt(i) - 65;
                let keyNum = k.charCodeAt(j) - 65;

                if (enc) {
                    let sum = mesNum + keyNum;
                    moduleN = sum >= 26 ? sum - 26 : sum;
                } else {
                    let sum = mesNum + 26 - keyNum;
                    moduleN = sum >= 26 ? sum - 26 : sum;
                    moduleN < 0 ? moduleN = moduleN + 26 : false;
                }
                res += String.fromCharCode(moduleN + 65);
                j === k.length - 1 ? j = 0 : j++;
            } else {
                res += m[i];
            }
        }

        return res;
    }


}

module.exports = VigenereCipheringMachine;