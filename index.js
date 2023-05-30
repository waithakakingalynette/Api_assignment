let userContainer=document.getElementById('contents')
const getUsers=()=>{
   return fetch ('https://dummyjson.com/users?limit=6')
    .then(response =>response.json())
    .then(response => response)
    .catch(error=> error.message)
}

getUsers()

const displayImages=async()=>{
    const users=await getUsers();
    console.log(users.users)
    users.users.map(item=>{ 
       let div=document.createElement('div')
       div.className='people'
       let img=document.createElement('img')
       let names=document.createElement('h2')
       let userName=document.createElement('p')
    //    let paragraph=document.createElement('paragraph')

       img.src=item.images;
       names.innerHTML=`${item.firstName} ${item.lastName}`
       userName.innerHTML=item.username;

       div.appendChild(img);
       div.appendChild(names);
       div.appendChild(userName);

       userContainer.appendChild(div)

    })

}

displayImages()

// const contents=[
//    {
// imageUrl: 'https://res.cloudinary.com/dcw72qigi/image/upload/v1685440146/light_azfl8a.jpg'
//    }

// ]