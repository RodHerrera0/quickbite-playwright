const { test, expect } = require('@playwright/test');

test('RETO 1 - no debería permitirse agregar un producto con cantidad cero', async ({ page }) => {
  await page.goto('/');

  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa Clásica' })
  });

  // TODO 1: intenta llevar la cantidad de la Hamburguesa Clásica a 0.
  // Pista: dentro de esta tarjeta existe un botón con data-minus="1".

    await hamburguesa.locator('[data-minus="1"]').click();

  // TODO 2: intenta agregar el producto al carrito.
  // Pista: busca dentro de la tarjeta el botón "Agregar".

    await hamburguesa.getByRole('button', { name: 'Agregar' }).click();
  
  // TODO 3: comprueba que un producto con cantidad 0
  // NO debería aparecer en el carrito.
  //
  // Pista: piensa qué texto podrías buscar y cuántas veces
  // debería aparecer "Hamburguesa Clásica" si NO fue agregada.

    await expect(
    page.getByText('Hamburguesa Clásica', { exact: true })
  ).toHaveCount(1);

  // Ejemplos de estructuras que puedes utilizar:
  // await hamburguesa.locator('...').click();
  // await hamburguesa.getByRole('button', { name: '...' }).click();
  // await expect(page.getByText('...', { exact: true })).toHaveCount(...);
});