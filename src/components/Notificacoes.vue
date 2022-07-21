<template>
  <div class="notificacoes">
    <article class="message"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
      :class="notificacao.tipo"
    >
      <div class="message-header">
        {{ notificacao.titulo }}
        <span class="icon is-small remove" @click="excluir(notificacao.id)">
            <i class="fas fa-trash"></i>
        </span>
    </div>
      <div class="message-body">{{ notificacao.texto }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { key, useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { EXCLUIR_NOTIFICACAO } from "@/store/tipo-mutacoes"

export default defineComponent({
  name: "NotificacoesVue",
  setup() {
    const store = useStore();   
    return {
      notificacoes: computed(() => store.state.notificacoes),
      store
    };
  },
  methods: {
    excluir (id: number) {
        this.store.commit(EXCLUIR_NOTIFICACAO, id)
    }
  }
});
</script>
<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  margin: 2px;
  width: 300px;
  padding: 8px;
  z-index: 104;
}
.remove{
    color: blueviolet;
    cursor: pointer;
}
</style>
