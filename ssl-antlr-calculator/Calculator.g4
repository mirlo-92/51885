grammar Calculator;

// Reglas sintácticas
programa        :instruccion+;
instruccion     :bucle | salida;
bucle           :MIENTRAS ESPACIO? condicion ESPACIO? LLAVE_ABIERTA instruccion+ ESPACIO? LLAVE_CERRADA;
salida          :IMPRIMIR ESPACIO? PAREN_IZQ cadena ESPACIO? PAREN_DER;
condicion       :VERDADERO | FALSO;
cadena          :COMILLAS caracter+ COMILLAS;
caracter        :LETRA | DIGITO | ' ' | SIMBOLO;


// Reglas léxicas (tokens)
IMPRIMIR        : 'imprimir';
MIENTRAS        : 'mientras';
VERDADERO       : 'verdadero';
FALSO           : 'falso';
LETRA           : [a-zA-Z];
DIGITO          : [0-9];
SIMBOLO         : [.,!?:;'];
LLAVE_ABIERTA   : '{';
PAREN_IZQ       : '(';
COMILLAS        : '"';
ESPACIO         : ' ';
COMA            : ',';
PAREN_DER       : ')';
LLAVE_CERRADA   : '}';
PUNTO_Y_COMA    : ';';

// Ignorar espacios y saltos de línea
WS              : [\t\r\n ]+ -> skip;