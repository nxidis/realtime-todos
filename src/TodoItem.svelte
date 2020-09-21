<script>

    import { createEventDispatcher } from 'svelte';

    import { Button } from 'sveltestrap';
    import { Col, Container, Row } from 'sveltestrap';

    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>


    <Row>
        {#if complete}
            <Col xs align="left">
                <Button color="success" on:click={toggleStatus}> <span class="oi oi-circle-x"></span> </Button>
            </Col>
            <Col sm="7">
                <span class="is-complete">{ text }</span>
            </Col>
        {:else}
            <Col xs align="left">
                <Button color="primary" on:click={toggleStatus}> <span class="oi oi-circle-check"></span> </Button>
            </Col>
            <Col sm="7">
                <span >{ text }</span>
            </Col>
        {/if}
            <Col xs align="right">
            <Button color="light" on:click={remove}> <span class="oi oi-trash"></span> </Button>
            </Col>
    </Row>