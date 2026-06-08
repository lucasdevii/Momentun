export const asyncReqWrapper = (fn) => {
    return async (...args) => {
        try{
            const res = await fn(...args)

            return {
                success: true,
                data: res.data,
                status: res.status
            }
        }catch(error){
            return {
                success: false,
                error,
                status: error.response?.status || 500
            }
        }
    }
}