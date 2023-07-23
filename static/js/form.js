function initializeTypeahead(kycData, inputIds) {
    const typeaheadOptions = kycData.reduce((options, item) => {
        Object.keys(item).forEach(key => {
            if (!options[ key ]) {
                options[ key ] = [];
            }
            options[ key ].push(item[ key ]);
        });
        return options;
    }, {});

    Object.keys(inputIds).forEach(key => {
        const inputId = inputIds[ key ];
        const options = typeaheadOptions[ key ];

        $(`#${inputId}`).typeahead({
            source: options,
            minLength: 1,
            maxItem: 10,
            autoSelect: true,
            afterSelect: function (value) {
                const selectedKycData = kycData.find(item => item[ key ] === value);

                Object.keys(inputIds).forEach(otherKey => {
                    if (otherKey !== key) {
                        const otherInputId = inputIds[ otherKey ];
                        $(`#${otherInputId}`).val(selectedKycData[ otherKey ]);
                    }
                });
            }
        });
    });
}

const fieldBulider = (labelText, iconClass, name, id, column) => {
    console.log(iconClass);
    const formBody = document.createElement("div")
    const input = document.createElement("input")
    const icon = document.createElement("i")
    const label = document.createElement("label")
    icon.classList.add(...iconClass)
    label.innerText = labelText
    label.setAttribute("for", id)
    input.setAttribute("type","text")
    input.setAttribute("name",name)
    input.setAttribute("id",id)
    input.setAttribute("placeholder"," ")
    input.setAttribute("autocomplete", "off")
    formBody.classList.add("form-field", "col-12", `col-lg-${column}`)
    formBody.appendChild(icon)
    formBody.appendChild(input)
    formBody.appendChild(label)
    return(formBody)
}
function deleteAccordionSegment(event) {
    event.preventDefault();
    const segment = event.target.closest('.accordion-body');
    segment.parentNode.removeChild(segment);
}
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
const deleteButtonBuilder = () => {
    const buttonContainer = document.createElement("div")
    const buttonBody = document.createElement("a")
    const buttonIcon = document.createElement("i")
    buttonContainer.classList.add("submit", "col-12", "col-lg-2")
    buttonBody.classList.add("delete")
    buttonIcon.classList.add("far", "fa-trash-alt")
    buttonBody.addEventListener("click", (event) => deleteAccordionSegment(event))
    buttonBody.appendChild(buttonIcon)
    buttonContainer.appendChild(buttonBody)
    return(buttonContainer)
}

function addNewLoadingPortForm(event, targetId) {
    event.preventDefault();
    const accordionBody = document.getElementById(targetId);
    const newSegment = document.createElement('div');
    newSegment.classList.add('accordion-body', 'row');
    const uniqueId = generateUniqueId();
    var input1 = fieldBulider("Loading Port", ["fa-regular", "fa-bookmark"], `LoadingPort-${uniqueId}`, `${targetId}-${uniqueId}-field1`, 6)
    var input2 = fieldBulider("Loading Vessel", ["fab", "fa-docker"], `LoadingVessel-${uniqueId}`, `${targetId}-${uniqueId}-field2`, 6)
    var input3 = fieldBulider("Loading Date", ["fa-regular", "fa-calendar-days"], `LoadingDate-${uniqueId}`, `${targetId}-${uniqueId}-field3`, 6)
    var deleteBtn = deleteButtonBuilder()
    var hr = document.createElement("hr")
    newSegment.appendChild(input1)
    newSegment.appendChild(input2)
    newSegment.appendChild(input3)
    newSegment.appendChild(deleteBtn)
    newSegment.appendChild(hr)
    accordionBody.insertBefore(newSegment, accordionBody.lastElementChild);
    console.log(accordionBody.lastElementChild);
    const portLoadingInput = {
        "port": `${targetId}-${uniqueId}-field1`,
        "vessel": `${targetId}-${uniqueId}-field2`
    };
    initializeTypeahead(portLoadingData, portLoadingInput);
    $(`#${targetId}-${uniqueId}-field3`).pickadate({
        selectMonths: true,
        selectYears: true
    })
}




function addNewContainerForm(event, targetId) {
    event.preventDefault();
    const accordionBody = document.getElementById(targetId);
    const newSegment = document.createElement('div');
    newSegment.classList.add('accordion-body', 'row');
    const uniqueId = generateUniqueId();
    var input1 = fieldBulider("Container NO", ["far", "fa-id-badge"], `LoadingPort-${uniqueId}`, `${targetId}-${uniqueId}-field1`, 6)
    var input2 = fieldBulider("Container Size", ["far", "fa-id-badge"], `LoadingVessel-${uniqueId}`, `${targetId}-${uniqueId}-field2`, 6)
    var deleteBtn = deleteButtonBuilder();


    var hr = document.createElement("hr");
    const formBody = document.createElement("div")
    formBody.classList.add( "col-12")
    formBody.appendChild(hr)

    
    newSegment.appendChild(input1)
    newSegment.appendChild(input2)
    newSegment.appendChild(deleteBtn)
    newSegment.appendChild(formBody)
    accordionBody.insertBefore(newSegment, accordionBody.lastElementChild);
    console.log(accordionBody.lastElementChild);
    const portLoadingInput = {
        "port": `${targetId}-${uniqueId}-field1`,
        "vessel": `${targetId}-${uniqueId}-field2`
    };
    initializeTypeahead(portLoadingData, portLoadingInput);



    
    
}



function addNewTranshipmentForm(event, targetId) {
    event.preventDefault();
    const accordionBody = document.getElementById(targetId);
    const newSegment = document.createElement('div');
    newSegment.classList.add('accordion-body', 'row');
    const uniqueId = generateUniqueId();
    var input1 = fieldBulider("Port Name", ["far", "fa-id-badge"], `PortName-${uniqueId}`, `${targetId}-${uniqueId}-field1`, 6)
    var input2 = fieldBulider("Vessel Name", ["far", "fa-id-badge"], `Vessel-${uniqueId}`, `${targetId}-${uniqueId}-field2`, 6)
    var input3 = fieldBulider("E.T.A  Port", ["fa-regular", "fa-calendar-days"], `etaPort-${uniqueId}`, `${targetId}-${uniqueId}-field3`, 6)
    var input4 = fieldBulider("Port Agent Name", ["far", "fa-id-badge"], `PortAgent-${uniqueId}`, `${targetId}-${uniqueId}-field4`, 6)
    var input5 = fieldBulider("Voyage", ["far", "fa-id-badge"], `LoadingPort-${uniqueId}`, `${targetId}-${uniqueId}-field5`, 6)
    var input6 = fieldBulider("E.T.D  Port", ["fa-regular", "fa-calendar-days"], `LoadingVessel-${uniqueId}`, `${targetId}-${uniqueId}-field6`, 6)
    var deleteBtn = deleteButtonBuilder();


    var hr = document.createElement("hr");
    const formBody = document.createElement("div")
    formBody.classList.add( "col-12")
    formBody.appendChild(hr)

    
    newSegment.appendChild(input1)
    newSegment.appendChild(input2)
    newSegment.appendChild(input3)
    newSegment.appendChild(input4)
    newSegment.appendChild(input5)
    newSegment.appendChild(input6)
    newSegment.appendChild(deleteBtn)
    newSegment.appendChild(formBody)
    accordionBody.insertBefore(newSegment, accordionBody.lastElementChild);
    console.log(accordionBody.lastElementChild);
    const portLoadingInput = {
        "port": `${targetId}-${uniqueId}-field1`,
        "vessel": `${targetId}-${uniqueId}-field2`,
        "eta": `${targetId}-${uniqueId}-field3`,
        "portAgentName": `${targetId}-${uniqueId}-field4`,
        "Voyage": `${targetId}-${uniqueId}-field5`,
        "etd": `${targetId}-${uniqueId}-field6`
    };
    initializeTypeahead(portLoadingData, portLoadingInput);
    
    $(`#${targetId}-${uniqueId}-field3`).pickadate({
        selectMonths: true,
        selectYears: true
    });
    $(`#${targetId}-${uniqueId}-field6`).pickadate({
        selectMonths: true,
        selectYears: true
    })
}




function addNewDischargePortForm(event, targetId) {
    event.preventDefault();
    const accordionBody = document.getElementById(targetId);
    const newSegment = document.createElement('div');
    newSegment.classList.add('accordion-body', 'row');
    const uniqueId = generateUniqueId();
    var input1 = fieldBulider("Discharge Port", ["fa-regular", "fa-bookmark"], `DischargePort-${uniqueId}`, `${targetId}-${uniqueId}-field1`, 6)
    var input2 = fieldBulider("Discharge Place", ["fa-regular", "fa-compass"], `DischargeVessel-${uniqueId}`, `${targetId}-${uniqueId}-field2`, 6)
    var input3 = fieldBulider("Discharge Date", ["fa-regular", "fa-calendar-days"], `DischargeDate-${uniqueId}`, `${targetId}-${uniqueId}-field3`, 6)
    var deleteBtn = deleteButtonBuilder()
    var hr = document.createElement("hr")
    newSegment.appendChild(input1)
    newSegment.appendChild(input2)
    newSegment.appendChild(input3)
    newSegment.appendChild(deleteBtn)
    newSegment.appendChild(hr)
    accordionBody.insertBefore(newSegment, accordionBody.lastElementChild);
    console.log(accordionBody.lastElementChild);
    const portDischargeInput = {
        "port": `${targetId}-${uniqueId}-field1`,
        "vessel": `${targetId}-${uniqueId}-field2`
    };
    initializeTypeahead(portDischargeData, portDischargeInput);
    $(`#${targetId}-${uniqueId}-field3`).pickadate({
        selectMonths: true,
        selectYears: true
    })
}