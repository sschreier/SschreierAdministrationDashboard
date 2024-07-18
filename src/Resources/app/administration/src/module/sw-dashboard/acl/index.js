Shopware.Service('privileges')
    .addPrivilegeMappingEntry({
        category: 'additional_permissions',
        parent: null,
        key: 'dashboard',
        roles: {
            intro: {
                privileges: ['dashboard:intro'],
                dependencies: []
            },
            welcome: {
                privileges: ['dashboard:welcome'],
                dependencies: []
            },
            feedback: {
                privileges: ['dashboard:feedback'],
                dependencies: []
            },
            stats_today: {
                privileges: ['dashboard:stats:today'],
                dependencies: []
            },
            statistics_count: {
                privileges: ['dashboard:statistics:count'],
                dependencies: []
            },
            statistics_sum: {
                privileges: ['dashboard:statistics:sum'],
                dependencies: []
            }
        }
    });
