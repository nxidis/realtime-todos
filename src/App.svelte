<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    import { Col, Container, Row } from 'sveltestrap';
    import { Button } from 'sveltestrap';

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
</svelte:head>


    <Container>
            <Navbar>
                <NavbarBrand>
                    <svg class="bi" width="32" height="32" fill="currentColor">
                        <use xlink:href="bootstrap-icons.svg#list-check"/>
                    </svg>
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
                <Col xs="3">
                    <Profile {...user} />
                </Col>
                <hr>
                <Col md="8">
                    <Todos uid={user.uid} />
                </Col>
                <Col xs="2"></Col>
            {:else}
                <Col xs="2"></Col>
                <Col md="8">
                    <h1>Sign In to Realtime Todo's</h1>
                    <p>This is a simple todo application written with 
                        Svelte & Bootstrap using a Firebase backend. 
                        If you have a Google account, you can login to 
                        track all of the things on your list. 
                    </p>
                </Col>
                <Col xs="2"></Col>
            {/if}
            </Row>
    </Container>