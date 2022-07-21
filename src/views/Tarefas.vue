<template>   
    <FormularioVue @nova-tarefa-finalizada="adicionarTarefa"/>
    <div class="lista">
        <TarefaVue v-for="(tarefa, index) in tarefas" :index="index" :key="index" :tarefa="tarefa"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioVue from '../components/FormularioVue.vue';
import TarefaVue from '../components/TarefaVue.vue';
import ITarefa from "../interfaces/ITarefa"

export default defineComponent({
    name: "TarefasVue",
    components: {
        FormularioVue,
        TarefaVue
    },
    data() {
        return {
        tarefas: [] as ITarefa[]
        }
    },
    methods : {
        adicionarTarefa(tarefa : ITarefa) : void {
        this.tarefas.push(tarefa);
        }
    },
});

</script>