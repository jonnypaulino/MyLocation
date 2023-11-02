import { generateRandomString } from "../service/funciotion";

describe('generateRandomString', () => {
  it('deve gerar uma string com o comprimento especificado', () => {
    const length = 10;

    const randomString = generateRandomString(length);

    expect(randomString).toHaveLength(length);
  });

  it('deve gerar uma string vazia quando o comprimento for 0', () => {
    const length = 0;

    const randomString = generateRandomString(length);

    expect(randomString).toBe('');
  });
});


// só um exemplo de teste não consegui fazer para todos
