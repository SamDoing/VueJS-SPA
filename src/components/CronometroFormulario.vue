<template>
    <section>
        <strong>{{ tempoDecorrido }}</strong>
    </section>
    <div class="botoes-container is-justify-content-space-around is-flex">
        <button class="button" @click="iniciar()" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
        </button>
        <button class="button" @click="finalizar()" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'CronometroFormulario',
    emits: ['cronometroFinalizado'],
    data () {
        return {
            tempoEmSegundos: 0,
            cronometroHandler: 0,
            cronometroRodando: false
        }
    },
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().slice(11,19);
        }
    },
    methods: {
        iniciar(): void {
            if(this.cronometroRodando)
                return;
            this.cronometroHandler = setInterval(() => { this.tempoEmSegundos++ }, 1000);
            this.cronometroRodando = true;
        },
        finalizar(): void {
            clearInterval(this.cronometroHandler)
            this.cronometroRodando = false;
            this.$emit('cronometroFinalizado', this.tempoDecorrido);
            this.tempoEmSegundos = 0;
        }
    }
});
</script>

<style scoped>
    .botoes-container{
        width: 12rem;
    }
</style>