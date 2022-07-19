class AuthError extends BaseError {
    constructor(error, message) {
        super(message);

        this.name = 'AuthError';
        this.code = error;
        this.status = 301;
    }
}