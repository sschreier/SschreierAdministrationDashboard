if (Shopware.Service('privileges')) {
    Shopware.Service('privileges').addPrivilegeMappingEntry({
        category: 'additional_permissions',
        parent: null,
        key: 'dashboard',
        roles: {
            intro: {
                privileges: [],
                dependencies: []
            },
            campaign_banner: {
                privileges: [],
                dependencies: []
            },
            welcome: {
                privileges: [],
                dependencies: []
            },
            feedback: {
                privileges: [],
                dependencies: []
            },
            stats_today: {
                privileges: [],
                dependencies: []
            },
            statistics_count: {
                privileges: [],
                dependencies: []
            },
            statistics_sum: {
                privileges: [],
                dependencies: []
            }
        }
    });
}
