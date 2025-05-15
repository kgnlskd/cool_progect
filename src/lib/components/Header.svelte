<script lang="ts">
    import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from "@sveltestrap/sveltestrap";
</script>

<Navbar class="shadow-lg">
    <NavbarBrand href="/">Logotip</NavbarBrand>

    <Nav>
        <NavItem>
            <NavLink href="/about">О нас</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/contacts">Контакты</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/services">Наши услуги</NavLink>
        </NavItem>
    </Nav>
</Navbar>
  