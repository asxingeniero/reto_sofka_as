
function Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, correcta, abandono){
    this.question = pregunta;
    this.answer1 = respuesta1;
    this.answer2 = respuesta2;
    this.answer3 = respuesta3;
    this.answer4 = respuesta4;
    this.isCorrect = correcta;
    this.retire = abandono;
}

export default Pregunta