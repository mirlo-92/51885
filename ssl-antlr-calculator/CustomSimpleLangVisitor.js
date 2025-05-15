import CalculatorVisitor from "./generated/CalculatorVisitor.js";


class CustomSimpleLangVisitor extends CalculatorVisitor {

    // Esta función recibe el contexto del programa y traduce cada instrucción
    visitPrograma(ctx) {
        let resultado = '';
        for (let instr of ctx.instruccion()) {
            resultado += this.visit(instr);
        }
        return resultado;
    }


    // Traducción de la instrucción
    visitInstruccion(ctx) {
        if (ctx.bucle()) {
            return this.visit(ctx.bucle());
        } else if (ctx.salida()) {
            return this.visit(ctx.salida());
        }
        return '';
    }

    // Traducción de la instrucción de bucle
    visitBucle(ctx) {
        const condicion = this.visit(ctx.condicion());
        let cuerpo = '';
        for (let instr of ctx.instruccion()) {
            cuerpo += this.visit(instr);
        }
        return `while (${condicion}) {\n${cuerpo}}\n`;
    }

    // Traducción de la instrucción de salida
    visitSalida(ctx) {
        const contenido = this.visit(ctx.cadena());
        return `console.log(${contenido});\n`;
    }

    // Traducción de la condición
    visitCondicion(ctx) {
        if (ctx.getText() === 'verdadero') {
            return 'true';
        } else if (ctx.getText() === 'falso') {
            return 'false';
        }
        return '';
    }

    // Traducción de la cadena
    visitCadena(ctx) {
        const contenido = ctx.caracter().map(c => c.getText()).join('');
        return `"${contenido}"`;
    }
}

export default CustomSimpleLangVisitor;
