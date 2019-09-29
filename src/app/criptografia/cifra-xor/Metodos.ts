import { Util } from '../Util';

const util = new Util();

export class Metodos {
    cifrar(text: string, key: string): string {
        if (text == '') {
            throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
        }
        if (key == '') {
            throw 'Digite uma chave (em binário).';
        }
        if (!util.isBinaryString(key)) {
            throw 'A chave deve ser em binário (0 ou 1).';
        }
        if (key.length > 8) {
            throw 'A chave deve ter no máximo 8 dígitos.';
        }
        let invalidchars = util.invalidCharsInString(text, 0, 255);
        if (invalidchars != '') {
            throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
        }
        let textCifrado = '';
        key = util.padLeft(key, 8, '0');
        for (let i = 0; i < text.length; i++) {
            let charBinary = util.padLeft(text.charCodeAt(i).toString(2), 8, '0');
            let charCifrado = '';
            for (let j = 0; j < 8; j++) {
                if (charBinary.charAt(j) === key.charAt(j)) {
                    charCifrado = charCifrado + '0';
                } else {
                    charCifrado = charCifrado + '1';
                }
            }
            textCifrado += String.fromCharCode(parseInt(charCifrado, 2));
        }
        return textCifrado;
    }
}