// Generated from c:/Users/pablo/OneDrive/Escritorio/UTN/2DO AÑO/SINTAXIS Y SEMANTICA DE LOS LENGUAJES/PRACTICA/analizador-51885/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,102,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,
1,10,1,10,1,11,1,11,1,12,4,12,85,8,12,11,12,12,12,86,1,13,4,13,90,8,13,11,
13,12,13,91,1,14,1,14,1,15,4,15,97,8,15,11,15,12,15,98,1,15,1,15,0,0,16,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
15,31,16,1,0,4,2,0,65,90,97,122,1,0,48,57,5,0,33,33,44,44,46,46,58,59,63,
63,3,0,9,10,13,13,32,32,104,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,
0,31,1,0,0,0,1,33,1,0,0,0,3,42,1,0,0,0,5,51,1,0,0,0,7,61,1,0,0,0,9,67,1,
0,0,0,11,69,1,0,0,0,13,71,1,0,0,0,15,73,1,0,0,0,17,75,1,0,0,0,19,77,1,0,
0,0,21,79,1,0,0,0,23,81,1,0,0,0,25,84,1,0,0,0,27,89,1,0,0,0,29,93,1,0,0,
0,31,96,1,0,0,0,33,34,5,105,0,0,34,35,5,109,0,0,35,36,5,112,0,0,36,37,5,
114,0,0,37,38,5,105,0,0,38,39,5,109,0,0,39,40,5,105,0,0,40,41,5,114,0,0,
41,2,1,0,0,0,42,43,5,109,0,0,43,44,5,105,0,0,44,45,5,101,0,0,45,46,5,110,
0,0,46,47,5,116,0,0,47,48,5,114,0,0,48,49,5,97,0,0,49,50,5,115,0,0,50,4,
1,0,0,0,51,52,5,118,0,0,52,53,5,101,0,0,53,54,5,114,0,0,54,55,5,100,0,0,
55,56,5,97,0,0,56,57,5,100,0,0,57,58,5,101,0,0,58,59,5,114,0,0,59,60,5,111,
0,0,60,6,1,0,0,0,61,62,5,102,0,0,62,63,5,97,0,0,63,64,5,108,0,0,64,65,5,
115,0,0,65,66,5,111,0,0,66,8,1,0,0,0,67,68,5,40,0,0,68,10,1,0,0,0,69,70,
5,41,0,0,70,12,1,0,0,0,71,72,5,123,0,0,72,14,1,0,0,0,73,74,5,125,0,0,74,
16,1,0,0,0,75,76,5,59,0,0,76,18,1,0,0,0,77,78,5,44,0,0,78,20,1,0,0,0,79,
80,5,34,0,0,80,22,1,0,0,0,81,82,5,32,0,0,82,24,1,0,0,0,83,85,7,0,0,0,84,
83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,26,1,0,0,0,88,90,
7,1,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,28,1,
0,0,0,93,94,7,2,0,0,94,30,1,0,0,0,95,97,7,3,0,0,96,95,1,0,0,0,97,98,1,0,
0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,6,15,0,0,101,32,1,
0,0,0,4,0,86,91,98,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'imprimir'", "'mientras'", "'verdadero'", 
                         "'falso'", "'('", "')'", "'{'", "'}'", "';'", "','", 
                         "'\"'", "' '" ];
	static symbolicNames = [ null, "IMPRIMIR", "MIENTRAS", "VERDADERO", "FALSO", 
                          "PAREN_IZQ", "PAREN_DER", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                          "PUNTO_Y_COMA", "COMA", "COMILLAS", "ESPACIO", 
                          "LETRA", "DIGITO", "SIMBOLO", "WS" ];
	static ruleNames = [ "IMPRIMIR", "MIENTRAS", "VERDADERO", "FALSO", "PAREN_IZQ", 
                      "PAREN_DER", "LLAVE_ABIERTA", "LLAVE_CERRADA", "PUNTO_Y_COMA", 
                      "COMA", "COMILLAS", "ESPACIO", "LETRA", "DIGITO", 
                      "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.IMPRIMIR = 1;
CalculatorLexer.MIENTRAS = 2;
CalculatorLexer.VERDADERO = 3;
CalculatorLexer.FALSO = 4;
CalculatorLexer.PAREN_IZQ = 5;
CalculatorLexer.PAREN_DER = 6;
CalculatorLexer.LLAVE_ABIERTA = 7;
CalculatorLexer.LLAVE_CERRADA = 8;
CalculatorLexer.PUNTO_Y_COMA = 9;
CalculatorLexer.COMA = 10;
CalculatorLexer.COMILLAS = 11;
CalculatorLexer.ESPACIO = 12;
CalculatorLexer.LETRA = 13;
CalculatorLexer.DIGITO = 14;
CalculatorLexer.SIMBOLO = 15;
CalculatorLexer.WS = 16;



