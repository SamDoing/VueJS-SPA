import { TipoNotificacao } from './../interfaces/INotificacao';
import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { ADICIONAR_NOTIFICACAO, ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_NOTIFICACAO, EXCLUIR_PROJETO } from "./tipo-mutacoes";
import INotificacao from "@/interfaces/INotificacao";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [{
            id: 1,
            titulo: "Coesa",
            texto: "Toma",
            tipo: TipoNotificacao.FALHA
        }

        ]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [EXCLUIR_NOTIFICACAO](state, id: number) {
            state.notificacoes = state.notificacoes.filter(not => not.id != id);
        }, 
        [ADICIONAR_NOTIFICACAO](state, notificacao : INotificacao) {
            const notificaco = {
                id: 0,
            }  as INotificacao;
            notificacao.id =  parseInt(notificaco.toString())
            state.notificacoes.push(notificacao)
        },
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}