const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('recebendo como parâmetro "count" e conferindo o retorno da contagem populacional de 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('recebendo como parâmetro "names" e conferindo o retorno da contem jeferson', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('recebendo como parâmetro "averageAge" e conferindo o retorno é um numero proximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('recebendo como parâmetro "location" e conferindo se o retorno é uma string NW', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('recebendo como parâmetro "popularity" deve retornar um array de dias da semana que não contém Monday', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('Não passando argumentos a função deve retornar undefined;', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('verifica se passado argumento invalido retorna null', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('verifica se passado argumento invalido retorna null', () => {
    const actual = handlerElephants('daniel');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
