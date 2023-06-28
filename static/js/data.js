const customerData = [
    { "kycid": "1111111111111111111", "name": "jhtfhfhm", "email": "demo1@gmail.com" },
    { "kycid": "2222222222222222222", "name": "jyudjgjgh", "email": "demo2@gmail.com" },
    { "kycid": "3333333333333333333", "name": "yruhgjgju", "email": "demo3@gmail.com" },
    { "kycid": "4444444444444444444", "name": "ghcvhjhjhj", "email": "demo4@gmail.com" }
];
const customerInput = {
    "kycid": "kycid",
    "name": "name",
    "email": "email"
};
initializeTypeahead(customerData, customerInput);
const shipperData = [
    { "name": "shipper1", "address": "Address 1" },
    { "name": "shipper2", "address": "Address 2" },
    { "name": "shipper3", "address": "Address 3" },
    { "name": "shipper4", "address": "Address 4" }
];
const shipperInput = {
    "name": "shippername",
    "address": "shipperaddress"
};
initializeTypeahead(shipperData, shipperInput);
const consigneeData = [
    { "name": "consignee1", "address": "Address 1" },
    { "name": "consignee2", "address": "Address 2" },
    { "name": "consignee3", "address": "Address 3" },
    { "name": "consignee4", "address": "Address 4" }
];
const consigneeInput = {
    "name": "consigneename",
    "address": "consigneeaddress"
};
initializeTypeahead(consigneeData, consigneeInput);
const portLoadingData = [
    { "port": "Loading Port - 1", "vessel": "Loading Vessel - 1" },
    { "port": "Loading Port - 2", "vessel": "Loading Vessel - 2" },
    { "port": "Loading Port - 3", "vessel": "Loading Vessel - 3" },
    { "port": "Loading Port - 4", "vessel": "Loading Vessel - 4" }
];
const portLoadingInput = {
    "port": "portLoading-segment1-field1",
    "vessel": "portLoading-segment1-field2"
};
initializeTypeahead(portLoadingData, portLoadingInput);
const portDischargeData = [
    { "port": "Discharge Port - 1", "vessel": "Discharge Vessel - 1" },
    { "port": "Discharge Port - 2", "vessel": "Discharge Vessel - 2" },
    { "port": "Discharge Port - 3", "vessel": "Discharge Vessel - 3" },
    { "port": "Discharge Port - 4", "vessel": "Discharge Vessel - 4" }
];
const portDischargeInput = {
    "port": "portDischarge-segment1-field1",
    "vessel": "portDischarge-segment1-field2"
};
initializeTypeahead(portDischargeData, portDischargeInput);
const carrierData = [
    { "name": "Carrier - 1"},
    { "name": "Carrier - 2"},
    { "name": "Carrier - 3"},
    { "name": "Carrier - 4"}
];
const carrierInput = {
    "name": "carriername"
};
initializeTypeahead(carrierData, carrierInput);
const forwardblData = [
    { "name": "forwardbl - 1"},
    { "name": "forwardbl - 2"},
    { "name": "forwardbl - 3"},
    { "name": "forwardbl - 4"}
];
const forwardblInput = {
    "name": "forwardblno"
};
initializeTypeahead(forwardblData, forwardblInput);
const loadingAgentData = [
    { "name": "loadingAgent - 1"},
    { "name": "loadingAgent - 2"},
    { "name": "loadingAgent - 3"},
    { "name": "loadingAgent - 4"}
];
const loadingAgentInput = {
    "name": "loadingAgent"
};
initializeTypeahead(loadingAgentData, loadingAgentInput);
const shipmentAgentData = [
    { "name": "shipmentAgent - 1"},
    { "name": "shipmentAgent - 2"},
    { "name": "shipmentAgent - 3"},
    { "name": "shipmentAgent - 4"}
];
const shipmentAgentInput = {
    "name": "shipmentAgent"
};
initializeTypeahead(shipmentAgentData, shipmentAgentInput);
$("#portLoading-segment1-field3").pickadate({
    selectMonths: true,
    selectYears: true
})
$("#portDischarge-segment1-field3").pickadate({
    selectMonths: true,
    selectYears: true
})