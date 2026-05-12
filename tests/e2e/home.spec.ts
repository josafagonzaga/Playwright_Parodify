import { expect, test } from '@playwright/test';

import { HomePage } from '../pages/home.page';

test.describe('Home', () => {
  test('deve acessar a pagina inicial do Parodify', async ({ page }) => {
    const homePage = new HomePage(page);

    const response = await homePage.open();

    expect(response?.ok()).toBeTruthy();
    await homePage.expectLoaded();
  });

  test('deve buscar uma musica pelo nome na Home', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();
    await homePage.expectSongVisible('Bughium');

    await homePage.searchSong('Bughium');

    await homePage.expectSongVisible('Bughium');
    await homePage.expectSongHidden('Nice Bugs Finish Devs');
  });

  test('deve exibir lista vazia ao buscar uma musica inexistente', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();
    await homePage.expectSongVisible('Bughium');

    await homePage.searchSong('musica inexistente');

    await homePage.expectSongHidden('Bughium');
    await homePage.expectSongHidden('Nice Bugs Finish Devs');
  });

  test('deve manter a aparencia visual da pagina inicial @visual', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();

    await expect(page).toHaveScreenshot('home-page.png', {
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('deve manter a aparencia visual do menu lateral @visual', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();

    await expect(page).toHaveScreenshot('home-sidebar.png', {
      animations: 'disabled',
      clip: {
        x: 0,
        y: 0,
        width: 240,
        height: 624,
      },
    });
  });

  test('deve manter a aparencia visual da barra superior @visual', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();

    await expect(page).toHaveScreenshot('home-topbar.png', {
      animations: 'disabled',
      clip: {
        x: 240,
        y: 0,
        width: 1040,
        height: 96,
      },
    });
  });

  test('deve manter a aparencia visual do player @visual', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();

    await expect(page).toHaveScreenshot('home-player.png', {
      animations: 'disabled',
      clip: {
        x: 0,
        y: 624,
        width: 1280,
        height: 96,
      },
    });
  });
});
