/************************
          Targed
*************************/

targetScope = 'subscription'

/************************
         Parameter
*************************/

param appServiceName string = 'reactui-ppe-app'


/************************
      ResourceGroup
*************************/

resource appRg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'reactui-ppe-app-rg'
  location: deployment().location
}

/************************
        Modules
*************************/

module appServiceDeploy 'artifacts/appService.bicep' = {
  scope: appRg
  name: 'appServiceDeploy'
  params: {
    appServiceName: appServiceName
    alwaysOn: true
    linuxFxVersion: 'DOTNETCORE|5.0'
  }
}

// https://docs.microsoft.com/en-us/azure/templates/
