import { Util } from '../Util';

const util = new Util();

export class Metodos {
    cifrar(text: string, deslocamento: number, min: number = 12, max: number = 255): string {
        let MAX_DESLOCAMENTO = ((max + 1) - min);
        if (text == '') {
            throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
        }
        if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
            throw 'O deslocamento não pode ser menor que 0 e não pode ser maior que ' + MAX_DESLOCAMENTO + '.';
        }
        let invalidchars = util.invalidCharsInString(text, min, max);
        if (invalidchars != '') {
            throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
        }
        let textCifrado = '';
        for (let i = 0; i < text.length; i++) {
            if ((text.charCodeAt(i) - deslocamento) < min) {
                textCifrado += String.fromCharCode((max + 1) - (min - (text.charCodeAt(i) - deslocamento)));
            } else {
                textCifrado += String.fromCharCode(text.charCodeAt(i) - deslocamento);
            }
        }
        return textCifrado;
    }

    decifrar(text: string, deslocamento: number, min: number = 12, max: number = 255): string {
        let MAX_DESLOCAMENTO = ((max + 1) - min);
        if (text == '') {
            throw 'Digite algum(a) texto/palavra para ser decifrado(a).';
        }
        if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
            throw 'O deslocamento não pode ser menor que 0 e não pode ser maior que ' + MAX_DESLOCAMENTO;
        }
        let invalidchars = util.invalidCharsInString(text, min, max);
        if (invalidchars != '') {
            throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
        }
        let textDecifrado = '';
        for (let i = 0; i < text.length; i++) {
            if ((text.charCodeAt(i) + deslocamento) > max) {
                textDecifrado += String.fromCharCode((text.charCodeAt(i) + deslocamento) - MAX_DESLOCAMENTO);
            } else {
                textDecifrado += String.fromCharCode(text.charCodeAt(i) + deslocamento);
            }
        }
        return textDecifrado;
    }
}