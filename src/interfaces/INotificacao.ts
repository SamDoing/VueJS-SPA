export enum TipoNotificacao {
    SUCESSO = "is-success",
    FALHA   = "is-warning", 
    ATENCAO = "is-danger"
}

export default interface INotificacao {
    titulo : string,
    texto : string,
    tipo: TipoNotificacao,
    id: number
}