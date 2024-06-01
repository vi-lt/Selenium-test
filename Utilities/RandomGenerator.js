class RandomGenerator {
    static generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static generateRandomStringNumber(length) {
        const characters = '0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static generateRandomName() {
        return 'name' + this.generateRandomString(5);
    }

    static generateRandomId() {
        return 'id' + this.generateRandomStringNumber(5);
    }

    static generateRandomEmail() {
        const domains = ['example.com', 'test.com', 'sample.org'];
        return this.generateRandomString(5) + '@' + domains[Math.floor(Math.random() * domains.length)];
    }

    static generateRandomPhone() {
        const randomDigit = () => Math.floor(Math.random() * 10);
        return '+1' + Array(10).fill(0).map(randomDigit).join('');
    }
}

module.exports = RandomGenerator;