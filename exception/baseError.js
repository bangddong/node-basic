class BaseError extends Error {
    constructor(status, message) {
        super(message);

        this.status = status;
        this.name = message;
    }
}

module.exports = BaseError;