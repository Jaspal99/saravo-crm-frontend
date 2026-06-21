import {  useQuery } from "@tanstack/react-query"

export type Todo ={id:1;title:string;completed:boolean}

const fetchTodos = async (
):Promise<Todo[]> =>{
    console.log("fetchTodos endpoint:", process.env.NEXT_PUBLIC_BACKEND_URL+'todo');
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+'todo/?id=1');
    if(!res.ok) throw new Error('Failed to fetch todos');
    return res.json()
}

export const useTodos = () => useQuery<Todo[],Error>(
    {
        queryKey:['todos'],
        queryFn:fetchTodos
    }
)