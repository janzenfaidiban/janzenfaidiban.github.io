var janzensProject = [
    {
        'year':'2023', 
        'title':'Website SAGU Foundation', 
        'cover_image':'./covers/projects/sagufoundation.png', 
        'desc':'Sebuah Lembaga Pengembangan Sumberdaya Manusia Yang Berkantor di Jayapura, Papua, Indonesia.',
        'site_url':'https://sagufoundation.org',
        'status':'On Progress',
    },
    {
        'year':'2023', 
        'title':'Website DLHK Kota Jayapura', 
        'cover_image':'./covers/projects/dlhk-kota-jayapura.png', 
        'desc':'Website Resmi Dinas Lingkungan Hidup & Kebersihan Kota Jayapura',
        'site_url':'https://nokensoft.com',
        'status':'On Progress',
    },
    {
        'year':'2021', 
        'title':'Website Highland Roastery', 
        'cover_image':'./covers/projects/hr.png', 
        'desc':'Tempat usaha roasting kopi Papua dan jasa pelatihan barista yang berlokasi di Kota Jayapura, Papua.',
        'site_url':'https://highlandroastery.com',
        'status':'On Progress',
    },
]

buildTable(janzensProject)

function buildTable(data){

    var table = document.getElementById('myProjects')

    for (var i = 0; i < data.length; i++){
        
        var row = `
        <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:transition rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div class="flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                    <img src="${data[i].cover_image}" alt="${data[i].cover_image}" class="rounded-t-lg">
                </div>
                <div class="p-4 md:p-6">
                    <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    ${data[i].year}
                    </span>
                    <h3 class="text-4xl font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                    ${data[i].title}
                    </h3>
                    <p class="mt-3 text-gray-500">
                    ${data[i].desc}
                    </p>
                </div>
                <div
                    class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-700 dark:hover:text-dark-500 dark:focus:ring-offset-gray-800"
                        href="${data[i].site_url}" target="_blank">
                        Visit Site
                    </a>
                    <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-700 dark:hover:text-dark-500 dark:focus:ring-offset-gray-800"
                        href="#">
                        Read More
                    </a>
                </div>
            </div>`

        table.innerHTML += row

    }
}