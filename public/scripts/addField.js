document.querySelector("#add-time")

.addEventListener('click', cloneField)


function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //node vai ser referir a elementos HTML

    const fields = newFieldContainer.querySelectorAll('input')

   fields.forEach(function(field) {
       field.value = ""
   })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}