export const asyncReqWrapper = (fn) => {
    return async (...args) => {
        try{
            const res = await fn(...args)

            return {
                success: true,
                data: res.data
            }
        }catch(error){
            return {
                success: false,
                error
            }
        }
    }
}