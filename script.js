let datas = {
    mineralifesuvi : [
        {
            rasm: "./suv-idishi.jpg",
            width: 160,
            status: "Mavjud!",
            title: "Minera Life Suvi",
            count: 19,
            ph: 7.1,
            price: "17 000",

        },
        {
            rasm: "./10lsuv.PNG",
            width: 210,
            status: "Hozirda mavjud emas!",
            title: "Minera Life Suvi",
            count: 5,
            ph: 7.1,
            price: "Mavjud emas"
        },
        {
            rasm: "./5lsuv.PNG",
            width: 210,
            status: "Hozirda mavjud emas!",
            title: "Minera Life Suvi",
            count: 10,
            ph: 7.1,
            price: "Mavjud emas"
        },
    ],
    suvnasos : [
        {
            rasm1: "./nasos1.PNG",
            rasm2: "./nasos12.PNG",
            rasm3: "./nasoshammasiga.PNG",
            width: 150,
            title: "Elektr nasosli suv dispanseri",
            description: "Elektr nasosi USb orqali quvvat oladigan ichimliklar va boshqa turdagi 5, 10, 19 litr uchun moʻljallangan",
            price: "60 000",
            more_data: [
            "1200 mA/soat quvvatli batareya",
            "3-4 soat ichida to‘liq quvvatlanadi",
            "tugmani bosish orqali boshqaruv ",
            "5, 10, 19 litrli idishlarga mos keladi",
            "Sokin nasos ovozi",
            "Nasos turi: elektr",
            "USB kabel orqali quvvatlanadi va toʻplam ichida USB kabel mavjud,",
            "Korpus materiali: oziq-ovqat uchun mo'ljallangan polipropilen",
            "Kuchli nasos, 4 Vt"
            ]
        },
        {
            rasm1: "./nasos2.PNG",
            rasm2: "./nasos22.jpg",
            rasm3: "./nasoshammasiga.PNG",
            width: 150,
            title: "Elektr nasosli suv dispanseri",
            description: "Elektr nasosi USb orqali quvvat oladigan ichimliklar va boshqa turdagi 5, 10, 19 litr uchun moʻljallangan",
            price: "60 000",
            more_data: [
            "1200 mA/soat quvvatli batareya",
            "3-4 soat ichida to‘liq quvvatlanadi",
            "tugmani bosish orqali boshqaruv ",
            "5, 10, 19 litrli idishlarga mos keladi",
            "Sokin nasos ovozi",
            "Nasos turi: elektr",
            "USB kabel orqali quvvatlanadi va toʻplam ichida USB kabel mavjud,",
            "Korpus materiali: oziq-ovqat uchun mo'ljallangan polipropilen",
            "Kuchli nasos, 4 Vt"
            ]
        },
        {
            rasm1: "./nasos3.jpg",
            rasm2: "./nasos32.PNG",
            rasm3: "./nasos33.PNG",
            width: 150,
            title: "Kuchli qoʻl mexanik suv nasosi",
            description: `• To'plamga quyidagilar kiradi: 
            1 nasos, 3 ta suv quvurlari, 1 vilkali chiqish trubkasi, korpus materiali...`,
            price: "40 000",
            more_data: [
            `• To'plamga quyidagilar kiradi: 
            1 nasos, 3 ta suv quvurlari, 1 vilkali chiqish trubkasi, korpus materiali: oziq-ovqat uchun moʻljallangan polipropilen suv dispanseri, 5-10, 10-20 liter`,
            ]
        },
        {
            rasm1: "./nasos4.png",
            rasm2: "./nasos41.PNG",
            rasm3: "./nasos43.PNG",
            width: 150,
            title: "Suv tutgich 19<sup>L</sup>",
            count: 19,
            description: "19L Suv baklashkasi uchun tutgich barcha hollarda qoʻllash mumkin",
            ph: 7.1,
            price: "25 000",
            more_data: []
        },
    ],
    kuller: [
        
        {
            rasm: "https://picsum.photos/200",
            title: "Minera Life Suvi",
            count: 19,
            description: "Siz uchun ham Minera Life suvidan tortiq qilishdan mamnuunmiz! Yer tubining muzdek, nafis toza ichimlik suvidan bahramand bo'ling,",
            ph: 7.1,
            price: "17 000"
        },
    ]
}

let row = document.querySelector(".row");
let suv_btn = document.querySelector("#minerasuvi")
let nasos_btn = document.querySelector("#nasosi")
let kuller_btn = document.querySelector("#kulleri")

function add_items(flag){
    
    row.innerHTML = " "

    if (flag == "suv") {
        
        console.log("suv")
        suv_btn.style.color = "#3286a7"
        suv_btn.style.padding = "5px 0"

        kuller_btn.style.color = "#7a7c80"
        kuller_btn.style.padding = "0"
        nasos_btn.style.color = "#7a7c80"
        nasos_btn.style.padding = "0"

        let s = 0;
        datas.mineralifesuvi.forEach(item => {
                
            let badge_rang = ""
            let new_col = document.createElement("div");
            if (item.status == "Mavjud!") {badge_rang = "back-water-color"}
            else {badge_rang = "back-not-color"}
            new_col.className = "col-lg-4 col-md-6 mt-5"    
            new_col.innerHTML = `
            <div class="card shadow p-3" style="width: 100%;">
                <center>
                    <img src="${item.rasm}" alt="rasm" width="${item.width}">
                </center class="">
                <div>    
                        <h3 class="card-title">${item.title}</h4>
                        <b class="card-count">${item.count}<sup>L</sup> dona</b>
                        <b class="badge ${badge_rang}">${item.status}</b>
                </div>
                <hr>
                <div class="sub-data">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-droplet-fill water-color" viewBox="0 0 16 16">
                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                </svg>${item.ph} pH</div>
                <hr>
                <div class="sub-data">
                <img src="suv-idishi.jpg" alt="rasm" width="25">
                ${item.count}<sup>L</sup> bir minera suvi</div>
                <hr>
                <div class="sub-data">
                <img src="./mineral.png" alt="rasm" width="25">
                Minerallarga boy suv</div>
                

                <hr>
                <center>
                <button type="button" class="btn w-100 back-water-color" data-bs-toggle="modal" data-bs-target="#myModal${s}">Suv narxi</button>
                </center>
                <hr>
            </div>
            

                <!-- The Modal -->
                <div class="modal" id="myModal${s}">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Minera Suvi</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <b>Narxi</b> ${item.price} UZS
                        <hr>
                        <p>
                        Buyurtma berish uchun havola ustiga bosing
                        </p>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <a href="https://t.me/mineralife_water" target="_blank" class="btn btn-primary footer-color">Buyurtma berish</a>
                    </div>

                    </div>
                </div>
            
            
            
            `
            row.appendChild(new_col)
            s += 1
        })
         
    }
    else if (flag == "nasos") {

        console.log("nasos")

        nasos_btn.style.color = "#3286a7"
        nasos_btn.style.padding = "5px 0"

        kuller_btn.style.color = "#7a7c80"
        kuller_btn.style.padding = "0"
        suv_btn.style.color = "#7a7c80"
        suv_btn.style.padding = "0"


        let s = 0;
        datas.suvnasos.forEach(item => {
            let new_col = document.createElement("div");
            new_col.className = "col-lg-4 col-md-6 mt-5"    
            let htmlcode = `
            <div class="card shadow p-3" style="width: 100%;">
                <center>

                <!-- Carousel -->
                <div id="demo${s}" class="carousel slide" data-bs-ride="carousel">
                
                  <!-- Indicators/dots -->
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo${s}" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo${s}" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo${s}" data-bs-slide-to="2"></button>
                  </div>
                  
                  <!-- The slideshow/carousel -->
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${item.rasm1}" alt=" " class="d-block" style="width:210px">
                    </div>
                    <div class="carousel-item">
                      <img src="${item.rasm2}" alt=" " class="d-block" style="width:210px">
                    </div>
                    <div class="carousel-item">
                      <img src="${item.rasm3}" alt=" " class="d-block" style="width:210px">
                    </div>
                  </div>
                  
                  <!-- Left and right controls/icons -->
                  <button class="carousel-control-prev" style="background: #7e7f80" type="button" data-bs-target="#demo${s}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" style="background: #7e7f80" type="button" data-bs-target="#demo${s}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>
            </center>
                <hr>
                <h3 class="card-title">${item.title}</h4>
                <hr>
                <h4 class="card-description-part1">Tavsifnoma</h3>
                <p class="card-description-part2">${item.description}</p>
                <hr>
                <center>
                <button type="button" class="btn w-100 back-water-color" data-bs-toggle="modal" data-bs-target="#myModal${s}">Batafsil</button>
                </center>
                <hr>
            </div>
            

                <!-- The Modal -->
                <div class="modal" id="myModal${s}">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">${item.title}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">

                    `
        
        item.more_data.forEach(data => {
            htmlcode += `
                <h6>` + data + `</h6><hr>`
            
        })

            htmlcode += `
                        <h5><b>Narxi ${item.price}</b> UZS</h5>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <a href="https://t.me/mineralife_water" target="_blank" class="btn btn-primary footer-color">Buyurtma berish</a>
                    </div>

                    </div>
                </div>
            
            
            
            `
            new_col.innerHTML = htmlcode
            row.appendChild(new_col)
            s += 1
        })
         console.log(s)
    }

    else {
        console.log("kuller")
        kuller_btn.style.color = "#3286a7"
        kuller_btn.style.padding = "5px 0"

        suv_btn.style.color = "#7a7c80"
        suv_btn.style.padding = "0"
        nasos_btn.style.color = "#7a7c80"
        nasos_btn.style.padding = "0"

        let s = 0;
        datas.kuller.forEach(item => {
            let new_col = document.createElement("div");
            new_col.innerHTML = `<center class="mt-5 mb-5"><h2 style="color: #7e7f80">Kullerlar hozirda mavjud emas!</h2><center>`
            row.appendChild(new_col)
            s += 1
        })
         
    }

}

add_items("suv")