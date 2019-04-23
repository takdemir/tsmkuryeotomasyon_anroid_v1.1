function RegisterCourier() {

    this.url = window.localStorage.getItem("ipurl");

    this.register = function () {

        var nameInput = $('#popupname');
        var phoneInput = $('#popupmobilePhone');
        var emailInput = $('#popupemail');
        var addressInput = $('#popupaddress');
        var districtInput = $('#popuptsmdistrict');
        var tcInput = $('#popuptc');
        var bloodInput = $('#popupbloodGroup');
        var usernameInput = $('#popupwebUsername');
        var passwordInput = $('#popupwebPassword');

        if(common.isFalsy(nameInput.val())){
            alert('adınızı');
            common.showToast('Lütfen adınızı giriniz!','long','center',0);
        }else if(common.isFalsy(phoneInput.val())){
            common.showToast('Lütfen cep telefonu giriniz!','long','center',0);
        }else if(common.isFalsy(emailInput.val()) || emailInput.val().indexOf('@')===-1){
            common.showToast('Lütfen email giriniz!','long','center',0);
        }else if(common.isFalsy(addressInput.val())){
            common.showToast('Lütfen adres giriniz!','long','center',0);
        }else if(common.isFalsy(districtInput.val())){
            common.showToast('Lütfen semt seçiniz!','long','center',0);
        }else if(common.isFalsy(tcInput.val()) || tcInput.val().length!==11 || /^\d{11}$/.test(tcInput.val())===false){
            common.showToast('Lütfen TC kimlik numaranızı giriniz!','long','center',0);
        }else if(common.isFalsy(bloodInput.val())){
            common.showToast('Lütfen kan grubunuzu giriniz!','long','center',0);
        }else if(common.isFalsy(usernameInput.val())){
            common.showToast('Lütfen kullanıcıadı giriniz!','long','center',0);
        }else if(common.isFalsy(passwordInput.val())){
            common.showToast('Lütfen içinde en az bir büyük harf, bir küçük harf, bir sayı ve bir karakter içeren şifre giriniz!','long','center',0);
        }else{

            var data = {'name':nameInput.val(),
                        'address':addressInput.val(),
                        'tsmdistrict':districtInput.val(),
                        'mobilePhone':phoneInput.val(),
                        'phone':phoneInput.val(),
                        'tc':tcInput.val(),
                        'email':emailInput.val(),
                        'bloodGroup':bloodInput.val(),
                        'tsmmotorbikes':1,
                        'earnRate':0,
                        'webUsername':usernameInput.val(),
                        'webPassword':passwordInput.val(),
                        'isActive':0};

            common.setAjaxRequest(this.url+"/registercourierfromandroid",data,function (result,data) {

                if(result==='success'){

                    common.showToast(data.msg);
                    common.setSocket('new-courier-registered',{'name':nameInput.val(),'phone':phoneInput.val()});

                }else{
                    common.showToast(data.msg);
                }

            },'POST');
        }

    }
}

var registerCourier = new RegisterCourier();