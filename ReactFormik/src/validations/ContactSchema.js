import Yup from "./validation"

export const ContactSchema= Yup.object().shape({
    name: Yup.string()
        .required(),

    about: Yup.string()
        .required(),

    accept:Yup.boolean()
        .oneOf([true]),
    
    gender: Yup.string()
        .required(),
    
    level:Yup.string()
        .required(),

    avatar:Yup.mixed()
        .test({
            message:"Bir avatar seçmelisin",
            test: file=> file?.name
        })
})