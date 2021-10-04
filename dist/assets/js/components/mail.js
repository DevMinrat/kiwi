"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var formContacts = document.querySelector(".contacts__form");
var formCalc = document.querySelector(".calc-form");
var formProject = document.querySelector(".consultation__form");

if (formContacts) {
  formContacts.addEventListener("submit", formSend);
  formCalc.addEventListener("submit", formSend);
}

if (formProject) {
  formProject.addEventListener("submit", formSend);
}

function formSend(_x) {
  return _formSend.apply(this, arguments);
}

function _formSend() {
  _formSend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var formData, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formData = new FormData(this);
            _context.next = 4;
            return fetch("sendmail.php", {
              method: "POST",
              body: formData
            });

          case 4:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 13;
              break;
            }

            _context.next = 8;
            return response.json();

          case 8:
            result = _context.sent;
            this.reset();
            openModalForm();
            _context.next = 14;
            break;

          case 13:
            alert("Ошибка");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _formSend.apply(this, arguments);
}