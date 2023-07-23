

$(document).ready(function(){
    $('.add-container-btn').on('click', function(){
        $("#addContainer").append(`
            <div class="row delete-row add-container-clone">
                <div class="form-field col-12 col-lg-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="kycid" id="kycid" value="" placeholder=" "
                            autocomplete="off">
                    <label for="kycid">Container NO.</label>
                </div>
                <div class="form-field col-12 col-lg-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="name" id="name" value="" placeholder=" "
                            autocomplete="off">
                    <label for="name">Container Size</label>
                </div>
                <div class="submit text-end col-12 col-lg-6">
                    <a class="delete ms-auto me-2 delete-container-clone" >
                        <i class="far fa-trash-alt"></i>
                    </a>
                </div>

                <div class="col-12"><hr/></div>
            
            </div>
        `);
    });


    $(document).on('click', '.delete-container-clone', function(){  
        $(this).parents('.delete-row').remove();
    }); 




    $('.add-transhipment-btn').on('click', function(){
        $("#addTranshipment").append(`
            <div class="delete-row row">
                <div class="form-field col-12 col-md-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="forwardblno" id="forwardblno" value=""
                        placeholder=" " autocomplete="off">
                    <label for="forwardblno"> Port Name</label>
                </div>

                <div class="form-field col-12 col-md-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="forwardblno" id="forwardblno" value=""
                        placeholder=" " autocomplete="off">
                    <label for="forwardblno"> Vessel Name</label>
                </div>

            

                <div class="form-field col-12 col-lg-6">
                    <i class="fa-regular fa-calendar-days"></i>
                    <input type="" class="portDischarge-segment1-field4" name="DischargeDate-1" id="portDischarge-segment1-field4" placeholder=" "
                            autocomplete="off">
                    <label for="DischargeDate-1">E.T.A  Port</label>
                </div>

                <div class="form-field col-12 col-md-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="forwardblno" id="forwardblno" value=""
                        placeholder=" " autocomplete="off">
                    <label for="forwardblno"> Port Agent Name</label>
                </div>


                <div class="form-field col-12 col-md-6">
                    <i class="me-3 far fa-id-badge"></i>
                    <input type="text" name="forwardblno" id="forwardblno" value=""
                        placeholder=" " autocomplete="off">
                    <label for="forwardblno"> Voyage</label>
                </div>


                <div class="form-field col-12 col-lg-6">
                    <i class="fa-regular fa-calendar-days"></i>
                    <input type="" class="portDischarge-segment1-field5" name="DischargeDate-1" id="portDischarge-segment1-field5" placeholder=" "
                            autocomplete="off">
                    <label for="DischargeDate-1">E.T.D  Port</label>
                </div>
                <div class="submit text-end col-12 col-lg-6">
                    <a class="delete ms-auto me-2 delete-transhipment-clone" >
                        <i class="far fa-trash-alt"></i>
                    </a>
                </div>

                <div class="col-12"><hr/></div>
            </div>
        `);

        $(".portDischarge-segment1-field4").pickadate({
            selectMonths: true,
            selectYears: true
        })

        $(".portDischarge-segment1-field5").pickadate({
            selectMonths: true,
            selectYears: true
        })
    });


    $(document).on('click', '.delete-transhipment-clone', function(){  
        $(this).parents('.delete-row').remove();
    }); 
    
});