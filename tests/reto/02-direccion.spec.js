const { test, expect } = require('@playwright/test');

test('RETO 2 - no debería continuar al pago con dirección vacía', async ({ page }) => {
  await page.goto('/');

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });

  await pizza.getByRole('button', { name: 'Agregar' }).click();
  await page.getByRole('button', { name: /Continuar con el pedido/ }).click();

  // Comprobamos que inicialmente la dirección está vacía.
  await expect(page.locator('#address')).toHaveValue('');

  // TODO 1: intenta continuar al pago sin escribir una dirección.
  // Pista: busca el botón "Continuar al pago".

    await page.getByRole('button', { name: /continuar al pago/i }).click();

  // TODO 2: comprueba que el formulario de dirección
  // DEBERÍA seguir visible.
  // Pista: busca el heading "Dirección de entrega".

    await expect(
    page.getByRole('heading', { name: 'Dirección de entrega' })
  ).toBeVisible();

  // Ejemplos de estructuras que puedes utilizar:
  // await page.getByRole('button', { name: /.../ }).click();
  // await expect(page.getByRole('heading', { name: '...' })).toBeVisible();
});