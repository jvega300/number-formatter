'use strict'

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function(){
    
    it('debería convertir el valor a 1 digito', function(){
        var result = numFormatter(1);
        expect (result).to.equal('1');
    });
    
    it('debería convertir el valor a 2 digitos', function(){
        var result = numFormatter(12);
        expect (result).to.equal('12');
    });

    it('debería convertir el valor a 3 digitos', function(){
        var result = numFormatter(123);
        expect (result).to.equal('123');
    });

    it('debería convertir el valor a 4 digitos', function(){
        var result = numFormatter(1234);
        expect (result).to.equal('1,234');
    });

    it('debería convertir el valor a 5 digitos', function(){
        var result = numFormatter(12345);
        expect (result).to.equal('12,345');
    });

    it('debería convertir el valor a 6 digitos', function(){
        var result = numFormatter(123456);
        expect (result).to.equal('123,456');
    });

    it ('debería convertir el valor a 7 digitos', function(){
        var result = numFormatter(1234567);
        expect (result).to.equal('1,234,567');
    })

    it('debería convertir el valor a 8 digitos', function(){
        var result = numFormatter(12345678);
        expect (result).to.equal('12,345,678');
    })

})