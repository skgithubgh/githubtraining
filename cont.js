function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var mobile= document.getElementById('mobile');
    var city= document.getElementById('city');
    var mssg= document.getElementById('mssg');

    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || mobile.value === ''|| city.value === '' || mssg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            mobile.value = '';
            city.value = '';
            mssg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}