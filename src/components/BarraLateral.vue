<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo">
            <nav class="panel mt-5">
                <ul>
                    <li>    
                        <router-link to="/" class="link">
                            <i class="fas fa-tasks"></i>
                            Tarefas
                        </router-link>
                    </li>
                    <li>    
                        <router-link to="/projetos" class="link">
                            <i class="fas fa-project-diagram"></i>
                            Projetos
                        </router-link>
                    </li>
                    <li>
           
                    </li>
                </ul>
            
            </nav>
        </h1>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BarraLateral'
});
</script>

<style scoped>
    header {
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        padding: 1rem;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }

    .link {
        color: beige;
        font-size: large;
    }
</style>