setTimeout(()=>{
    let template_html = '<div class="intro-honor-label" style="margin-top:20px" id="j-intro-honor-tag2"><div class="intro-honor"><div class="intro-detail"><div class="title"><h2>阅读进度</h2><em class="work-line"></em></div><p id="book-intro-detail2">上回阅读到 book_title，<a href="book_href">点击这里继续阅读&gt;&gt;</a></p></div></div></div>';
    if(location.href.indexOf('qidian.com/book/')!== -1){
        let bid = location.href.split('/')[location.href.split('/').length - 2];
        if (localStorage.getItem('book_progress_' + bid) !== null){
            let progress_str = localStorage.getItem('book_progress_' + bid);
            let progress = JSON.parse(progress_str);
            template_html = template_html.replace('book_title', progress.current_title);
            template_html = template_html.replace('book_href', progress.current_url);
            let element = document.querySelector('.left-items-detail');
            element.firstElementChild.insertAdjacentHTML('afterend', template_html);
        }
    }else if(location.href.indexOf('qidian.com/chapter/')!== -1){
        let bid = location.href.split('/')[location.href.split('/').length - 3];
        let current_url = location.href;
        let current_title = document.title;
        let obj = {
            current_url,
            current_title
        };
        localStorage.setItem('book_progress_' + bid, JSON.stringify(obj));
    }
},2000)