export const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')

    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    
    return res.json()
}