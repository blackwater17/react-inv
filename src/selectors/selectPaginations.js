export default (releases, {page, results_count} ) =>  {
 
    let possible_pages 

    let last_page = Math.ceil(results_count/10)

    // 4 ozel durum
    if (page === 1) possible_pages = [page, page+1, page+2, page+3, page+4]
    else if (page === 2) possible_pages = [page-1, page, page+1, page+2, page+3] 
    else if (page === last_page) possible_pages = [page-4, page-3, page-2, page-1, page]
    else if (page === last_page-1) possible_pages = [page-3, page-2, page-1, page, page+1]

    else {
        possible_pages = [page-2, page-1, page, page+1, page+2]
    }

    let final_pages = possible_pages.filter((p) => p <= last_page && p>0)

    let objs = []

    for (let page_num of final_pages) {
        if (page_num === page) objs.push({page_num: page_num, className: "pagination-box active-page"})
        else objs.push({page_num: page_num, className: "pagination-box"})
    }
    
    return objs



}






