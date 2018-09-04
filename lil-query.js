  /*!
   * lil-query v1.0 (link)
   * Copyright 2018 Sethu Senthil
   * MIT License (link)
   */
  let doc = document,
   id = (e) => {
          return doc.getElementById(e);
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
          for (var i = 0; i <= classLength(e) - 1; i++) {
              ef = `${f}()`;
              classElem = classGet(e, i);
              eval(ef);
          }
      };