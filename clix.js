jQuery.fn.textNodes = function() {
    var ret = [];
    this.contents().each(function() {
        var fn = arguments.callee;
        if(this.nodeType == 3) {
            ret.push(this);
        } else if(this.nodeType==1 &&!(
        this.tagName.toLowerCase()=='script' ||
        this.tagName.toLowerCase()=='head' ||
        this.tagName.toLowerCase()=='iframe' ||
        this.tagName.toLowerCase()=='textarea' ||
        this.tagName.toLowerCase()=='option' ||
        this.tagName.toLowerCase()=='style' ||
        this.tagName.toLowerCase()=='title' ||
        this.tagName.toLowerCase()=='a')){
            jQuery(this).contents().each(fn);
        }
    });
    return ret;
}

jQuery.fn.hfautolink = function() {
    re_link2 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:rapidgator.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link3 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:rapidgator.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link4 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:uploadgig.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link5 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:uploadgig.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link6 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:extabit.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link7 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:extabit.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link8 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:nitroflare.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link9 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:nitroflare.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link10 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:turbobit.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link11 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:turbobit.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link12 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:bulletupload.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link13 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:bulletupload.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link14 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:ul.to)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link15 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:ul.to)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link16 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:mediafire.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link17 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:mediafire.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link18 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:depositfiles.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link19 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:depositfiles.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link20 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:bitshare.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link21 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:bitshare.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link22 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:netload.in)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link23 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:netload.in)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link24 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:uploaded.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link25 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:uploaded.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link26 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:lumfile.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link27 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:lumfile.com)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    re_link28 = new RegExp('(https?://(?:[A-Z0-9]\.)*(?:alfafile.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|])', "ig");
    re_link29 = new RegExp('https?://(?:[A-Z0-9]\.)*(?:alfafile.net)[-()A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]', "i");
    this.each(function(i){
        jQuery.each($(this).textNodes(), function(i, node){
            text = node.nodeValue;
            if(re_link3.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link2, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link5.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link4, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link7.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link6, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link9.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link8, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link11.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link10, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link13.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link12, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link15.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link14, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link17.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link16, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link19.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link18, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link21.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link20, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link23.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link22, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link25.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link24, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link27.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link26, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
            else if(re_link29.test(text)){
                newNode=document.createElement('span');
                text=jQuery('<div/>').text(text).html();
                newNode.innerHTML=text.replace(re_link28, '<a href="$1" target="_blank">$1</a>');
                node.parentNode.replaceChild(newNode, node);
            }
        });
    });
}

$(function() {
    $("div").hfautolink();
});
