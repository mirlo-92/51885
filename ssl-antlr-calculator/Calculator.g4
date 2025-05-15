grammar Calculator;

// Reglas léxicas (tokens)
IMPRIMIR        : 'imprimir';
MIENTRAS        : 'mientras';
VERDADERO       : 'verdadero';
FALSO           : 'falso';
PAREN_IZQ       : '(';
PAREN_DER       : ')';
LLAVE_ABIERTA   : '{';
LLAVE_CERRADA   : '}';
PUNTO_Y_COMA    : ';';
COMA            : ',';
COMILLAS        : '"';
ESPACIO         : ' ';
LETRA           : [a-zA-Z]+;
DIGITO          : [0-9]+;
SIMBOLO         : [.,!?:;];

// Reglas sintácticas
programa        :instruccion+
                ;

instruccion     :bucle | salida
                ;

bucle           :'mientras' ESPACIO? condicion ESPACIO? '{' instruccion+ ESPACIO?'}' PUNTO_Y_COMA?
                ;

salida          :'imprimir' ESPACIO? '(' cadena ')' ESPACIO? ';'
                ;

condicion       :'verdadero' | 'falso';

cadena          :'"' caracter+ '"'
                ;

caracter        :LETRA
                |DIGITO
                |' '
                |SIMBOLO
                ;

// Ignorar espacios y saltos de línea
WS              : [\t\r\n ]+ -> skip;