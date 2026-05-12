import {
  expect,
  type Locator,
  type Page,
  type Response,
} from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly songCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Buscar pelo nome da música');
    this.searchButton = page.getByRole('button', { name: 'Buscar' });
    this.songCards = page.locator('main').getByRole('heading', { level: 6 });
  }

  async open(): Promise<Response | null> {
    return this.page.goto('/');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL('https://parodify.vercel.app/');
    await expect(this.page).toHaveTitle(/parodify/i);
    await expect(this.searchInput).toBeVisible();
  }

  async searchSong(songName: string): Promise<void> {
    await this.searchInput.fill(songName);
    await this.searchButton.click();
  }

  songByName(songName: string): Locator {
    return this.page.getByRole('heading', { name: songName, exact: true });
  }

  async expectSongVisible(songName: string): Promise<void> {
    await expect(this.songByName(songName)).toBeVisible();
  }

  async expectSongHidden(songName: string): Promise<void> {
    await expect(this.songByName(songName)).toBeHidden();
  }
}
