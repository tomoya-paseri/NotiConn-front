chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: './setting.html' })
    // テスト用
    // Push.create("Hello world!", {
    //     body: "test",
    //     icon: 'icons/connpass.png',
    //     timeout: 4000,
    //     onClick: function () {
    //         window.focus();
    //         this.close();
    //     }
    // });
});

// 1min毎にonAlarm発火
chrome.alarms.create('call', { 'periodInMinutes': 1 })
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'call') {
        let xhr = new XMLHttpRequest();

        // URLを開く
        xhr.open('GET', 'http://35.200.18.136/event', true);
        // レスポンスが返ってきた時の処理を記述
        xhr.onload = (e) => {
            Push.create("Hello world!", {
                body: xhr.responseText,
                icon: 'icons/connpass.png',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
            // alert(xhr.responseText);
            // レスポンスが返ってきた時の処理
        };
        xhr.send();
        // localStorageからqueryを取得する
        // const query = getQuery()
        // post qHeader + query
        // const res = getResponse()
        // const parsedRes = parseResponse(res, query)
        // noti(parsedRes)
    }
});

function getQuery(query) {
    return query
}

function parseResponse(response, query) {
    return "hogehoge"
}

function noti() {
    return
}
