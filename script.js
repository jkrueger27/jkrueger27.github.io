(function () {
  var countries = {
    //keys
    'Argentina': 90,
    'Brazil': null,
    'Bolivia': 90,
    'Chile': 90,
    'Columbia': 180,
    'Equador': 180,
    'French Guyana': 90,
    'Guyana': 90,
    'Paraguay': 90,
    'Peru': 180,
    'suriname': 90,
    'uruguay': 90,
    'venezuala': 90
  }
  //main container div
  var container = document.getElementById('container');
  //create a couple selects
  var countriesSelect = document.createElement('select');
  var stayLengthSelect = document.createElement('select');
    
//Add default values for selects
var countriesDefault = document.createElement('option');
var stayLengthDefault = document.createElement('option');
    
countriesDefault.innerHTML = 'Please select a country';
stayLengthDefault.innerHTML = 'How long will you be staying?';
    
countriesSelect.appendChild(countriesDefault);
stayLengthSelect.appendChild(stayLengthDefault);

//set up first select options (countriesSelect)
Object.keys(countries).forEach(function (country) {
    var option = document.createElement('option');
    
    option.setAttribute('value' , country);
    
    option.innerHTML = country;
    countriesSelect.appendChild(option);
});
    
//set up second select options (stayLengthSelect)
[30,60,90,180].forEach(function (stayLength) {
    var option = document.createElement('option');
    
    option.setAttribute('value', stayLength);
    option.innerHTML = stayLength;
    
    stayLengthSelect.appendChild(option);
});

  //append selects to container
  container.appendChild(countriesSelect);
  container.appendChild(stayLengthSelect);
    
//listen for select changes
container.addEventListener('change', function (e) {
    //remove old response
    var oldResponse = document.getElementById('response');
    if (oldResponse) {
        container.removeChild(oldResponse);
    }
    if (stayLengthSelect.value !== 'How long will you be staying?' && countriesSelect.value !== 'Please select a country') {
        //console.log(parseInt(countries[countriesSelect.value]), parseInt(stayLengthSelect.value));
        var response = document.createElement('div');
        response.setAttribute('id', 'response');
        
        if (parseInt(countries[countriesSelect.value]) >= parseInt(stayLengthSelect.value)) {
                response.innerHTML = 'No Visa required';
        } else {
            response.innerHTML = 'You\'re going to need a visa';
        }
        container.appendChild(response);
    }
 });
})();
