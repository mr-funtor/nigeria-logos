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


function getAllCategories(){
	let allCategories=[];

	allLogos.map((item)=>{
		allCategories.push(item['category'])
	})

	const flattenedCategories=allCategories.reduce((acc,item)=>{
		return acc.concat(item)
	})

	allCategories=[];

	flattenedCategories.forEach((item)=>{
		if(!allCategories.includes(item)){
			allCategories.push(item);
		}
	})
	
	allCategories.forEach((item)=>{
		const theHTML=`<option value="${item}">${item}</option>`
		industrySelectElement.insertAdjacentHTML('beforeend',theHTML);
	})
}

getAllCategories()

//DISPLAYS ALL THE LOGOS 
function displayAllImages(){
	logosDisplay.innerHTML="";
	allLogos.map((item)=>{
		const theFileName= item.filename;
		const theHTML=`<div class="logos-box">
					<img src="./logos/${theFileName}/${theFileName}.png"/>
				
				</div>`;
		logosDisplay.insertAdjacentHTML('beforeend',theHTML);
	})
}


displayAllImages()


//PICKING LOGOS IN A CATEGORY
industrySelectElement.addEventListener('change',pickCategory);

function pickCategory(e){
	let pickedValue=e.currentTarget.value;
	
	logosDisplay.innerHTML="";
	
	//When All Categories is chosen
	if(pickedValue==='all'){
		return displayAllImages();
	}
	
	allLogos.map((item)=>{
		const {category,filename}=item;
		
		if(category.includes(pickedValue)){
			const theHTML=`<div class="logos-box">
						<img src="./logos/${filename}/${filename}.png"/>

					</div>`;
			logosDisplay.insertAdjacentHTML('beforeend',theHTML);
		}
	})
	
	console.log('picked', e.currentTarget.value)
}



function selectByLetter(e){
	let pickedValue=e.currentTarget.name;
	
	logosDisplay.innerHTML="";
	
	allLogos.map((item)=>{
		const {title,filename}=item;
		
		if(title.startsWith(pickedValue)){
			const theHTML=`<div class="logos-box">
						<img src="./logos/${filename}/${filename}.png"/>

					</div>`;
			logosDisplay.insertAdjacentHTML('beforeend',theHTML);
		}
	})
}



