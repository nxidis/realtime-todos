<script>
    import TodoItem from './TodoItem.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    import { Button } from 'sveltestrap';
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
    import { Card, CardBody, CardHeader } from 'sveltestrap';

    import { Col, Container, Row } from 'sveltestrap';


    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'A new task';

    // Query requires an index, see screenshot below
    const query = db.collection('todos').where('uid', '==', uid).orderBy('created');

    const todos = collectionData(query, 'id').pipe(startWith([]));

    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    function removeItem(event) {
        const { id } = event.detail;
        db.collection('todos').doc(id).delete();
    }
</script>

<Card>
    <CardHeader>
        <h1>{$todos.length} Todo items</h1>
    </CardHeader>
    {#each $todos as todo}
    <Card>
        <CardBody color="light">
            <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        </CardBody>
    </Card>
	{/each}
</Card>

<FormGroup>
    <Label>Todo Title</Label>
    <Input type="text" bind:value={text}></Input>
</FormGroup>
<Button on:click={add}> Add Task</Button>
