function sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < milliseconds)
}

function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var email=document.form.email.value
    if(email.match(mailformat)) {
        return submitForm()
    }
    else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have entered an invalid email address!'
        })
        return false
    }
}

function submitForm() {
    const form = document.form
    const formData = new FormData(form)
    const url = 'https://formsubmit.co/george@gkonservices.com'
    fetch(
        url, {
            method: 'POST',
            body: formData
        }
    )
    sleep(1000)
    Swal.fire(
        'Email was sent successfully!',
        'Click OK to close this window.',
        'success'
    )
    form.reset()
    return false
}

function substituteWithDomainName() {
    const path = window.location.hash.replace('#', '')
    //const path = 'maria.com'
    history.pushState({ page: 1 }, "", '/domain-for-sale')
    toSubstitute = document.getElementsByClassName('domain-name')
    for(var i = 0; i < toSubstitute.length; i++){
        toSubstitute[i].innerHTML = toSubstitute[i].innerHTML.replace('{PATH}', path)
    }
    document.getElementById('subject').value = path
}

substituteWithDomainName()