grammar Calculator;

// Reglas léxicas (tokens)
VAR     : 'var';
LET     : 'let';
CONST   : 'const';
IF      : 'if';
ELSE    : 'else';
WHILE   : 'while';
FOR     : 'for';
RETURN  : 'return';

SEMI    : ';';
ASSIGN  : '=';
PLUS    : '+';
MINUS   : '-';
MULT    : '*';
DIV     : '/';

LPAREN  : '(';
RPAREN  : ')';
LBRACE  : '{';
RBRACE  : '}';

NUMBER  : [0-9]+;
ID      : [a-zA-Z_][a-zA-Z_0-9]*;

WS      : [ \t\r\n]+ -> skip; // Ignorar espacios y saltos de línea

// Reglas sintácticas mínimas
prog:   stat+ ;

stat
    : decl
    | exprStmt
    ;

decl
    : (VAR | LET | CONST) ID ASSIGN expr SEMI
    ;

exprStmt
    : expr SEMI
    ;

expr
    : expr op=('+'|'-') expr
    | expr op=('*'|'/') expr
    | '(' expr ')'
    | ID
    | NUMBER
    ;
