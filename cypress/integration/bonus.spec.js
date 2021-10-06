import {
  evaluateOffset,
  isSidebySide,
  shouldExist,
  verifyExistingStyle,
} from '../actions/ActionBase';

describe('12 - Adicione uma tabela à página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A página deve possuir uma tabela', () => {
    shouldExist('table');
  });
});

describe('13 - Utilize o Box model', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Altere `margin`, `padding` e `border` dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes', () => {
    cy.readFile('./style.css').then((content) => {
      const styles = ['margin', 'padding', 'border'];
      expect(styles.every((style) => content.match(style)), 'Do not match styles margin, padding and border').to.be.true;
    });
  });
});

describe('14 - Altere atributos relacionados as fontes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Altere o tamanho da letra', () => {
    const styles = [
      /font:/,
      /font-size:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere a cor da letra', () => {
    const styles = [
      /font:/,
      /[^-]color:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere o espaçamento entre as linhas', () => {
    const styles = [
      /font:/,
      /line-height:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere o `font-family`', () => {
    const styles = [
      /font:/,
      /font-family:/,
    ];
    verifyExistingStyle(styles);
  });
});

describe('15 - Posicione o seu artigo e a seção sobre aprendizados um ao lado do outro', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Utilizar a classe "lado-esquerdo"', () => {
    shouldExist('.lado-esquerdo');
  });

  it('Utilizar a classe "lado-direito"', () => {
    shouldExist('.lado-direito');
  });

  it('Verificar se os elementos com as classes lado-direito e lado-esquerdo estão posicionados corretamente', () => {
    cy.document().then((doc) => {
      const leftSide = {
        top: evaluateOffset(doc, '.lado-esquerdo', 'Top'),
        height: evaluateOffset(doc, '.lado-esquerdo', 'Height'),
      };

      const rightSide = {
        top: evaluateOffset(doc, '.lado-direito', 'Top'),
        height: evaluateOffset(doc, '.lado-direito', 'Height'),
      };

      expect(isSidebySide(leftSide, rightSide), 'Not side by side. *hint - search for float, width and positioning properties to achieve this requirement*').to.be.true;
    });
  });
});
