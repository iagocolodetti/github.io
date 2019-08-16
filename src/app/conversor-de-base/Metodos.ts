export class Metodos {

    private isPositiveInteger(s: string): boolean {
        return (/^\+?\d+$/).test(s);
    }

    private reverterString(s: string): string {
        let string = '';
        for (let i = s.length-1; i >= 0; i--) {
            string += s[i];
        }
        return string;
    }

    private checarBaseAlgarismo(algarismo: string, base: number): boolean {
        let numero: number;
        for (let i = 0; i < algarismo.length; i++) {
            let charCode = algarismo.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) {
                numero = parseInt(algarismo.charAt(i));
            } else if (charCode >= 65 && charCode <= 86) {
                numero = charCode - 55;
            } else if (charCode >= 97 && charCode <= 118) {
                numero = charCode - 87;
            } else {
                return false;
            }
            if (numero >= base) {
                return false;
            }
        }
        return true;
    }

    private algarismoParaNumero(algarismo: string): number {
        let numero: number;
        let charCode = algarismo.charCodeAt(0);
        if (charCode >= 65 && charCode <= 86) {
            numero = charCode - 55;
        } else if (charCode >= 97 && charCode <= 118) {
            numero = charCode - 87;
        } else {
            numero = parseInt(algarismo.charAt(0));
        }
        return numero;
    }

    private numeroParaAlgarismo(numero: number): string {
        let algarismo: string;
        if (numero >= 10 && numero <= 31) {
            algarismo = String.fromCharCode(numero + 55);
        } else {
            algarismo = String.fromCharCode(numero + 48);
        }
        return algarismo;
    }

    private converterAlgarismoParaDecimal(algarismo: string, base: number): string {
        if (algarismo.length <= 0) {
            throw 'Digite algum algarismo para ser convertido.';
        }
        if (algarismo.includes('.') || algarismo.includes(',')) {
            throw 'Use apenas algarismos inteiros.';
        }
        if (!this.checarBaseAlgarismo(algarismo, base)) {
            throw 'Esse algarismo não pertecem a essa base.';
        }
        let numero = BigInt(0);
        for (let i = 0; i < algarismo.length; i++) {
            let exp = (algarismo.length - (1 + i));
            let tmpN = BigInt(this.algarismoParaNumero(algarismo.charAt(i)));
            tmpN *= BigInt(base) ** BigInt(exp);
            numero += tmpN;
        }
        if (!this.isPositiveInteger(numero.toString())) {
            throw 'O valor a ser convertido é muito alto.';
        }
        return numero.toString();
    }

    private converterDecimalParaAlgarismo(algarismo: string, base: number): string {
        if (algarismo.length <= 0) {
            throw 'Digite algum algarismo para ser convertido.';
        }
        if (algarismo.includes('.') || algarismo.includes(',')) {
            throw 'Use apenas algarismos inteiros.';
        }
        if (!this.checarBaseAlgarismo(algarismo, 10)) {
            throw 'Esse algarismo não pertecem a essa base.';
        }
        let numero = BigInt(algarismo);
        algarismo = '';
        while (numero > BigInt(0)) {
            let tmpB = BigInt(base);
            let resto = numero % tmpB;
            algarismo += this.numeroParaAlgarismo(parseInt(resto.toString()));
            numero /= tmpB;
        }
        return this.reverterString(algarismo);
    }

    public converterAlgarismo(algarismo: string, daBase: number, paraBase: number): string {
        try {
            return this.converterDecimalParaAlgarismo(this.converterAlgarismoParaDecimal(algarismo, daBase), paraBase);
        } catch (erro) {
            throw erro;
        }
    }

}