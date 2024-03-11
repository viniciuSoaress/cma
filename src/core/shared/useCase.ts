export default interface CasoDeUso<E, S> {
  handle(data: E): Promise<S>
}