export class Metodos {

    private isPositiveInteger(s: string): boolean {
        return (/^\+?\d+$/).test(s);
    }

    private fatorial(n: number): bigint {
        if (n < 0) {
            return BigInt(0);
        } else if (n == 0) {
            return BigInt(1);
        } else if (n == 1) {
            return BigInt(n);
        } else {
            return BigInt(n) * this.fatorial(n - 1);
        }
    }

    private permutacaoSimples(n: number): bigint {
        return this.fatorial(n);
    }

    private permutacaoRepeticao(n: number, p: Array<number>): bigint {
        let s = 0;
        for(let i = 0; i < p.length; i++) {
            s += p[i];
        }
        if(n < s) {
            return BigInt(0);
        }
        let pp = BigInt(1);
        for (let i = 0; i < p.length; i++) {
            pp *= this.fatorial(p[i]);
        }
        let resultado = this.fatorial(n) / pp;
        if (resultado < 0) {
            resultado = BigInt(0);
        }
        return resultado;
    }

    private arranjoSimples(n: number, p: number): bigint {
        if(n < p) {
            return BigInt(0);
        }
        let resultado = this.fatorial(n) / this.fatorial(n - p);
        if (resultado < 0) {
            resultado = BigInt(0);
        }
        return resultado;
    }

    private arranjoRepeticao(n: number, p: number): bigint {
        if (p < 0) {
            return BigInt(0);
        } else if (p == 0) {
            return BigInt(1);
        } else if (p == 1) {
            return BigInt(n);
        } else {
            return BigInt(n) * this.arranjoRepeticao(n, p - 1);
        }
    }

    private combinacaoSimples(n: number, p: number): bigint {
        if(n < p) {
            return BigInt(0);
        }
        let resultado = this.fatorial(n) / (this.fatorial(n - p) * this.fatorial(p));
        if (resultado < 0) {
            resultado = BigInt(0);
        }
        return resultado;
    }

    private combinacaoRepeticao(n: number, p: number): bigint {
        let resultado = this.fatorial(n + p - 1) / (this.fatorial(n - 1) * this.fatorial(p));
        if (resultado < 0) {
            resultado = BigInt(0);
        }
        return resultado;
    }
    
    public analiseCombinatoria(tipo: number, n: string, p: string): string {
        let resultado: string;
        let _n: number, _p = 0;
        const MIN_NUMBER = 1, MAX_NUMBER = 100;
        switch (tipo) {
            case 0:
                if (n == '') {
                    throw 'O campo \'n\' está vazio.';
                }
                if (!this.isPositiveInteger(n)) {
                    throw 'O valor do campo \'n\' não é um inteiro positivo.';
                } else {
                    _n = parseInt(n);
                }
                if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                    throw `O valor do campo \'n\' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`;
                }
                break;
            case 1:
                if (n == '') {
                    throw 'O campo \'n\' está vazio.';
                }
                if (p == '') {
                    throw 'O campo \'p\' está vazio.';
                }
                if (!this.isPositiveInteger(n)) {
                    throw 'O valor do campo \'n\' não é um inteiro positivo.';
                } else {
                    _n = parseInt(n);
                }
                if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                    throw `O valor do campo \'n\' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`;
                }
                break;
            default:
                if (n == '') {
                    throw 'O campo \'n\' está vazio.';
                }
                if (p == '') {
                    throw 'O campo \'p\' está vazio.';
                }
                if (!this.isPositiveInteger(n)) {
                    throw 'O valor do campo \'n\' não é um inteiro positivo.';
                } else {
                    _n = parseInt(n);
                }
                if (_n < MIN_NUMBER || _n > MAX_NUMBER) {
                    throw `O valor do campo \'n\' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`;
                }
                if (!this.isPositiveInteger(p)) {
                    throw 'O valor do campo \'p\' não é um inteiro positivo.';
                } else {
                    _p = parseInt(p);
                }
                if (_p < MIN_NUMBER || _p > MAX_NUMBER) {
                    throw `O valor do campo \'p\' deve ser um número inteiro positivo de ${MIN_NUMBER} a ${MAX_NUMBER}.`;
                }
                if ((tipo != 3 && tipo != 5) && _n < _p) {
                    throw 'O valor do campo \'p\' deve ser menor ou igual ao valor do campo \'n\'.';
                }
                break;
        }
        switch (tipo) {
            case 0:
                resultado = `P(n) > P(${_n}) = ${this.permutacaoSimples(_n)}`;
                break;
            case 1:
                let exibir = `P(n,(p,p,...)) > P(${_n},(`;
                let sPP = p.replace(' ', '').split(',');
                let pp = new Array<number>();
                for (let i = 0; i < sPP.length; i++) {
                    if (!this.isPositiveInteger(sPP[i])) {
                        throw 'Um valor do campo \'p,p,...\' não é um inteiro positivo.';
                    } else {
                        _p = parseInt(sPP[i]);
                    }
                    if (_p < MIN_NUMBER || _p > MAX_NUMBER) {
                        throw `Os valores do campo 'p,p,...' devem ser números inteiros positivos de ${MIN_NUMBER} a ${MAX_NUMBER}.`;
                    }
                    if (i == 0) {
                        exibir += _p;
                    } else {
                        exibir += `,` + _p;
                    }
                    pp[i] = _p;
                }
                let s = 0;
                for (let i = 0; i < pp.length; i++) {
                    s += pp[i];
                }
                if (_n < s) {
                    throw 'O valor total do campo \'p\' deve ser menor ou igual ao valor do campo \'n\'.';
                }
                resultado = `${exibir})) = ${this.permutacaoRepeticao(_n, pp)}`;
                break;
            case 2:
                resultado = `A(n,p) > A(${_n},${_p}) = ${this.arranjoSimples(_n, _p)}`;
                break;
            case 3:
                resultado = `AR(n,p) > AR(${_n},${_p}) = ${this.arranjoRepeticao(_n, _p)}`;
                break;
            case 4:
                resultado = `C(n,p) > C(${_n},${_p}) = ${this.combinacaoSimples(_n, _p)}`;
                break;
            case 5:
                resultado = `CR(n,p) > CR(${_n},${_p}) = ${this.combinacaoRepeticao(_n, _p)}`;
                break;
            default:
                resultado = 'Tipo incorreto.';
                break;
        }
        return resultado;
    }

}