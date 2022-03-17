/*define gallery items and filters */

const filters = document.querySelector(".filters");//fetch all div items class=filters
const galleryItem = document.querySelectorAll(".gallery-item");//fetch elements with class=gallery-item

filters.addEventListener("click", (e) => {
        if(e.target.classList.contains("filter-item")) {
            // remove active class from existing element
            filters.querySelector(".active").classList.remove("active");
            e.target.classList.add("active"); // apply active to new element selected

            const filtervalue = e.target.getAttribute("data-filter"); // get filter value from element selected

            galleryItem.forEach((item) => {
                if(item.classList.contains(filtervalue) || filtervalue === 'all')
                {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
                    item.classList.add("hide");
                }
            })

        }   
})
