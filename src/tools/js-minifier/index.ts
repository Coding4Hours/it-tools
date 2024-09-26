import { FileDigit } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.js-minifier.title'),
  path: '/js-minifier',
  description: translate('tools.js-minifier.description'),
  keywords: ['minify', 'js'],
  component: () => import('./js-minifier.vue'),
  icon: FileDigit,
});
