class StringUtils {
    static ifPresentOrElse(text, replaceSymbol) {
        return ObjectUtils.isExist(text) ? text : replaceSymbol;
    }

    static removeThousandSeparator(text) {
        return text.replace(/(\/|:|,)/g, '');
    }
}

export default StringUtils;
