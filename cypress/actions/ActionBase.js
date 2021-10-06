export function shouldExist(selector) {
  cy.get(selector).should('exist');
}

export function evaluateOffset(doc, selector, offsetType) {
  return doc.querySelector(selector)[`offset${offsetType}`];
}

export function isSidebySide(firstSide, secondSide) {
  firstSide.bottom = firstSide.top + firstSide.height;
  secondSide.bottom = secondSide.top + secondSide.height;

  return (firstSide.top >= secondSide.top && firstSide.bottom <= secondSide.bottom)
    || (secondSide.top >= firstSide.top && secondSide.bottom <= firstSide.bottom);
}

export function verifyExistingStyle(styles) {
  cy.readFile('./style.css').then((content) => {
    expect(styles.some((style) => content.match(style)), `Do not match styles ${styles}`).to.be.true;
  });
}
