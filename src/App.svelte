<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    import { Col, Container, Row } from 'sveltestrap';
    import {Button} from 'sveltestrap';

    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link href="/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
</svelte:head>


    <Container>
            <Navbar>
                <NavbarBrand>
                    <span class="oi oi-list" ></span>
                    Realtime Todos
                </NavbarBrand>
                
                    {#if user}
                    <Button on:click={ () => auth.signOut() }>Logout</Button>
                    {:else}
                    <Button on:click={login}>Signin with Google</Button>
                    {/if}
                
            </Navbar>
        <Row>
            {#if user}
                <Col xs="4">
                    <Profile {...user} />
                </Col>
                <hr>
                <Col md="8">
                    <Todos uid={user.uid} />
                </Col>
            {/if}
            </Row>
    </Container>