const industrySelectElement=document.querySelector('#industry-select');
const logosDisplay= document.getElementById('logos-filter');
const lettersOfCategories= document.getElementById('categories-letters');
const allLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//display all the letters
allLetters.forEach((item)=>{
	const newElement=document.createElement('button');
	newElement.setAttribute('name',item);
	newElement.textContent=item;
	newElement.addEventListener('click',selectByLetter);

	lettersOfCategories.appendChild(newElement);
})

//display all the categories in the select tag
function getAllCategories(){
	const flattenedCategories=allLogos.reduce((acc,item)=>{
//		return console.log(item['category'])
		return acc.concat(item['category'])
	},[])

    
    //make the items in the array not duplicate itself
    let allCategories=[...new Set(flattenedCategories)].sort();
    
    
	allCategories.forEach((item)=>{
		const theHTML=`<option value="${item}">${item}</option>`
		industrySelectElement.insertAdjacentHTML('beforeend',theHTML);
	})
    
    
}

getAllCategories()

//DISPLAYS ALL THE LOGOS 
function displayAllImages(allLogos){
	logosDisplay.innerHTML="";
	allLogos.map((item)=>{
        const {filename,title,category}=item;
        const newCategory=category.join(',').replace(/,/g," / ")
		const theHTML=`<div class="logos-box">
					<img src="./logos/${filename}/${filename}.png"/>
				    <p class="logo-name">${title}</p>
                    <p class="logo-category">${newCategory}</p>
				</div>`;
		logosDisplay.insertAdjacentHTML('beforeend',theHTML);
	})
}


displayAllImages(allLogos)


//PICK CATEGORIS
industrySelectElement.addEventListener('change',pickCategory);




//PICKING LOGOS IN A CATEGORY
industrySelectElement.addEventListener('change',pickCategory);

function pickCategory(e){
	let pickedValue=e.currentTarget.value;
	
	
	//When All Categories is chosen
	if(pickedValue==='all'){
		return displayAllImages(allLogos);
	}
    
    let presCategory=allLogos.filter(item=>item.category.includes(pickedValue))
	
     displayAllImages(presCategory);
   
}


//PICKING LOGOS BY THE LETTER
function selectByLetter(e){
	let pickedValue=e.currentTarget.name;
	
	//filter the json to pick the logos by Alphabet
    let presCategory=allLogos.filter(item=>item.title.startsWith(pickedValue))
    
    displayAllImages(presCategory);
    

}



