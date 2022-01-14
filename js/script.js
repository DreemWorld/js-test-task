const number = document.getElementById('number')
const number_form = document.getElementById('number_form')
const comment = document.getElementById('comment')
const comment_form = document.getElementById('comment_form')

const valid = document.getElementById('valid')
const mail_format = 'kirill.vovk.2002@mail.ru'
const number_format = /^\+375\d{9}$/


number_form.onsubmit = function () {
    trueNumber = number.value
        .split('-').join('')
        .split('(').join('')
        .split(')').join('')
    if (number_format.test(trueNumber)) {
        console.log('YES')
        valid.textContent = 'valid'
        return false
    }
    else {
        console.log(trueNumber)
        valid.textContent = 'invalid'
        return false
    }
}

comment_form.onsubmit = function () {
    if (comment.value === '') {
        comment.value = mail_format
        return false
    }
}