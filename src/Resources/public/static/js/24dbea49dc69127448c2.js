"use strict";(window["webpackJsonpPluginsschreier-administration-dashboard"]=window["webpackJsonpPluginsschreier-administration-dashboard"]||[]).push([[166],{166:function(t,s,a){a.r(s),a.d(s,{default:function(){return n}});var n={template:"{% block sw_dashboard_statistics_intro_stats_headline %}\n    {% block sw_dashboard_statistics_intro_stats_headline_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.stats_today')\">\n        {% block sw_dashboard_statistics_intro_stats_headline_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_statistics_intro_stats_headline_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_statistics_intro_stats_headline_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_statistics_intro_stats_today %}\n    {% block sw_dashboard_statistics_intro_stats_today_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.stats_today')\">\n        {% block sw_dashboard_statistics_intro_stats_today_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_statistics_intro_stats_today_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_statistics_intro_stats_today_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_statistics_count %}\n    {% block sw_dashboard_statistics_count_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.statistics_count')\">\n        {% block sw_dashboard_statistics_count_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_statistics_count_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_statistics_count_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_statistics_sum %}\n    {% block sw_dashboard_statistics_sum_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.statistics_sum')\">\n        {% block sw_dashboard_statistics_sum_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_statistics_sum_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_statistics_sum_after %}{% endblock %}\n{% endblock %}\n",inject:{acl:"acl"}}}}]);