describe('Basic run', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('selects two available elements', () => {
    cy.clickOnIcon('icon0');

    cy.checkCounter('1 / 6');

    cy.clickOnIcon('icon4');

    cy.checkCounter('2 / 6');
  });

  it('selects and deselects element', () => {
    cy.clickOnIcon('icon0');

    cy.checkCounter('1 / 6');

    cy.rightClickOnIcon('icon0');

    cy.checkCounter('0 / 6');
  });

  it('tries to select more than limit (6)', () => {
    cy.clickOnIcon('icon0');
    cy.clickOnIcon('icon1');
    cy.clickOnIcon('icon2');
    cy.clickOnIcon('icon3');
    cy.clickOnIcon('icon4');
    cy.clickOnIcon('icon5');

    cy.checkCounter('6 / 6');

    cy.clickOnIcon('icon6');

    cy.checkCounter('6 / 6');
  });

  it('tries to select more than limit (6) then deselects and selects another one', () => {
    cy.clickOnIcon('icon0');
    cy.clickOnIcon('icon1');
    cy.clickOnIcon('icon2');
    cy.clickOnIcon('icon3');
    cy.clickOnIcon('icon4');
    cy.clickOnIcon('icon5');

    cy.checkCounter('6 / 6');

    cy.clickOnIcon('icon6');

    cy.checkCounter('6 / 6');

    cy.rightClickOnIcon('icon3');

    cy.checkCounter('5 / 6');

    cy.clickOnIcon('icon6');

    cy.checkCounter('6 / 6');
  });

  it('tries to select deselect what is prohibited', () => {
    cy.clickOnIcon('icon0');
    cy.clickOnIcon('icon1');

    cy.checkCounter('2 / 6');

    cy.rightClickOnIcon('icon0');

    cy.checkCounter('2 / 6');

    cy.clickOnIcon('icon3');

    cy.checkCounter('2 / 6');
  });
});
