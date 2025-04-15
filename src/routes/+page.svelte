<script lang="ts">
    import { GetToDos,todos } from "Slib/store/ToDoStore";
    import { Card, CardBody, Container } from "@sveltestrap/sveltestrap"
    import { onMount } from "svelte";
   
    onMount(()=>{
        async function FetchTodos(){
            await GetToDos();
        }
        FetchTodos();
    })
</script>
  <svelte:head>
    <tittle>Chorniy</tittle>
  </svelte:head>
<Container>
    {#each $todos as todo}
    <Card>
        
    </Card>
    
    </Container>
