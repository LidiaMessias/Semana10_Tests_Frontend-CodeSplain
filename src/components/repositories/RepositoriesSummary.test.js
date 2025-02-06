import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays informations about the repository', () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);

  // Faremos um loop pelas chaves (key) dentro do objeto repository (chave:valor = chave => language, forks, open_issues etc)
  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value)); // Usamos new RegExp(variavel) para que ele pegue o elemento dinamicamente, porque a cada passagem do loop o texto vai mudar, então não podemos colocar um texto fixo para ele procurar, e sim dinâmico.

    expect(element).toBeInTheDocument();
  }  
});
