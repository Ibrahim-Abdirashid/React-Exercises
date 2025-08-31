

const UserList  = ()=>{
    const userList = [
        {id: 123, name:"ibrahim", email:"neeyga@gmail.com"},
        {id: 133, name:"abdi", email:"boyg@gmail.com"},
        {id: 163, name:"calimo", email:"hoyga@gmail.com"},
        {id: 153, name:"farax", email:"toyga@gmail.com"}
    ];

    return(
        <div>
            <ul>
                {
                    userList.map(everyUser =>(
                        <li key={everyUser.id} >{everyUser.name} ({everyUser.email})</li>
                    ))
                }
                
            </ul>
        </div>
    )
}
export default UserList;