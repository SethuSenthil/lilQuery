  /*!
   * lil-query v0.1 beta(link)
   * Copyright 2018 Sethu Senthil
   * MIT License (link)
   */
  let doc = document,
  el, //exposes element to global
      log = (se) =>{
          console.log(se);
      }
     id = (e,f) => {
            el = doc.getElementById(e);
            if (f !== '') {
                ef = `${f}();`; //builds function reference into executubile js format
                eval(ef);
            }else{
                return el;
            }
        },
        classGet = (e, n) => {
            return doc.getElementsByClassName(e)[n];
        },
        classLength = (e) => {
            return doc.getElementsByClassName(e).length;
        },
        tag = (e, n) => {
            return doc.getElementsByTagName(e)[n];
        },
        classGetAll = (e, f) => {
            for (let i = 0; i <classLength(e); i++) {
         el = classGet(e, i); //fetches current element refferfc in loop iteration
          ef = `${f}();`; //builds function reference into executubile js format
          eval(ef);
            }
        },
        get = (e,nf) =>{
          let fl = e.charAt(0), //Gets first character of the first perameter
          fc = e.slice(1, e.length); //"Removal" of the first character
            if (fl === '#') {  //Checks if it's an id, class, or a "getClassAll"
              return id(fc);
            }else if(fl === '.' && nf !== ''){
              return classGet(fc, nf);
            } else if(fl === '.' && nf === ''){
               classGetAll(fc, nf)
            }
        }