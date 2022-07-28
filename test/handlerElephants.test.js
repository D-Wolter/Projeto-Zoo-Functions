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
});
