import { useQuery } from 'react-query'
const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    return res.json()
}

export const useAdvice = () => {

    return useQuery(['advice'], getAdvice, {
        retry: 1,
        retryDelay:2000
    })
}