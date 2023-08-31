// photograph document validator
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const errorMessage = document.getElementById('error-message');
    
    form.addEventListener('submit', function(event) {
        const fileInput = document.getElementById('fileToUpload');
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
        const maxFileSize = 10 * 1024 * 1024; // 10MB
        
        const fileName = fileInput.value;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const fileSize = fileInput.files[0].size;
        
        if (!allowedExtensions.includes(fileExtension)) {
            event.preventDefault();
            errorMessage.textContent = 'Only PDF, DOC, and DOCX files are allowed.';
        } else if (fileSize > maxFileSize) {
            event.preventDefault();
            errorMessage.textContent = 'File size exceeds 10MB.';
        }
    });
});


// handicap validator
const handicapRadio = document.querySelectorAll('input[name="handicap"]');
const handicapDescription = document.getElementById('handicapDescription');
const descriptionInput = document.getElementById('description');

handicapRadio.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'true') {
            handicapDescription.classList.remove('handicap_desc');
            descriptionInput.required = true;
        } else {
            handicapDescription.classList.add('handicap_desc');
            descriptionInput.required = false;
        }
    });
});


// phone number validator
// const phoneNumberInput = document.getElementById('phoneNumber');
// const countryCodeInput = document.getElementById('countryCode');
// const errorMessage = document.getElementById('phno-err-msg');

// phoneNumberInput.addEventListener('input', function() {
//     const totalLength = this.value.length + countryCodeInput.value.length;
    
//     if (totalLength !== 12) {
//         errorMessage.textContent = 'ከ 0 ውጭ ያሉትን ዘጠኝ አሃዞችን ያስገቡ';
//     } else {
//         errorMessage.textContent = '';
//     }
// });

// // service validator
const serviceRadio = document.querySelectorAll('input[name="service"]');
const serviceInput = document.getElementById('serviceId');
serviceRadio.forEach(radio => {
    radio.addEventListener('change', function(){
        const serviceStats1 = document.querySelectorAll('input[class="servWhere1"]');
        const serviceStatusInput1 = document.getElementById('servWhereId1');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats1.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput1.classList.remove('serv_where')
                    } else {
                        serviceStatusInput1.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats2 = document.querySelectorAll('input[class="servWhere2"]');
        const serviceStatusInput2 = document.getElementById('servWhereId2');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats2.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput2.classList.remove('serv_where')
                    } else {
                        serviceStatusInput2.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats3 = document.querySelectorAll('input[class="servWhere3"]');
        const serviceStatusInput3 = document.getElementById('servWhereId3');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats3.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput3.classList.remove('serv_where')
                    } else {
                        serviceStatusInput3.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats4 = document.querySelectorAll('input[class="servWhere4"]');
        const serviceStatusInput4 = document.getElementById('servWhereId4');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats4.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput4.classList.remove('serv_where')
                    } else {
                        serviceStatusInput4.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats5 = document.querySelectorAll('input[class="servWhere5"]');
        const serviceStatusInput5 = document.getElementById('servWhereId5');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats5.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput5.classList.remove('serv_where')
                    } else {
                        serviceStatusInput5.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats6 = document.querySelectorAll('input[class="servWhere6"]');
        const serviceStatusInput6 = document.getElementById('servWhereId6');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats6.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput6.classList.remove('serv_where')
                    } else {
                        serviceStatusInput6.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats7 = document.querySelectorAll('input[class="servWhere7"]');
        const serviceStatusInput7 = document.getElementById('servWhereId7');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats7.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput7.classList.remove('serv_where')
                    } else {
                        serviceStatusInput7.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats8 = document.querySelectorAll('input[class="servWhere8"]');
        const serviceStatusInput8 = document.getElementById('servWhereId8');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats8.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput8.classList.remove('serv_where')
                    } else {
                        serviceStatusInput8.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats9 = document.querySelectorAll('input[class="servWhere9"]');
        const serviceStatusInput9 = document.getElementById('servWhereId9');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats9.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput9.classList.remove('serv_where')
                    } else {
                        serviceStatusInput9.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
        const serviceStats10 = document.querySelectorAll('input[class="servWhere10"]');
        const serviceStatusInput10 = document.getElementById('servWhereId10');
        if (this.value === 'true') {
            serviceInput.classList.remove('service_list');
            serviceStats10.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        serviceStatusInput10.classList.remove('serv_where')
                    } else {
                        serviceStatusInput10.classList.add('serv_where');
                    }
                });
            });
        } else {
            serviceInput.classList.add('service_list');
        }
    });
});

// education status validator
const eduCheckRadio = document.querySelectorAll('input[name="educheck"]');
const learnedInput = document.getElementById('learned');
const subOfStudyInput = document.getElementById('subOfStudy')
eduCheckRadio.forEach(radio => {
    radio.addEventListener('change', function(){
        const addBtn = document.getElementById('addMoreBtn')
        if (this.value === 'true') {
            learnedInput.classList.remove('learned');
            subOfStudyInput.required = true;
            addBtn.addEventListener('click', function() {
                const repeatContent = document.querySelector('.repeatable').cloneNode(true);
                learnedInput.appendChild(repeatContent);
            });
        } else {
            learnedInput.classList.add('learned');
        }
    });
});
const iworkRadio = document.querySelectorAll('input[name="work_stats"]');
const iworkInput = document.getElementById('iWork');
const talentInput = document.getElementById('talent');
const professionInput = document.getElementById('profession');
const workPlaceInput = document.getElementById('workPlace');
const responibility = document.getElementById('responsiblity');
iworkRadio.forEach(radio => {
    radio.addEventListener('change', function(){
        if (this.value === 'true') {
            iworkInput.classList.remove('iwork');
            talentInput.required = true;
            professionInput.required = true;
            workPlaceInput.required = true;
            responibility.required = true;
        } else {
            iworkInput.classList.add('iwork')
        }
    });
});

// marrige status validator
const mStatusRadio = document.querySelectorAll('input[name="mstats"]');
const marriedForm = document.getElementById('maritalStatus');
const sFname = document.getElementById('sFName');
const sMname = document.getElementById('sMName');
const sLname = document.getElementById('sLName');
const dateOfWed = document.getElementById('dateOfWedding');

mStatusRadio.forEach(radio => {
    radio.addEventListener('change', function(){
        const spauseInChurchRadio = document.querySelectorAll('input[name="shere"]');
        const ifHereOpt = document.getElementById('ifHere');
        if (this.value === 'true') {
            marriedForm.classList.remove('maritial_bool');
            sFname.required = true;
            sMname.required = true;
            sLname.required = true;
            dateOfWed.required = true;
            spauseInChurchRadio.forEach(radio => {
                radio.addEventListener('change', function(){
                    const spouseInThisChurch = document.querySelectorAll('input[name="here"]');
                    const notInThisChurchOpt = document.getElementById('noIfHere');
                    const whereAreTheyInput = document.getElementById('whereAreThey');
                    if (this.value === 'true') {
                        ifHereOpt.classList.remove('ifhere');
                        spouseInThisChurch.forEach(radio => {
                            radio.addEventListener('change', function(){
                                if (this.value === 'false') {
                                    notInThisChurchOpt.classList.remove('no_ifhere')
                                    whereAreTheyInput.required = true;
                                } else {
                                    notInThisChurchOpt.classList.add('no_ifhere')
                                }
                            });
                        });
                    } else {
                        ifHereOpt.classList.add('ifhere');
                    }
                });
            });
        } else {
            marriedForm.classList.add('maritial_bool');
        }
    });
});
// neighbourhood validator
const neighStatsRadio = document.querySelectorAll('input[name="neighStatus"]');
const neighbourhoodInfoInput = document.getElementById('neighbourhoodInfo');
const whyNotInfoInput = document.getElementById('whyNotServ');
const neighNameInput = document.getElementById('neighName');
const neighOwnerInput = document.getElementById('neighOwner');
const neighTutorInput = document.getElementById('neighTutor');
neighStatsRadio.forEach(radio => {
    radio.addEventListener('change', function(){
        if (this.value === 'true') {
            neighbourhoodInfoInput.classList.remove('neighbourhood_info');
            whyNotInfoInput.classList.add('why_not');
            neighNameInput.required = true;
            neighOwnerInput.required = true;
            neighTutorInput.required = true;
        } else {
            neighbourhoodInfoInput.classList.add('neighbourhood_info');
            whyNotInfoInput.classList.remove('why_not');
            whyNotInfoInput.required = true;
        }
    });
});