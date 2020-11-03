let emailCollectorForm = document.getElementById("email-collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    // Do something with the event
    console.log("The event is firing!")
    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    
    let updatedHtmlContent = `

    <aside>
      <article>
        <h2 class="article-heading">Congratulations, ${userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="article-content">
        <p class="fine-print">We'll never share your information without your permission</p>
        </p>
    `
    let ourMainContent = document.querySelector("aside")
    ourMainContent.innerHTML = updatedHtmlContent
})