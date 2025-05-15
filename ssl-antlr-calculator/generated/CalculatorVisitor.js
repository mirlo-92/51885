// Generated from c:/Users/pablo/OneDrive/Escritorio/UTN/2DO AÑO/SINTAXIS Y SEMANTICA DE LOS LENGUAJES/PRACTICA/analizador/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

export default class CalculatorVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalculatorParser#programa.
	visitPrograma(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#instruccion.
	visitInstruccion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#bucle.
	visitBucle(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#salida.
	visitSalida(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#condicion.
	visitCondicion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#cadena.
	visitCadena(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#caracter.
	visitCaracter(ctx) {
	  return this.visitChildren(ctx);
	}



}