module.exports = {
    getUpdateFrequency: () => {
        const DEFAULT_MIN_FREQUENCY = 2
        const DEFAULT_MAX_FREQUENCY = 48

        let updateFenquency = _.toSafeInteger(pref.get("update-frequency"))
        if (!_.isNumber(updateFenquency) || updateFenquency <= 0 || updateFenquency > DEFAULT_MAX_FREQUENCY) {
            here.systemNotification("配置更新", "更新频率时间格式错误，将使用默认更新频率(" + DEFAULT_MIN_FREQUENCY +"h)")
            return DEFAULT_MIN_FREQUENCY
        }

        console.log("获取更新频率:" + updateFenquency + "h")
        return updateFenquency
    },
    getFetchArticleNum: () => {
        const PAGE_MAP = [10, 15, 20]

        return PAGE_MAP[_.toSafeInteger(pref.get("article-num"))]
    },
    isDebugMode: () => {
        return _.toSafeInteger(pref.get("debug-mode")) == 1
    }
}



