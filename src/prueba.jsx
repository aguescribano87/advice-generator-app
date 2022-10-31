import { useQueryClient } from 'react-query'

export const Prueba = () => {
    const queryClient = useQueryClient()

    console.log(queryClient.getQueriesData('advice'))
    return "soy una prueba"

}