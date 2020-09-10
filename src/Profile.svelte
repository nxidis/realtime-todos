<script>
    import { Col, Container, Row } from 'sveltestrap';
    
    export let displayName;
    export let photoURL;
    export let uid;
</script>
<style>
    .user-id {
        font-size: small;
    }
</style>

<Row>
    <Col >
        <h3>{ displayName }</h3>
    </Col>
</Row>
<Row>
    <Col>
    <img src={ photoURL } width="100" alt="user avatar">
    </Col>
</Row>
<Row>
    <Col>
        <p class="user-id">Google UID: { uid }</p>
    </Col>
</Row>