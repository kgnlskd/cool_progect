<script lang="ts">
    import { GetToDos,todos } from "$lib/store/ToDoStore";
    import { Card, CardBody, Col, Container, Row } from "@sveltetrap/sveltestrap";
    import { onMount } from "svelte";
    onMount(()=>{
        async function FetchTodos() {
            await GetToDos();
        }
        FetchTodos();
    }

    )
</script>
<svelte:head>
    <tittle>Chorniy</tittle>
</svelte:head>

<Container>
    <Row>
        {#each $todos as todo}
        <Col md={2}>
            <Card>
                <CardBody>{todo.title}</CardBody>
            </Card>

        </Col>
        {/each}
    </Row>
</Container>