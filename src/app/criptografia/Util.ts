export class Util {
    public isPositiveInteger(s: string): boolean {
        return (/^\+?\d+$/).test(s);
    }

    public padLeft(text: string, length: number, c: string): string {
        let textpad = '';
        for (let i = 0; i < length; i++) {
            textpad = textpad + c;
        }
        return textpad.substring(text.length) + text;   
    }

    public isBinaryString(text: string): boolean {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) != '0' && text.charAt(i) != '1') {
                return false;
            }
        }
        return true;
    }

    public isInvalidChar(c: string, min: number, max: number): boolean {
        return (c.charCodeAt(0) < min || c.charCodeAt(0) > max);
    }

    public invalidCharsInString(text: string, min: number, max: number): string {
        let invalidchars = '';
        for (let i = 0; i < text.length; i++) {
            if (this.isInvalidChar(text[i], min, max)) {
                invalidchars = invalidchars + text[i] + ' (' + text.charCodeAt(i) + ')   ';
            }
        }
        return invalidchars;
    }

}