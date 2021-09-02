function getUrlParam(sUrl, sKey) {
    let paramsStr = sUrl.split('?')[1].split('#')[0];
    let paramsArr = paramsStr.split('&');
    let params = {}
    for (let i = 0; i < paramsArr.length; i++) {
        const [key, val] = paramsArr[i].split('=');
        if (!params[key]) {
            params[key] = val;
        }
        else {
            params[key]=[].concat(params[key],val)
        }
    }
    return sKey ? params[sKey] || '' : params;
}
