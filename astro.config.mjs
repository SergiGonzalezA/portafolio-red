import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Portafolio RED - UDC',
	  pagefind: false,
	  customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: '1. Identificando',
          items: [
            { label: 'Avatar', link: '/identificando/avatar' },
            { label: 'Póster Digital', link: '/identificando/poster' },
          ],
        },
        {
          label: '2. Referenciando',
          items: [
            { label: 'E-book', link: '/referenciando/ebook' },
          ],
        },
        {
          label: '3. Diseñando',
          items: [
            { label: 'Unidad Didáctica', link: '/disenando/unidad-didactica' },
            { label: 'Infografía: propuesta metodológica', link: '/disenando/infografia' },
            { label: 'Diseño Instruccional', link: '/disenando/diseno-instruccional' },
            { label: 'Producto Final', link: '/disenando/producto-final' },
            { label: 'Video Tutorial', link: '/disenando/video-tutorial' },
          ],
        },
        {
          label: '4. Créditos',
          items: [
            { label: 'Referencias Bibliográficas', link: '/creditos/referencias' },
            { label: 'Agradecimientos', link: '/creditos/agradecimientos' },
            { label: 'Licenciamiento (Creative Commons)', link: '/creditos/licenciamiento' },
            { label: 'Mapa de Navegación', link: '/creditos/mapa' },
          ],
        },
      ],
    }),
  ],
});