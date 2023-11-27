import './../../acl';

import template from './sw-dashboard-statistics.html.twig';

Shopware.Component.override('sw-dashboard-statistics', {
    template,

    inject: {
        acl: 'acl'
    },
});
