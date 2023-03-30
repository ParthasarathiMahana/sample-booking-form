var package = document.getElementById('packages');
var adults = document.getElementById('adults');
var adultOptions = document.getElementsByClassName('adultOption');
var children = document.getElementById('children');
var subTotal = document.getElementById('subtotal_cal');
var total = document.getElementById('total_cal');


var adultPrice;
var childrenPrice;
package.addEventListener('click', function(){
    if(subTotal.innerHTML != 'NaN')
    {
        if(package.value == 'Regular')
        {
            if(adults.value == '')
            {
                subTotal.innerHTML = parseInt(children.value)*400;
            }
            else if(children.value == '')
            {
                subTotal.innerHTML = parseInt(adults.value)*500;
            }
            else
            {
                var ch = parseInt(children.value)*400;
                var ad = parseInt(adults.value)*500;
                subTotal.innerHTML = ch+ad;
            }
        }
        else{
            if(adults.value == '')
            {
                subTotal.innerHTML = parseInt(children.value)*200;
            }
            else if(children.value == '')
            {
                subTotal.innerHTML = parseInt(adults.value)*250;
            }
            else
            {
                var ch = parseInt(children.value)*200;
                var ad = parseInt(adults.value)*250;
                subTotal.innerHTML = ch+ad;
            }
        }
    }

    // calculating total price
    total.innerHTML = parseInt(subTotal.innerHTML)+((parseInt(subTotal.innerHTML)/100)*18); 
});

adults.addEventListener('click', function(){

    // creating a price variable for adults depending up on the packages they choose
    if(package.value == 'Regular')
    {
        adultPrice = 500;
        childrenPrice = 400;
    }
    else if(package.value = 'Offer')
    {
        adultPrice = 250;
        childrenPrice = 200;
    }

    // calculating subtotal price
    if(subTotal.innerHTML == 'NaN')
    {
        if(adults.value != '')
        {
            subTotal.innerHTML = parseInt(adults.value) * adultPrice;
        }
    }
    else{
        if(children.value == '')
        {
            subTotal.innerHTML = parseInt(adults.value) * adultPrice;
        }
        else
        {
            var childrenVal = parseInt(children.value)*childrenPrice;
            if(adults.value == '')
            {
                subTotal.innerHTML = childrenVal;
            }
            else
            {
                var adultVal = parseInt(adults.value)*adultPrice;
                subTotal.innerHTML = adultVal+childrenVal;
            }
        }
    }

    // calculating total price
    total.innerHTML = parseInt(subTotal.innerHTML)+((parseInt(subTotal.innerHTML)/100)*18);
});


children.addEventListener('click', function(){

    // creating a price variable for adults depending up on the packages they choose
    if(package.value == 'Regular')
    {
        adultPrice = 500;
        childrenPrice = 400;
    }
    else if(package.value = 'Offer')
    {
        adultPrice = 250;
        childrenPrice = 200;
    }

    // calculating subtotal price
    if(subTotal.innerHTML == 'NaN')
    {
        if(children.value != '')
        {
            subTotal.innerHTML = parseInt(children.value) * childrenPrice;
        }
    }
    else{
        if(adults.value == '')
        {
            subTotal.innerHTML = parseInt(children.value) * childrenPrice;
        }
        else
        {
            var adultVal = parseInt(adults.value)*adultPrice;
            if(children.value == '')
            {
                subTotal.innerHTML = adultVal;
            }
            else
            {
                var childrenVal = parseInt(children.value)*childrenPrice;
                subTotal.innerHTML = adultVal+childrenVal;
            }
        }
    }
    
    // calculating total price
    total.innerHTML = parseInt(subTotal.innerHTML)+((parseInt(subTotal.innerHTML)/100)*18);
});