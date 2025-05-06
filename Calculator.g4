grammar Calculator;

//Lexemas
ID: ('a'..'z' | 'A'..'Z' | '_') ('a'..'z' | 'A'..'Z' | '_')*;
NUMBER: ('0'..'9')+;
WS: [ \t]+ -> skip;

//Gramatica
prog: stat+;

stat: decl
    | assign
    | expr ';'
    ;

decl: ('let' | 'var') ID ('=' expr)? ';'
    ;

assign: ID '=' expr ';'
    ;

expr: expr ('*' | '/') expr
    | expr ('+' | '-') expr
    | '(' expr ')'
    | ID
    | NUMBER
    ;