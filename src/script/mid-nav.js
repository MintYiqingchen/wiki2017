
function clearAll(pages) {
    $(pages).css("display", "none");
}

function initTabs() {
    for (let tabelem of $(".tab-pages").get()) {
        let tabLink = $(tabelem).find(".nav-tabs .mid-nav-tab").get();
        let tabPages = $(tabelem).find(".tab-page").get();
        let dict = {}
        for (let link of tabLink) {
            dict[link.textContent] = link;
        }
        for (let page of tabPages) {
            let link = page.getAttribute("corresponding-tab");
            $(dict[link]).click((event) => {
                clearAll(tabPages);
                $(page).css("display", "block");
            });
        }
    }
}

initTabs();