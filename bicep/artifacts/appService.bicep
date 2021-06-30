param appServiceName string
param linuxFxVersion string
param alwaysOn bool
param sku string = 'B1'


resource appPlan 'Microsoft.Web/serverfarms@2021-01-01' = {
  name: '${appServiceName}-asp'
  location: resourceGroup().location
  sku: {
    name: sku
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}


resource appService 'Microsoft.Web/sites@2021-01-01' = {
  name: appServiceName
  location: resourceGroup().location
  tags: {}
  properties: {
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      alwaysOn: alwaysOn
    }
    serverFarmId: appPlan.id
    clientAffinityEnabled: false
  }
}
