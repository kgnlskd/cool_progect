<script lang="ts">
    import Header from "$Lib/components/Header.svelte";
    import {Container, Styles} from "@sveltestrap/sveltestrap";

</script>

<Styles/>

<Container>
    <Header/>
    {@render children()}
</Container>