const paginationList = document.querySelector(".page_list");


export function createPaginationRow(arr) {
    let pages = Math.ceil(arr.length / 9) 

    const totalPages = createPaginationItem(pages)
    paginationList.innerHTML = totalPages
}



function createPaginationItem(pages) {
    const arr = [];
    
    for (let i = 1; i <= pages; i += 1){
        const li = `<li class="page_item">${i}</li>`
        arr.push(li)
    }
    console.log(arr.join(""))

    return arr.join("")
} 