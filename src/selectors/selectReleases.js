export default (releases, {page=1, year=null, search_term=""}) =>  {
    
    let results = []


    let first_idx = (page * 10) - 10
    let last_idx = first_idx + 10



    
    results = releases.filter((e) => e.release_title.toLowerCase().includes(search_term.toLowerCase()))

    if (year != null) results = results.filter((e) => e.release_date.includes(year.toString()))
    

    return results.slice(first_idx, last_idx)


}






