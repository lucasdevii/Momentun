export const asyncWrapper = async (fn) => {
    return async (...args) => {
        try{
            await fn(...args)
        }catch(err){
            console.log(err)
        }
    }
}