import template from './sw-dashboard-index.html.twig';
import './sw-dashboard-index.scss';

import deDE from './../../snippet/de-DE.json';
import enGB from './../../snippet/en-GB.json';

export default {
    template,

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    inject: {
        acl: 'acl'
    },
};
