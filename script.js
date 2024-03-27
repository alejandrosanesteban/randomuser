const getData = async() => {

    try {
        const response = await fetch ("https://randomuser.me/api/?results=20");
        if(response.status === 200) {
            const datosPersona = await response.json();
            const randomUser = datosPersona.results;
            // console.log(randomUser);

            user = "";
            randomUser.forEach(e => {
                user += `
                <div class="cards">
                    <img src=${e.picture.large}>
                    <h4>${e.name.first} ${e.name.last}</h4>
                    <p>${e.location.city}</p>
        
                    <div class="social-media">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                `;
            });
            document.querySelector(".main-container").innerHTML = user;


        } else {
            console.log("Algo no ha ido bien")
        }
        


    } catch (error) {
        console.log(error);
    }
}

getData();