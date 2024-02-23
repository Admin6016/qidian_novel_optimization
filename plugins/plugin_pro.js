setTimeout(function() {
    document.querySelector('#r-app').innerText = '插件设置';
    document.querySelector('#r-app').onclick = ()=>{
        openSettings();
        document.querySelector('#r-menu > div:nth-child(7) > div > section').innerHTML = '点击面板进入设置';
    };
}, 2000);