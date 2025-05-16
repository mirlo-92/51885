# 🛠️ Analizador Sintáctico con ANTLR4 y JavaScript

## Tema: 39568_1  
Trabajo práctico de Sintaxis y Semántica de los Lenguajes.

Se proporciona una gramática en notación **EBNF** que describe un lenguaje específico.  
Utilizando **ANTLR4** con **JavaScript**, este proyecto implementa un analizador que procesa un archivo de entrada (`input.txt`) con código fuente escrito en dicho lenguaje específico.

---

## 📚 Gramática del Lenguaje

```ebnf
<programa>     ::= { <instrucción> } ;
<instrucción>  ::= <bucle> | <salida> ;
<bucle>        ::= "mientras" <condición> "{" { <instrucción> } "}" ;
<salida>       ::= "imprimir" "(" <cadena> ")" ;
<condición>    ::= "verdadero" | "falso" ;
<cadena>       ::= """ { <carácter> } """ ;
<carácter>     ::= <letra> | <dígito> | ' ' | <símbolo> ;
<letra>        ::= "a" | "b" | ... | "Z" ;
<dígito>       ::= "0" | "1" | ... | "9" ;
<símbolo>      ::= ":" | "." | "!" | "?" | "," ;
```

---

## 🛠️ Funcionalidades implementadas
### El analizador realiza las siguientes tareas:

- Análisis léxico y sintáctico:
    - Detecta errores léxicos o sintácticos en el archivo fuente. En caso de error, informa la línea y el motivo del fallo.

- Tabla de lexemas-tokens:
    - Genera una tabla con los lexemas y sus respectivos tokens reconocidos.

- Árbol de análisis sintáctico:
    - Construye y muestra el árbol sintáctico concreto del código fuente.

- Interpretación:
    - Traduce el código fuente al lenguaje JavaScript y lo ejecuta como un intérprete básico.

---

## 🚀 Cómo usar este proyecto
### 1. Requisitos previos
- [VS Code](https://code.visualstudio.com/Download) (IDE para editar y manipular código)
- [Node.js](https://nodejs.org/es/download) (para ejecutar JavaScript fuera del navegador)
- [ANTLR4 grammar syntax support]() (como extensión en VS Code)
- [Java (JRE o JDK)](https://www.oracle.com/java/technologies/downloads/?er=221886) (necesario para ANTLR)

### 2. Clonar el repositorio
```bash
git clone https://github.com/mirlo-92/51885.git
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar el programa
- Buscar la carpeta del repositorio clonado, click derecho > Abrir con Code (VS Code)
- En VS Code, abrir cualquiera de los archivos .txt Caso1, Caso2, Caso3 o Caso4, copiar el contenido y pegarlo en el archivo input.txt
- Abrir una terminal (como administrador)
- Dirigirse a la carpeta raiz del repositorio clonado usando el comando **cd**

- Ejemplo
```bash
cd C:/Usuario/pablo/Escritorio/51885/ssl-antlr-calculator
```
- Ejecutar
```bash
npm start
```

---

## 🧠 Entendiendo el programa
Una vez ejecutado con **npm start**, el programa te preguntará si quieres que analice el código escrito en el archivo input.txt.
```bash
¿Querés analizar el contenido de 'input.txt'? (s/n):
```

- Con **s** el programa analizará el código presente en el archivo *input.txt*.
- Con **n** el programa te pedirá que ingreses el código que quieres analizar *(⚠️ ATENCION: el código ingresado será en una sola línea. Si querés que el programa analice el código formateado en varias líneas e indentado, deberás ingresarlo en el archivo input.txt desde VS Code)*

### 📝 Para tener en cuenta
De acuerdo con las reglas de derivación de la gramática que conduce este analizador, el mismo no soporta algunas palabras del idioma español, ya que estas pueden tener símbolos como tildes o el caracter ñ, que activarán el mensaje de error léxico, al no reconocer estos símbolos como parte del lenguaje generado por la gramática.

### Ejemplo de código en una sola línea
```bash
mientras verdadero {imprimir("Este es un mensaje de ejemplo"); imprimir("Otro mensaje de ejemplo");}; mientras falso {imprimir("Condición falsa");};
```

### Ejemplo de código multilínea indentado
```bash
mientras verdadero{
    imprimir("Este es un mensaje de ejemplo");
    imprimir("Otro mensaje de ejemplo");
};

mientras falso {
    imprimir("Mensaje falso");
};
```

Una vez dado el código, el programa lo analizará, en búsqueda de errores léxicos y sintácticos. Deteniéndose si encontrase uno, otro o ambos, e indicando en qué línea y columna se encuentra el error, junto con un breve mensaje descriptivo del mismo.

En el caso de que no se encuentren errores de ningún tipo, el programa devolverá una tabla de *Lexemas y Tokens* relacionada al código analizado. Además, generará un árbol de derivaciones y por último mostrará el equivalente del código analizado traducido a *JavaScript*.

---

### 🚨 Bucles infinitos
A la hora de ingresar código para analizar, ten presente que puedes estar ingresando código que entre en un bucle infinito a la hora de que se ejecute el codigo traducido en JavaScript. El analizador está preparado para detener cualquier ejecución de este tipo; detendrá el bucle y te mostrará un mensaje de advertencia:
```bash
CUIDADO! Bucle infinito detenido
```

📝 El programa trae por defecto, un ejemplo de bucle infinito en el archivo input.txt, ya listo para ser analizado y poder ver cómo el programa reacciona frente a estos casos.

---

## ⚠️ Posibles mensajes de errores del programa
- El analizador no ha podido leer el archivo *input.txt*:
```bash
No se pudo leer el archivo 'input.txt'.
```

- Ante la pregunta *"¿Querés analizar el contenido de 'input.txt'? (s/n): "*, si se ingresa cualquier otra cosa que no sea *s* o *n* (admite mayusculas):
```bash
Opción no válida. Saliendo...
```

- Ante la pregunta *"¿Querés analizar el contenido de 'input.txt'? (s/n): "*, si no se ingresa nada y se da enter:
```bash
Entrada vacía. Saliendo...
```

---

## ✅ Ejemplo Funcional
- Código fuente:
```bash
mientras verdadero{
    imprimir("43");
};
```

- Tabla de Lexemas y Tokens:
```bash
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| mientras       | MIENTRAS                      |
|                | ESPACIO                       |
| verdadero      | VERDADERO                     |
| {              | LLAVE_ABIERTA                 |
| imprimir       | IMPRIMIR                      |
| (              | PAREN_IZQ                     |
| "              | COMILLAS                      |
| 43             | DIGITO                        |
| "              | COMILLAS                      |
| )              | PAREN_DER                     |
| ;              | PUNTO_Y_COMA                  |
| }              | LLAVE_CERRADA                 |
| ;              | PUNTO_Y_COMA                  |
--------------------------------------------------
```

- Árbol de derivación:
```bash
programa
└── instruccion
    └── bucle
        ├── 'mientras' [MIENTRAS]
        ├── ' ' [ESPACIO]
        ├── condicion
        │   └── 'verdadero' [VERDADERO]
        ├── '{' [LLAVE_ABIERTA]
        ├── instruccion
        │   └── salida
        │       ├── 'imprimir' [IMPRIMIR]
        │       ├── '(' [PAREN_IZQ]
        │       ├── cadena
        │       │   ├── '"' [COMILLAS]
        │       │   ├── caracter
        │       │   │   └── '43' [DIGITO]
        │       │   └── '"' [COMILLAS]
        │       ├── ')' [PAREN_DER]
        │       └── ';' [PUNTO_Y_COMA]
        ├── '}' [LLAVE_CERRADA]
        └── ';' [PUNTO_Y_COMA]
```
        
Traduccion a JavaScript:
```bash
while (true) {
    console.log("43");
}
```

## ❌ Ejemplo Fallido
- Código fuente:
```bash
mientras imprimir("Hola mundo!");
```

- Tabla de Lexemas y Tokens:
```bash
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| mientras       | MIENTRAS                      |
|                | ESPACIO                       |
| imprimir       | IMPRIMIR                      |
| (              | PAREN_IZQ                     |
| "              | COMILLAS                      |
| Hola           | LETRA                         |
|                | ESPACIO                       |
| mundo          | LETRA                         |
| !              | SIMBOLO                       |
| "              | COMILLAS                      |
| )              | PAREN_DER                     |
| ;              | PUNTO_Y_COMA                  |
--------------------------------------------------
```

Mensajes de error:
```bash
Error de sintaxis en la línea 1, columna 9: entrada no coincidente 'imprimir' se espera {'verdadero', 'falso'}
Error de sintaxis en la línea 1, columna 33: entrada extraña 'final de la cadena' se espera {'imprimir', 'mientras', '}', ' '}
```

 ⚠️ ATENCIÓN: En este ejemplo fallido, el programa devuelve la tabla de Lexemas y Tokens porque el código de entrada no posee ningún error del tipo Léxico. En caso de que la entrada tuviese un error léxico, el analizador no mostrará la tabla; simplemente devolverá, por ejemplo, un mensaje del tipo:
```bash
Error léxico en la línea 1, columna 19: caracter '@' no reconocido.
```
  
 ---
 
  ### 👨‍💻 Autor
  Pablo Aldao - [mirlo-92]
