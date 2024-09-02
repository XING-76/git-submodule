import StringUtils from './strUtils.js';

class NumberUtils {
    /**
     * 取得純數字格式
     * @param data
     * @returns
     */
    static getNumberFormat = (data) => {
        return Number(StringUtils.removeThousandSeparator(data.toString()));
    };
}

export default NumberUtils;
