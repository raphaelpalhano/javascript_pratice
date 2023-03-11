function Invoice(installmentValue, assetType, externalId, paymentValue, supplierGovernmentId, supplierName ){
    this.installmentValue = installmentValue
    this.assetType = assetType;
    this.externalId = externalId;
    this.paymentValue = paymentValue;
    this.supplierGovernmentId = supplierGovernmentId;
    this.supplierName = supplierName;
    this.totalInstallment =  installmentValue;
}


const instance = new Invoice(213, "DIREITOS", 214132232, 3943, 0998438232, "DDD");

console.log(instance);