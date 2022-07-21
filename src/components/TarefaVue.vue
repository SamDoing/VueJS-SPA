<template>
    <div class="tarefa box has-text-weight-bold">
        <div class="columns">
            <div class="column is-10">
                {{tarefa?.tarefa || ( "Tarefa sem nome #" + (index+1) )}}
            </div>
            <div class="column">{{tarefa?.duracao}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "TarefaVue",
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            require: true
        },
        index : {type: Number, required: true}
    }
});
</script>

<style scoped>
    .tarefa {
        border-radius: 10px;
        background: #16d56c;
        margin-bottom: 0.75rem;
    }
</style>