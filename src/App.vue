<template>
  <div class="app-container">
    <header class="navbar">
      <div class="logo">Panel de Control Web</div>
      <nav class="nav-links">
        <router-link to="/v-if">Inventario (v-if)</router-link>
        <router-link to="/v-show">Ajustes (v-show)</router-link>
        <router-link to="/v-for">Registros (v-for)</router-link>
        <router-link to="/v-bind">Módulos (v-bind:key)</router-link>
      </nav>
    </header>
    
    <main class="main-content">
      <div class="card">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: #111827;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
.nav-links a:hover {
  color: #111827;
  background-color: #f3f4f6;
}
.nav-links a.router-link-active {
  color: #2563eb; /* Azul corporativo */
  background-color: #eff6ff;
}
.main-content {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
</style>