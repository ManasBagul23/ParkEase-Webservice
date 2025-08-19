class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = null
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = stack || new Error().stack;

        if(stack) {
            this.stack = stack;
        }
        else {
            this.stack = new Error().stack;
        }
    }
}

export { ApiError };