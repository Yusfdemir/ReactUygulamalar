import React, { useEffect } from 'react'
import {Helmet} from 'react-helmet'
import {Formik,Form,Field, useFormikContext} from 'formik'
import Input from '../components/form/Input'
import File from '../components/form/File'
import CheckBox from '../components/form/CheckBox'
import TextArea from '../components/form/TextArea'
import Select from '../components/form/Select'
import Radio from '../components/form/Radio'
import { SampleSchema,ContactSchema } from '../validations'


// Formu otomatik submit için useFormikContext kullanılır
const AutoSubmitCode=()=>{
  const {values,submitForm}=useFormikContext()
  useEffect(()=>{
    if(values.code.length == 6){
      submitForm()
    }
  },[values,submitForm])
  return null
}

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>İletişim</title>
        <meta name='description' content='ietişim description'/>  
      </Helmet>
      <h2>İletişim sayfası</h2>

      <Formik initialValues={{
        code:'',
      }}
      onSubmit={values=>{
        console.log(values)
      }}
      validationSchema={SampleSchema}
      >
        {({values})=>(
          <Form className='hidden'>
            <Input label="Kodu Girin" name="code"/>
            <button type='submit'>Gönder</button>
            <AutoSubmitCode/>
          </Form>
        )}
      </Formik>

      <Formik
      initialValues={{
        name:'',
        about:'',
        accept:false,
        gender:1,
        avatar:'',
        skills:[],
        level:''
      }}
      onSubmit={values=>{console.log(values)}}
      validationSchema={ContactSchema}
      >
        { ({values}) =>(
          <Form className='p-6 m-4 shadow-lg grid gap-y-4 rounded border'>
            <Input label="Ad-Soyad" name="name"/>
            <TextArea label="Hakkında" rows={6} name='about'/>
            <CheckBox label="Kuralları Kabul Ediyorum" name="accept"/>
            <Select label="Cinsiyet" name="gender"   options={[
              {key:1,value:"Kadın"},
              {key:2,value:"Erkek"},
            ]}/>
            <Field component="select" name="skills" multiple={true}>
              <option value="php">PHP</option>
              <option value="css">CSS</option>
              <option value="js">JavaScript</option>
              <option value="html">HTML</option>
            </Field>
            <File label="Avatar" name="avatar"/>
            <Radio label="Seviyenizi Seçin" name="level" options={[
              {key:'jr',value:'Jr. Developer'},
              {key:'sr',value:'Sr. Developer'},
              {key:'ninja',value:'Ninja'}
            ]}/> 
            <button className='h-10 rounded bg-black text-sm text-white px-5' type='submit'>Gönder</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact