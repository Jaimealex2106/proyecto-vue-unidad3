<template>
  <div class="view-container">
    <h2 class="title">Configuración del Servidor (v-show)</h2>
    <p class="description">Utiliza <code>v-show</code> para alternar la visibilidad de elementos en el DOM sin destruirlos, ideal para menús desplegables o configuraciones.</p>
    
    <div class="panel">
      <div class="header-panel">
        <h3>Parámetros de Red</h3>
        <button @click="showAdvanced = !showAdvanced" class="btn">
          {{ showAdvanced ? 'Ocultar Avanzado' : 'Ver Avanzado' }}
        </button>
      </div>
      
      <div class="basic-settings">
        <p><strong>Dirección IP:</strong> 192.168.1.100</p>
        <p><strong>Estado:</strong> Conectado</p>
      </div>

      <!-- Usando v-show -->
      <div v-show="showAdvanced" class="advanced-settings">
        <h4>Configuración Avanzada</h4>
        <p><strong>Máscara de Subred:</strong> 255.255.255.0</p>
        <p><strong>Puerta de Enlace:</strong> 192.168.1.1</p>
        <p><strong>DNS Principal:</strong> 8.8.8.8</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showAdvanced = ref(false)
</script>

<style scoped>
.title { color: #111827; margin-bottom: 0.5rem; }
.description { color: #6b7280; margin-bottom: 2rem; }
.panel { border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; }
.header-panel { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; }
.btn { background-color: #2563eb; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; transition: 0.2s; }
.btn:hover { background-color: #1d4ed8; }
.basic-settings, .advanced-settings { padding: 1.5rem; }
.advanced-settings { background-color: #1e293b; color: #f8fafc; border-top: 1px solid #e5e7eb; }
.advanced-settings h4 { margin-bottom: 0.5rem; color: #94a3b8; }
</style>