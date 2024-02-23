async function onLoad() {
    function setStatusText(txt){
        try{
            document.querySelector('#reader-content > div.min-h-100vh.relative.z-1.bg-inherit > div > div.relative > div > div.text-s-gray-500.mt-4px.text-bo4.flex.items-center.flex-wrap').innerHTML = txt;
        }catch(err){
            console.warn('设置失败');
        }
    }
    if(isBuy()){
        setStatusText('起点小说优化｜您已购买本章');
        return;
    }
    setStatusText('起点小说优化｜正在加载内容中...');
    const DOMAIN = 'http://www.dushuge.com/';
    const book_res_doc = await parseDocFromAjax('get','http://www.dushuge.com/hsdgiohsdigohsog.php?ie=gbk&q=' + readBookName());
    let books = [];
    book_res_doc.
    querySelectorAll('div.bookinfo > h4 > a').forEach((item, index) => {
        if(item !== undefined){
            books.push({
                name:item.innerText,
                url:item.href,
                val:calculateTextSimilarity(readBookName(),item.innerText)
            });
        }
    });
    books.sort((a, b) => b.val - a.val);
    if(books.length === 0){
        notify('未找到该书','error');
        return;
    }
    let book = books[0];
    let chapters = [];
    const chapter_res_doc = await parseDocFromAjax('get',book.url.replace('https://www.qidian.com/', DOMAIN));
    chapter_res_doc.
    querySelectorAll('dl > dd > a').
    forEach((item, index)=>{
        if(item !== undefined){
            chapters.push({
                name:item.innerText,
                url:item.href,
                val:calculateTextSimilarity(readChapterName(),item.innerText)
            });
        }
    });
    chapters.sort((a, b) => b.val - a.val);
    if(books.length === 0){
        notify('未找到该书有效的目录','error');
        return;
    }
    let chapter = chapters[0];
    const content_res_doc = await parseDocFromAjax('get',chapter.url.replace('https://www.qidian.com/', DOMAIN));
    const targetContent = content_res_doc.querySelector('#content').innerText;
    writeContent(targetContent);
    notify('读书阁书源读取成功');
    setStatusText('起点小说优化｜正在使用读书阁书源阅读');
}