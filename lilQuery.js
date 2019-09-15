  /*!
   * lil-query v0.1 beta(link)
   * Copyright 2018 Sethu Senthil
   * MIT License (link)
   */
  const doc = document,
      log = (se) =>{
          console.log(se);
      }
     id = (e,f) => {
            el = doc.querySelector('#' + e);
            if (f !== undefined) {
                ef = `${f}();`; //builds function reference into executable js format
                eval(ef);
            }else{
                return el;
            }
        },
        classGet = (e, n) => {
            if(n !== '')
             return doc.querySelector('.' + e);

            return doc.querySelectorAll('.' + e)[n];
        },
        classLength = (e) => {
            return doc.getElementsByClassName(e).length;
        },
        tag = (e, n) => {
            return doc.getElementsByTagName(e)[n];
        },
        get = (e,nf) =>{
          let fl = e.charAt(0); //Gets first character of the first parameter
            if (fl === '#') {  //Checks if it's an id, class, or a "getClassAll"
              return id(e.substr(1));
            }else if(fl === '.'){
              return classGet(e.substr(1), nf);
            }
        }