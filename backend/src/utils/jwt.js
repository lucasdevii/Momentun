import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
    try {
        return {
            error: null,
            payload: jwt.verify(token, process.env.JWT_SECRET)
        };
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return {
                error: 'expired',
                payload: null
            };
        }

        if (err instanceof jwt.JsonWebTokenError) {
            return {
                error: 'invalid',
                payload: null
            };
        }

        return {
            error: 'unknown_error',
            payload: null
        };
    }
};