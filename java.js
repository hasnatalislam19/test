let loadPhone = async (search='samsung') => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    let data = await res.json();
    let phones = data.data;
    displayPhones(phones);

}; 

let displayPhones = phones => {
    // phone container
    let phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    // // show more condition

    // let moreC = document.getElementById('more');
    
    // if(phones.length>12) {
    //     moreC.clisslist.remove('hidden')
    // }
    // else {
    //     moreC.clisslist.add('hidden')
    // }


    phones = phones.slice(0,12);

    phones.forEach(phone => {
        let phoneCard = document.createElement('div');
        phoneCard.classList = `text-center py-3`;

        phoneCard.innerHTML = `<figure class=""> <img class="mx-auto" src="${phone.image}">
            <h2 class="card-title pl-32 ">${phone.phone_name}</h2>
            <p class="text-center py-3" >${phone.slug}</p>
            <div class="">
                <button  onclick='specs("${phone.slug}")' class=" bg-violet-600 rounded-xl
                 text-white p-2 ">Show specs</button>
            </div>
        </div>`;

        phoneContainer.appendChild(phoneCard);

    })


}



let search = () => {
    let searchField = document.getElementById('search-field');
    let searchValue = searchField.value;
    loadPhone(searchValue);

};


let specs = async(id) =>{
    // console.log(id)
const  res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data=await res.json();
let phone=data.data;

console.log(phone);
 
showPhoneDetailsData(phone);

let modalData=document.getElementById('modal');
modalData.innerHTML=`

<img class="pl-20" src="${phone.image}" alt="">
<p><b>Name:</b>  <span>${phone.name}</span> </p>
<p><b>Brand:</b>  <span>${phone.brand}</span> </p>
<p><b>Ram/Rom:</b>  <span>${phone.mainFeatures.memory}</span> </p>


`
};



showPhoneDetailsData=(phone)=>{
    show_details_modal.showModal(phone)
}

loadPhone();