import { useQueryClient } from 'react-query'

export const Prueba = () => {
    const queryClient = useQueryClient()

    console.log(queryClient.getQueriesData("advice")[0][1].slip.advice)

    return (
        <>
        {queryClient.getQueriesData("advice")[0][1].slip.advice}
        </>
    )
}