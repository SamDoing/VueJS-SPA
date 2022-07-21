<template>
    <div class="box tarefa-box">
        <div class="columns">
            <div class="column is-6" role="form">
                <input type="text" class="input" placeholder="Tarefa" v-model="tarefa"/>
            </div>
            <div class="column is-2">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                        >
                        {{ projeto.nome }}
                        </option>
                    </select>
            </div>
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-around">
                    <CronometroFormulario @cronometro-finalizado="adicionarTarefa"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref, } from "vue";
import CronometroFormulario from "./CronometroFormulario.vue";
import ITarefa from "../interfaces/ITarefa"
import { useStore } from "vuex";
import { key } from "@/store";
import { computed } from "@vue/reactivity";

export default defineComponent({
    name: "FormularioVue",
    components: { CronometroFormulario },
    data () {
        const store = useStore(key);
        return {
            tarefa: '',
            idProjeto: '',
            projetos: computed(() => store.state.projetos)
        }
    },
    emits: ['novaTarefaFinalizada'],
    methods: {
        adicionarTarefa(tempoDecorrido : string) : void {
            
            this.$emit(
                'novaTarefaFinalizada',
                
                { 
                    duracao: tempoDecorrido,
                    tarefa : this.tarefa,
                    //projeto : this.projetos.find((proj: { id: string; }) => proj.id == this.idProjeto)

                } as ITarefa)
            this.tarefa = "";
        }
    }
});
</script>

<style scoped>
</style>