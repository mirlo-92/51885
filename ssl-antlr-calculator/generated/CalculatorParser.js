// Generated from c:/Users/pablo/OneDrive/Escritorio/UTN/2DO AÑO/SINTAXIS Y SEMANTICA DE LOS LENGUAJES/PRACTICA/analizador/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,16,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,3,1,22,8,1,1,2,1,2,3,
2,26,8,2,1,2,1,2,3,2,30,8,2,1,2,1,2,4,2,34,8,2,11,2,12,2,35,1,2,3,2,39,8,
2,1,2,1,2,3,2,43,8,2,1,3,1,3,3,3,47,8,3,1,3,1,3,1,3,1,3,3,3,53,8,3,1,3,1,
3,1,4,1,4,1,5,1,5,4,5,61,8,5,11,5,12,5,62,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,
4,6,8,10,12,0,2,1,0,3,4,1,0,12,15,71,0,15,1,0,0,0,2,21,1,0,0,0,4,23,1,0,
0,0,6,44,1,0,0,0,8,56,1,0,0,0,10,58,1,0,0,0,12,66,1,0,0,0,14,16,3,2,1,0,
15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,
22,3,4,2,0,20,22,3,6,3,0,21,19,1,0,0,0,21,20,1,0,0,0,22,3,1,0,0,0,23,25,
5,2,0,0,24,26,5,12,0,0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,29,3,
8,4,0,28,30,5,12,0,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,33,5,7,
0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,
0,36,38,1,0,0,0,37,39,5,12,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,
40,42,5,8,0,0,41,43,5,9,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,
46,5,1,0,0,45,47,5,12,0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,
5,5,0,0,49,50,3,10,5,0,50,52,5,6,0,0,51,53,5,12,0,0,52,51,1,0,0,0,52,53,
1,0,0,0,53,54,1,0,0,0,54,55,5,9,0,0,55,7,1,0,0,0,56,57,7,0,0,0,57,9,1,0,
0,0,58,60,5,11,0,0,59,61,3,12,6,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,
0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,5,11,0,0,65,11,1,0,0,0,66,67,7,1,0,
0,67,13,1,0,0,0,10,17,21,25,29,35,38,42,46,52,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'imprimir'", "'mientras'", "'verdadero'", 
                            "'falso'", "'('", "')'", "'{'", "'}'", "';'", 
                            "','", "'\"'", "' '" ];
    static symbolicNames = [ null, "IMPRIMIR", "MIENTRAS", "VERDADERO", 
                             "FALSO", "PAREN_IZQ", "PAREN_DER", "LLAVE_ABIERTA", 
                             "LLAVE_CERRADA", "PUNTO_Y_COMA", "COMA", "COMILLAS", 
                             "ESPACIO", "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion", 
                         "cadena", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 21;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.bucle();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(CalculatorParser.MIENTRAS);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 24;
	            this.match(CalculatorParser.ESPACIO);
	        }

	        this.state = 27;
	        this.condicion();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 28;
	            this.match(CalculatorParser.ESPACIO);
	        }

	        this.state = 31;
	        this.match(CalculatorParser.LLAVE_ABIERTA);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.instruccion();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 37;
	            this.match(CalculatorParser.ESPACIO);
	        }

	        this.state = 40;
	        this.match(CalculatorParser.LLAVE_CERRADA);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 41;
	            this.match(CalculatorParser.PUNTO_Y_COMA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_salida);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(CalculatorParser.IMPRIMIR);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 45;
	            this.match(CalculatorParser.ESPACIO);
	        }

	        this.state = 48;
	        this.match(CalculatorParser.PAREN_IZQ);
	        this.state = 49;
	        this.cadena();
	        this.state = 50;
	        this.match(CalculatorParser.PAREN_DER);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 51;
	            this.match(CalculatorParser.ESPACIO);
	        }

	        this.state = 54;
	        this.match(CalculatorParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(CalculatorParser.COMILLAS);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 59;
	            this.caracter();
	            this.state = 62; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0));
	        this.state = 64;
	        this.match(CalculatorParser.COMILLAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.IMPRIMIR = 1;
CalculatorParser.MIENTRAS = 2;
CalculatorParser.VERDADERO = 3;
CalculatorParser.FALSO = 4;
CalculatorParser.PAREN_IZQ = 5;
CalculatorParser.PAREN_DER = 6;
CalculatorParser.LLAVE_ABIERTA = 7;
CalculatorParser.LLAVE_CERRADA = 8;
CalculatorParser.PUNTO_Y_COMA = 9;
CalculatorParser.COMA = 10;
CalculatorParser.COMILLAS = 11;
CalculatorParser.ESPACIO = 12;
CalculatorParser.LETRA = 13;
CalculatorParser.DIGITO = 14;
CalculatorParser.SIMBOLO = 15;
CalculatorParser.WS = 16;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instruccion = 1;
CalculatorParser.RULE_bucle = 2;
CalculatorParser.RULE_salida = 3;
CalculatorParser.RULE_condicion = 4;
CalculatorParser.RULE_cadena = 5;
CalculatorParser.RULE_caracter = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_bucle;
    }

	MIENTRAS() {
	    return this.getToken(CalculatorParser.MIENTRAS, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(CalculatorParser.LLAVE_ABIERTA, 0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(CalculatorParser.LLAVE_CERRADA, 0);
	};

	ESPACIO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.ESPACIO);
	    } else {
	        return this.getToken(CalculatorParser.ESPACIO, i);
	    }
	};


	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	PUNTO_Y_COMA() {
	    return this.getToken(CalculatorParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(CalculatorParser.IMPRIMIR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(CalculatorParser.PAREN_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAREN_DER() {
	    return this.getToken(CalculatorParser.PAREN_DER, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(CalculatorParser.PUNTO_Y_COMA, 0);
	};

	ESPACIO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.ESPACIO);
	    } else {
	        return this.getToken(CalculatorParser.ESPACIO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(CalculatorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(CalculatorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_cadena;
    }

	COMILLAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.COMILLAS);
	    } else {
	        return this.getToken(CalculatorParser.COMILLAS, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(CalculatorParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(CalculatorParser.DIGITO, 0);
	};

	ESPACIO() {
	    return this.getToken(CalculatorParser.ESPACIO, 0);
	};

	SIMBOLO() {
	    return this.getToken(CalculatorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.BucleContext = BucleContext; 
CalculatorParser.SalidaContext = SalidaContext; 
CalculatorParser.CondicionContext = CondicionContext; 
CalculatorParser.CadenaContext = CadenaContext; 
CalculatorParser.CaracterContext = CaracterContext; 
