import SimpleLangLexer from "./generated/CalculatorLexer.js";
import SimpleLangParser from "./generated/CalculatorParser.js";
import CustomSimpleLangVisitor from "./CustomSimpleLangVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// Verifica si la consola soporta colores
const supportsColor = process.stdout.isTTY && process.env.TERM !== 'dumb';

// Definición de colores para la consola
const RESET = supportsColor? "\x1b[0m" : "";
const GREEN = supportsColor? "\x1b[32m": "";
const GRAY = supportsColor? "\x1b[90m": "";
const LIGHT_BLUE = supportsColor? "\x1b[94m": "";
const RED = supportsColor? "\x1b[31m": "";
const YELLOW = supportsColor? "\x1b[33m": "";

// Diccionario para traducir mensajes al español
const traduccionesErrores = {
    "mismatched input": "entrada no coincidente",
    "extraneous input": "entrada extraña",
    "no viable alternative at input": "ninguna alternativa viable en la entrada",
    "missing": "falta",
    "at": "en",
    "unexpected": "inesperado",
    "expected": "se esperaba",
    "expecting": "se espera",
    "token recognition error": "error de reconocimiento de token",
    "<EOF>": "final de la cadena",
};

// Función para imprimir el árbol de derivación
function imprimirArbolVisual(nodo, parser, prefijo = "", hoja = true, raiz = true) {
    const ruleName = parser.ruleNames?.[nodo.ruleIndex];
    const conector = raiz ? "" : (hoja ? "└── " : "├── ");
    let linea = prefijo + conector;

    // Si el nodo tiene hijos, imprime el nombre de la regla
    if (nodo.children) {
        linea += LIGHT_BLUE + ruleName + RESET;
        console.log(linea);

        const nuevoPrefijo = prefijo + (raiz ? "" : (hoja ? "    " : "│   "));
        const total = nodo.children.length;
        nodo.children.forEach((child, index) => {
            const esUltimo = index === total - 1;
            imprimirArbolVisual(child, parser, nuevoPrefijo, esUltimo, false);
        });
    }

    // Si el nodo no tiene hijos, imprime el texto del token
    else {
        const text = nodo.getText().replace(/\n/g, "\\n");
        const tokenName = parser.symbolicNames?.[nodo.symbol?.type] || "TOKEN";
        linea += `${GREEN}'${text}'${RESET} ${GRAY}[${tokenName}]${RESET}`;
        console.log(linea);
    }
}



// Función principal
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Pregunta al usuario si quiere analizar el contenido de 'input.txt'
    const preguntar = (pregunta) => new Promise(resolve => rl.question(pregunta, resolve));

    let input;
    const respuesta = (await preguntar("¿Querés analizar el contenido de 'input.txt'? (s/n): ")).trim().toLowerCase();

    switch (respuesta) {

        // Si la respuesta es 's', lee el archivo 'input.txt'
        case 's': try {
                    input = fs.readFileSync('input.txt', 'utf8');
                    }
                    catch (err) {
                        console.error(`\n ${RED}No se pudo leer el archivo 'input.txt'.${RESET} \n`);
                        rl.close();
                        return;
                    }
                    break;

        // Si la respuesta es 'n', pide al usuario que ingrese una cadena
        case 'n': input = await preguntar("Ingrese una cadena: ");
                    break;

        // Si la respuesta no es válida, muestra un mensaje de error y cierra el programa
        default: console.error(`/n ${YELLOW}Opción no válida. Saliendo...${RESET} \n`);
                    rl.close();
                    return;
    }

    // Verifica si la entrada está vacía
    // Si la entrada es una cadena vacía, muestra un mensaje y cierra el programa
    if (input.trim() === "") {
        console.error(`\n ${YELLOW}Entrada vacía. Saliendo...${RESET} \n`);
        rl.close();
        return;
    }

    // Si la entrada no es vacía, continúa con el análisis
    rl.close();
    console.log("\nEntrada recibida:\n" + input);

    // Verifica si la entrada está vacía
    const erroresLexicos = [];
    let inputStream = CharStreams.fromString(input);
    let lexer = new SimpleLangLexer(inputStream);

    // Configura el analizador léxico para manejar errores
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            const charErr = msg.match(/'(.+)'/)?.[1] || '?';
            erroresLexicos.push(`\n ${RED}Error léxico en la línea ${line}, columna ${column}: carácter '${charErr}' no reconocido.${RESET} \n`);
        }
    });

    // Genera el flujo de tokens
    lexer.reset();
    const tokenStream1 = new antlr4.CommonTokenStream(lexer);
    tokenStream1.fill();
    const tokens = tokenStream1.tokens;

    // Verifica si hay errores léxicos
    if (erroresLexicos.length > 0) {
        erroresLexicos.forEach(e => console.error(e));
        return;
    }

    // Si no hay errores léxicos, muestra la tabla de lexemas y tokens
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        if (token.channel === antlr4.Token.DEFAULT_CHANNEL && token.type !== antlr4.Token.EOF) {
            const tokenType = SimpleLangLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
        }
    }
    console.log("--------------------------------------------------");

    // Reinicia el analizador léxico y el flujo de tokens
    inputStream = CharStreams.fromString(input);
    lexer = new SimpleLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SimpleLangParser(tokenStream);

    // Configura el analizador sintáctico para manejar errores
    let erroresSintacticos = 0;

    // Elimina los listeners de error predeterminados y agrega un listener personalizado que traduce los mensajes de error al español
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            msg = String(msg);
            for (let [clave, valor] of Object.entries(traduccionesErrores)) {
                if (msg.includes(clave)) {
                    msg = msg.replace(clave, valor);
                }
            }
            erroresSintacticos++;
            console.error(`Error de sintaxis en la línea ${line}, columna ${column}: ${msg}`);
        }
    });

    // Genera el árbol de análisis sintáctico
    const tree = parser.programa();

    // Si hay errores sintácticos, no se continúa con la evaluación
    if (erroresSintacticos > 0) return;

    // Si no hay errores, muestra el árbol de derivación
    console.log("\nEntrada válida.");
    console.log("\nÁrbol de derivación:");
    imprimirArbolVisual(tree, parser);

    const visitor = new CustomSimpleLangVisitor();
    const result = visitor.visit(tree);

    // Muestra el resultado de la traducción a JavaScript
    console.log("\nTraducción a JavaScript:\n");
    console.log(result);
}

// Ejecuta la función principal
main();
