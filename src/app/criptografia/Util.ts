export class Util {

    public static padLeft(text: string, length: number, c: string): string {
        let textpad = '';
        for (let i = 0; i < length; i++) {
            textpad = textpad + c;
        }
        return textpad.substring(text.length) + text;   
    }

    public static isInvalidChar(c: string, min: number, max: number): boolean {
        return (c.charCodeAt(0) < min || c.charCodeAt(0) > max);
    }

    public static invalidCharsInString(text: string, min: number, max: number): string {
        let invalidchars = '';
        for (let i = 0; i < text.length; i++) {
            if (this.isInvalidChar(text[i], min, max)) {
            invalidchars = invalidchars + text[i] + ' (' + text.charCodeAt(i) + ')   ';
            }
        }
        return invalidchars;
    }

    public static intTryParse(s: string): boolean {
        try {
            return !isNaN(parseInt(s));
        } catch (NumberFormatException) {
            return false;
        }
    }
}