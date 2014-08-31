(function () {
  var countries = {
    //keys
    argentina: {

    },
    brazil: {

    },
    bolivia: {

    },
    chile: {

    },
    columbia: {

    },
    equador: {

    },
    french_guyana: {

    },
    guyana: {

    },
    suriname: {

    },
    uruguay: {

    },
    venezuala: {

    }
  }
  //main container div
  var container = document.getElementById('container');
  //create a couple selects
  var selectA = document.createElement('select');
  var selectB = document.createElement('select');

Object.keys(countries).forEach(function (country) {
    var option = document.createElement('option');
    
    option.setAttribute('value' , country);
    
    option.innerHTML = country;
    selectA.appendChild(option);
});


  //append selects to container
  container.appendChild(selectA);
  container.appendChild(selectB);
})();
