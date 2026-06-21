"use client";
import { useTodos } from "@/hooks/useTodos";
import { PageLayout, Container, Button, Card } from "../../components";

export default function Page() {
  const { data: todos, isLoading } = useTodos();
  console.log("todoss", todos);

  return (
    <PageLayout>
      <Container>
        <h1 className="text-2xl font-semibold mb-4">Todos</h1>
        <div className="grid grid-cols-2 gap-4">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : todos?.length ? (

            todos.map(todo => 
              <Card title={<span className="font-medium">{todo.title}</span>}>
              <p className="text-sm text-gray-700">
                {todo.description}
              </p>
              <div className="mt-3 flex gap-2">
                {todo.completed ? <p>done</p>:<p>pending</p>}
                <p>{todo.created_at}</p>
              </div>
            </Card>

            )
            
          ) : null}
        </div>
      </Container>
    </PageLayout>
  );
}
