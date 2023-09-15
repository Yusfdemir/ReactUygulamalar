import * as Yup from 'yup'

Yup.setLocale({
    mixed:{
        required:"Bu alan doldurulması zorunlu bir alandır",
        oneOf:"Bu alanı işaretlemek zorundasınız"
    },
    string:{
        min:'Bu alan minimum ${min} karakter olamlıdır',
        max:'Bu alan maximum ${max} karakter olamlıdır'
    }
})

export default Yup