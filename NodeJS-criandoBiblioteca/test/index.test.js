import {pegaArquivo} from '../index.js';

const arrayResult = [
  {
    FileList:'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

// describe é uma função do Jest
// :: (dois pontos, dois pontos) permite olhar o terminal e localizar melhor onde estão as informações
describe('pegaArquivo::', () => {
  it('Deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('Deve retornar array com resultados', async () => {
    const result = await pegaArquivo('C:\WorkSpace\FormacaoJavaScriptParaBackend\NodeJS-criandoBiblioteca\test\arquivos\texto1.md')
    expect(result).toEqual(arrayResult);
  })
  it('Deve retornar mensagem "não há links"', async () => {
    const result = await pegaArquivo('C:\WorkSpace\FormacaoJavaScriptParaBackend\NodeJS-criandoBiblioteca\test\arquivos\texto1_semLinks.md')
    expect(resultado).toBe('não há links');
  })
  it('Deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivo('C:\WorkSpace\FormacaoJavaScriptParaBackend\NodeJS-criandoBiblioteca\test\arquivos')).rejects.toThrow('não há arquivo no caminho');
  })
  it('Deve resolver a função com sucesso', async () => {
    await expect(pegaArquivo('C:\WorkSpace\FormacaoJavaScriptParaBackend\NodeJS-criandoBiblioteca\test\arquivos\texto1.md')).resolves.toEqual(arrayResult);
  })
})
