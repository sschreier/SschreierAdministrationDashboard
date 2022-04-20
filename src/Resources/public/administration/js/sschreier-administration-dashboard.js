!function(n){var e={};function t(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(a,o,function(e){return n[e]}.bind(null,o));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/bundles/sschreieradministrationdashboard/",t(t.s="o9ZY")}({"4Ik/":function(n,e){n.exports="{% block sw_dashboard_index %}\n    {% block sw_dashboard_index_before %}{% endblock %}\n    <div class=\"sw-page__outer\">\n        {% block sw_dashboard_index_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_inner_after %}{% endblock %}\n    </div>\n    {% block sw_dashboard_index_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_intro_card %}\n    {% block sw_dashboard_index_content_intro_card_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.intro')\">\n        {% block sw_dashboard_index_content_intro_card_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_intro_card_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_intro_card_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_campaign_banner %}\n    {% block sw_dashboard_index_content_campaign_banner_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.campaign_banner')\">\n        {% block sw_dashboard_index_content_campaign_banner_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_campaign_banner_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_campaign_banner_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_info_grid %}\n    {% block sw_dashboard_index_content_info_grid_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || (!acl.can('dashboard.welcome') || !acl.can('dashboard.feedback'))\">\n        {% block sw_dashboard_index_content_info_grid_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_info_grid_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_info_grid_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_info__grid_inner_welcome_card %}\n    {% block sw_dashboard_index_content_info__grid_inner_welcome_card_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.welcome')\">\n        {% block sw_dashboard_index_content_info__grid_inner_welcome_card_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_info__grid_inner_welcome_card_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_info__grid_inner_welcome_card_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_grid_info_inner_feedback_card %}\n    {% block sw_dashboard_index_content_grid_info_inner_feedback_card_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.feedback')\">\n        {% block sw_dashboard_index_content_grid_info_inner_feedback_card_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_grid_info_inner_feedback_card_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_grid_info_inner_feedback_card_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_intro_stats_headline %}\n    {% block sw_dashboard_index_content_intro_stats_headline_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.stats_today')\">\n        {% block sw_dashboard_index_content_intro_stats_headline_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_intro_stats_headline_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_intro_stats_headline_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_intro_stats_today %}\n    {% block sw_dashboard_index_content_intro_stats_today_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.stats_today')\">\n        {% block sw_dashboard_index_content_intro_stats_today_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_intro_stats_today_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_intro_stats_today_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_grid %}\n    {% block sw_dashboard_index_content_grid_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.stats_today')\">\n        {% block sw_dashboard_index_content_grid_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_grid_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_grid_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_statistics_headline %}\n    {% block sw_dashboard_index_content_statistics_headline_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || (!acl.can('dashboard.statistics_count') || !acl.can('dashboard.statistics_sum'))\">\n        {% block sw_dashboard_index_content_statistics_headline_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_statistics_headline_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_statistics_headline_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_statistics_count %}\n    {% block sw_dashboard_index_content_statistics_count_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.statistics_count')\">\n        {% block sw_dashboard_index_content_statistics_count_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_statistics_count_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_statistics_count_after %}{% endblock %}\n{% endblock %}\n\n{% block sw_dashboard_index_content_statistics_sum %}\n    {% block sw_dashboard_index_content_statistics_sum_before %}{% endblock %}\n    <template v-if=\"acl.can('admin') || !acl.can('dashboard.statistics_sum')\">\n        {% block sw_dashboard_index_content_statistics_sum_inner_before %}{% endblock %}\n        {% parent() %}\n        {% block sw_dashboard_index_content_statistics_sum_inner_after %}{% endblock %}\n    </template>\n    {% block sw_dashboard_index_content_statistics_sum_after %}{% endblock %}\n{% endblock %}\n"},AUD9:function(n){n.exports=JSON.parse('{"sw-privileges":{"additional_permissions":{"dashboard":{"label":"Dashboard","intro":"Begrüßung ausblenden","campaign_banner":"Banner ausblenden","welcome":"Checkliste ausblenden","feedback":"Feedback ausblenden","stats_today":"Statistik des Tages ausblenden","statistics_count":"Statistiken Bestellungen ausblenden","statistics_sum":"Statistiken Umsatz ausblenden"}}}}')},GiuG:function(n){n.exports=JSON.parse('{"sw-privileges":{"additional_permissions":{"dashboard":{"label":"Dashboard","intro":"Hide greeting","campaign_banner":"Hide banner","welcome":"Hide checklist area","feedback":"Hide feedback area","stats_today":"Hide today\'s statistics","statistics_count":"Hide Statistics Orders","statistics_sum":"Hide Statistics Turnover"}}}}')},SZ7m:function(n,e,t){"use strict";function a(n,e){for(var t=[],a={},o=0;o<e.length;o++){var d=e[o],r=d[0],i={id:n+":"+o,css:d[1],media:d[2],sourceMap:d[3]};a[r]?a[r].parts.push(i):t.push(a[r]={id:r,parts:[i]})}return t}t.r(e),t.d(e,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},r=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,s=0,_=!1,c=function(){},l=null,b="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(n,e,t,o){_=t,l=o||{};var r=a(n,e);return k(r),function(e){for(var t=[],o=0;o<r.length;o++){var i=r[o];(s=d[i.id]).refs--,t.push(s)}e?k(r=a(n,e)):r=[];for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var _=0;_<s.parts.length;_++)s.parts[_]();delete d[s.id]}}}}function k(n){for(var e=0;e<n.length;e++){var t=n[e],a=d[t.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](t.parts[o]);for(;o<t.parts.length;o++)a.parts.push(h(t.parts[o]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{var r=[];for(o=0;o<t.parts.length;o++)r.push(h(t.parts[o]));d[t.id]={id:t.id,refs:1,parts:r}}}}function u(){var n=document.createElement("style");return n.type="text/css",r.appendChild(n),n}function h(n){var e,t,a=document.querySelector("style["+b+'~="'+n.id+'"]');if(a){if(_)return c;a.parentNode.removeChild(a)}if(f){var o=s++;a=i||(i=u()),e=g.bind(null,a,o,!1),t=g.bind(null,a,o,!0)}else a=u(),e=x.bind(null,a),t=function(){a.parentNode.removeChild(a)};return e(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;e(n=a)}else t()}}var m,w=(m=[],function(n,e){return m[n]=e,m.filter(Boolean).join("\n")});function g(n,e,t,a){var o=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var d=document.createTextNode(o),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(d,r[e]):n.appendChild(d)}}function x(n,e){var t=e.css,a=e.media,o=e.sourceMap;if(a&&n.setAttribute("media",a),l.ssrId&&n.setAttribute(b,e.id),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},iWu6:function(n,e,t){},jLvd:function(n,e,t){var a=t("iWu6");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t("SZ7m").default)("da0d7c7c",a,!0,{})},o9ZY:function(n,e,t){"use strict";t.r(e);t("y9GT");var a=t("4Ik/"),o=t.n(a),d=(t("jLvd"),t("AUD9")),r=t("GiuG");Shopware.Component.override("sw-dashboard-index",{template:o.a,snippets:{"de-DE":d,"en-GB":r},inject:{acl:"acl"}})},y9GT:function(n,e){Shopware.Service("privileges")&&Shopware.Service("privileges").addPrivilegeMappingEntry({category:"additional_permissions",parent:null,key:"dashboard",roles:{intro:{privileges:[],dependencies:[]},campaign_banner:{privileges:[],dependencies:[]},welcome:{privileges:[],dependencies:[]},feedback:{privileges:[],dependencies:[]},stats_today:{privileges:[],dependencies:[]},statistics_count:{privileges:[],dependencies:[]},statistics_sum:{privileges:[],dependencies:[]}}})}});
//# sourceMappingURL=sschreier-administration-dashboard.js.map