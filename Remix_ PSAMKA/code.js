//AK S
hideElement("BAD");
var pitta = 0;
var vata = 0;
var kapha = 0;
var VP = 0;
var VK = 0;
var PK = 0;
var prakruti = 0;
var vatapittakapha = 0;
//AK E
//SU S
//SU E
//AK S
onEvent("vata1", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata2", "click", function( ) {
	vata = vata + 1;
});
onEvent("vata3", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata4", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata5", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata6", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata7", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata8", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata9", "click", function( ) {
  vata = vata + 1;
});
onEvent("vata10", "click", function( ) {
  vata = vata + 1;
});
onEvent("pitta1", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta2", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta3", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta4", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta5", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta6", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta7", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta8", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta9", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("pitta10", "click", function( ) {
  pitta = pitta + 1;
});
onEvent("kapha1", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha2", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha3", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha4", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha5", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha6", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha7", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha8", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha9", "click", function( ) {
  kapha = kapha + 1;
});
onEvent("kapha10", "click", function( ) {
  kapha = kapha + 1;
});
//AK E
onEvent("start", "click", function( ) {
  setScreen("qu1");
});
onEvent("next1", "click", function( ) {
  setScreen("qu2");
});
onEvent("next2", "click", function( ) {
  setScreen("qu3");
});
onEvent("next3", "click", function( ) {
  setScreen("qu4");
});
onEvent("next4", "click",  
function( ) {
  vatapittakapha = vata + pitta + kapha;
  if (vatapittakapha == 10) {
    setScreen("determine");
    if (vata >= pitta) {
     VP = vata - pitta;
      } else if ((pitta > vata)) {
     VP = pitta - vata;
      }
    if (vata >= kapha) {
     VK = vata - kapha;
      } else if ((kapha > vata)) {
     VK = kapha - vata;
      }
    if (pitta >= kapha) {
     PK = pitta - kapha;
      } else if ((kapha > pitta)) {
     PK = kapha - pitta;
      }
    if (VP <= 1 && VK <= 1 && PK <= 1) {
     prakruti = "VataPittaKapha";
      }
    if ( vata > kapha && pitta > kapha && VP <= 1) {
     prakruti = "VataPitta";
      } else if ( vata > pitta && kapha > pitta && VK <= 1) {
     prakruti = "VataKapha";
      } else if ( kapha > vata && pitta > vata && PK <= 1) {
     prakruti = "PittaKapha";
      }
    if (vata > 5) {
     prakruti = "Vata";
      } else if ((pitta > 5)) {
     prakruti = "Pitta";
      } else if ((kapha > 5)) {
    prakruti = "Kapha";
     }
  } else if ((vatapittakapha > 10 || vatapittakapha < 10)) {
    VP = 0;
    VK = 0;
    PK = 0;
    prakruti = 0;
    pitta = 0;
    vata = 0;
    kapha = 0;
    vatapittakapha = 0;
    setChecked("vata1", false);
    setChecked("vata2", false);
    setChecked("vata3", false);
    setChecked("vata4", false);
    setChecked("vata5", false);
    setChecked("vata6", false);
    setChecked("vata7", false);
    setChecked("vata8", false);
    setChecked("vata9", false);
    setChecked("vata10", false);
    setChecked("pitta1", false);
    setChecked("pitta2", false);
    setChecked("pitta3", false);
    setChecked("pitta4", false);
    setChecked("pitta5", false);
    setChecked("pitta6", false);
    setChecked("pitta7", false);
    setChecked("pitta8", false);
    setChecked("pitta9", false);
    setChecked("pitta10", false);
    setChecked("kapha1", false);
    setChecked("kapha2", false);
    setChecked("kapha3", false);
    setChecked("kapha4", false);
    setChecked("kapha5", false);
    setChecked("kapha6", false);
    setChecked("kapha7", false);
    setChecked("kapha8", false);
    setChecked("kapha9", false);
    setChecked("kapha10", false);
    showElement("BAD");
    setScreen("qu1");
    setTimeout(function() {
      hideElement("BAD");
    }, 5000);
  }
});
onEvent("exit", "click", function( ) {
  setChecked("vata1", false);
  setChecked("vata2", false);
  setChecked("vata3", false);
  setChecked("vata4", false);
  setChecked("vata5", false);
  setChecked("vata6", false);
  setChecked("vata7", false);
  setChecked("vata8", false);
  setChecked("vata9", false);
  setChecked("vata10", false);
  setChecked("pitta1", false);
  setChecked("pitta2", false);
  setChecked("pitta3", false);
  setChecked("pitta4", false);
  setChecked("pitta5", false);
  setChecked("pitta6", false);
  setChecked("pitta7", false);
  setChecked("pitta8", false);
  setChecked("pitta9", false);
  setChecked("pitta10", false);
  setChecked("kapha1", false);
  setChecked("kapha2", false);
  setChecked("kapha3", false);
  setChecked("kapha4", false);
  setChecked("kapha5", false);
  setChecked("kapha6", false);
  setChecked("kapha7", false);
  setChecked("kapha8", false);
  setChecked("kapha9", false);
  setChecked("kapha10", false);
  VP = 0;
  VK = 0;
  PK = 0;
  prakruti = 0;
  pitta = 0;
  vata = 0;
  kapha = 0;
  vatapittakapha = 0;
  setScreen("welscreen");
});
onEvent("back1", "click", function( ) {
  setScreen("qu1");
});
onEvent("back2", "click", function() {
  setScreen("qu2");
});
onEvent("back3", "click", function( ) {
  setScreen("qu3");
});
onEvent("back4", "click", function( ) {
  setScreen("prakrutiscreen");
});
onEvent("prakruti", "click", function( ) {
  setScreen("prakrutiscreen");
  setNumber("vata", vata);
  setNumber("pitta", pitta);
  setNumber("kapha", kapha);
  setText("prakruti2", prakruti);
});
onEvent("disease", "click", function( ) {
  if (prakruti == "Pitta") {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseP");
      onEvent("diseasePE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "Vata")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseV");
      onEvent("diseaseVE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "Kapha")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseK");
      onEvent("diseaseKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataPitta")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseVP");
      onEvent("diseaseVPE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataKapha")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseVK");
      onEvent("diseaseVKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "PittaKapha")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseasePK");
      onEvent("diseasePKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataPittaKapha")) {
    onEvent("disease", "click", function( ) {
      setScreen("diseaseVPK");
      onEvent("diseaseVPKE", "click", function( ) {
        setScreen("determine");
      });
    });
  }
});
onEvent("prescription", "click", function( ) {
  if (prakruti == "Pitta") {
    onEvent("prescription", "click", function( ) {
      setScreen("prescriptionP");
      onEvent("prescriptionPE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "Vata")) {
    onEvent("prescription", "click", function( ) {
      setScreen("prescriptionV");
      onEvent("prescriptionVE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "Kapha")) {
    onEvent("prescription", "click", function( ) {
      setScreen("prescriptionK");
      onEvent("prescriptionKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataPitta")) {
    onEvent("prescription", "click", function( ) {
      setScreen("PRESCRIPTIONVP");
      onEvent("prescriptionVPE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataKapha")) {
    onEvent("prescription", "click", function( ) {
      setScreen("prescriptionVK");
      onEvent("prescriptionVKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "PittaKapha")) {
    onEvent("prescription", "click", function( ) {
      setScreen("prescriptionPK");
      onEvent("prescriptionPKE", "click", function( ) {
        setScreen("determine");
      });
    });
  } else if ((prakruti == "VataPittaKapha")) {
    onEvent("prescription", "click", function( ) {
      setScreen("PRESCRIPTIONVPK");
      onEvent("prescriptionVPKE", "click", function( ) {
        setScreen("determine");
      });
    });
  }
});
