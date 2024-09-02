export class StringUtils {
    static ifPresentOrElse(text, replaceSymbol) {
        return ObjectUtils.isExist(text) ? text : replaceSymbol;
    }
}
