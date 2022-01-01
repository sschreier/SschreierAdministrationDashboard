# A extension which customizing the administration dashboard for Shopware 6

The _administration dashboard can be customized_ via the extension. For this purpose, it offers under "_Settings_" -> "_System_"> "_Users & permissions_" -> "_Roles_" in the area "_Additional permissions_" a new area "_Dashboard_" in which you can _hide_ the following areas of the dashboard for the selected role: 
- the _greeting_
- the _banner_
- the _checklist_ area
- the _feedback_ area
- the _today's statistics_
- the _statistics of the orders_
- the _statistics of the turnover_.

The _Administrator_ account always see all areas on the dashboard, because he has no own role.

## How to install the extension
### via console (recommended)

1. Download the latest _SschreierAdministrationDashboard-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierAdministrationDashboard_.
3. Move the folder to the project folder _custom/plugins/_ .
4. Connect to the console via ssh:

```
bin/console plugin:refresh
bin/console plugin:install --activate SschreierAdministrationDashboard
```

### via zip upload
1. Download the latest _SschreierAdministrationDashboard-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierAdministrationDashboard_.
3. Zip the folder to _SschreierAdministrationDashboard.zip_.
4. Upload the zip in the Shopware Administration.
5. Install & Activate the extension.

#### extension update (zip)
1. Download the latest _SschreierAdministrationDashboard-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierAdministrationDashboard_.
3. Zip the folder to _SschreierAdministrationDashboard.zip_.
4. Upload the zip in the Shopware Administration.
5. Update the extension.

## Images

### administration dashboard without the areas for the _banner_, the _checklist_ and the _feedback_

![administration dashboard without the areas for the banner, the checklist and the feedback](https://www.sebastianschreier.de/plugins/SschreierAdministrationDashboard/SschreierAdministrationDashboard-Image1.jpg)

### administration dashboard without the areas for the _greeting_, the _banner_, the _checklist_ and the _feedback_

![administration dashboard without the areas for the greeting, the banner, the checklist and the feedback](https://www.sebastianschreier.de/plugins/SschreierAdministrationDashboard/SschreierAdministrationDashboard-Image2.jpg)

### administration dashboard without the areas for the _banner_, the _checklist_, the _feedback_, the _today's statistics_, the _statistics of the orders_ and the _statistics of the turnover_

![administration dashboard without the areas for the banner, the checklist, the feedback, the today's statistics, the statistics of the orders and the statistics of the turnover](https://www.sebastianschreier.de/plugins/SschreierAdministrationDashboard/SschreierAdministrationDashboard-Image3.jpg)

### new area "_Dashboard_" under "_Settings_" -> "_System_"> "_Users & permissions_" -> "_Roles_" in the area "_Additional permissions_" in which you can _hide_ the areas of the dashboard for the selected role

![new area Dashboard in which you can hide the areas of the dashboard for the selected role](https://www.sebastianschreier.de/plugins/SschreierAdministrationDashboard/SschreierAdministrationDashboard-Image4.jpg)
