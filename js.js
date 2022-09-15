function myFunc(){

    // Get cards
    const histbox = document.getElementsByClassName('history')

    // Applies the shadow class
    for (let i = 0;i < histbox.length;i++)
        histbox[i].classList.add('shadow')

    // Adds the link on the bottom
    var link = document.createElement('a')
    link.setAttribute('href', 'https://www.statista.com/chart/10713/podcast-listeners-in-the-united-states/') // Sets the link to Statista
    link.innerText = "Statista-Chart Refernce Here" // Visible text
    link.style.float = "center";
    link.style.padding = "10px 10px";
    link.style.marginBottom = "25px";

    document.body.appendChild(link) // Applies it to the body
}