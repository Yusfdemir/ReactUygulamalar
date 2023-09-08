import { useState } from 'react';

function App() {
  const genders=['Erkek','Kadın']
  const categoriesList=[
    {key:1,value:"PHP"},
    {key:2,value:"Javascript"},
    {key:3,value:"CSS"},
    {key:4,value:"HTML"},
  ]
  const levels=[
    {key:"beginner",value:"Başlangıç"},
    {key:"jr_developer",value:"Jr Developer"},
    {key:"sr_developer",value:"Sr Developer"},
  ]

  const [name,setName]=useState('tayfun')
  const [description,setDescription]=useState('')
  const [gender,setGender]=useState("1")
  const [categories,setCategories]=useState([2,4])
  const [rule,setRule]=useState(true)
  const [rules,setRules]=useState([
    {key:1,value:'1.kuralı kabul ediyorum',checked:false},
    {key:2,value:'2.kuralı kabul ediyorum',checked:false},
    {key:3,value:'3.kuralı kabul ediyorum',checked:true},
  ])
  const [level,setLevel]=useState("jr_developer")
  const [avatar,setAvatar]=useState(false)

  const checkRule=(key,checked)=>{
    setRules(rules=>rules.map(rule=>{
      if(key==rule.key){
        rule.checked=checked
      }
      return rule
    }))
  }

  const enabled=rules.every(rule=>rule.checked)

  return (
    <div>
      <button onClick={()=>setName("Ahmet")}>Adı Değiştir</button>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <br />
      <textarea value={description} onChange={e=>setDescription(e.target.value)}></textarea>
      {description}
      <br /><br />
      <select value={gender} onChange={e=>setGender(e.target.value)}>
        <option value="">Seçin</option>
        {genders.map((gender,index)=>(
          <option value={index} key={index}>{gender}</option>
        ))}
      </select>
      <br /><hr />
      <button onClick={()=>setCategories([2,3,4])}>Kategorileri seç</button>
      <select value={categories} multiple={true} onChange={e=>setCategories([... e.target.selectedOptions].map(option=>parseInt(option.value)))}>
        {categoriesList.map((category)=>(
          <option value={category.key} key={category.key}>{category.value}</option>
        ))}
      </select>
      <pre>{JSON.stringify(categories,null,2)}</pre>
      <br /><hr />
      <label htmlFor="">
          <input type="checkbox" checked={rule} onChange={e=>setRule(e.target.checked)} />
          Kuralları kabul ediyorum
      </label>
      
      <br />
      {rules.map(rule=>(
        <label htmlFor="" key={rule.key}>
        <input type="checkbox" checked={rule.checked} onChange={e=>checkRule(rule.key,e.target.checked)} />
        {rule.value}
        </label>
      ))}
      <br />
      {levels.map((l,index)=>(
        <label key={index}> 
          <input type="radio" value={l.key} checked={l.key == level} onChange={e=>setLevel(e.target.value)}/>
          {l.value}
        </label>
      ))}
      <br />
      <label htmlFor="">
        <input type="file" onChange={e=>setAvatar(e.target.files[0])} />
      </label>
        <br />
       {avatar&& 
       (<h3>{avatar.name}</h3>)}
      <br />
      <button disabled={!enabled}>Devam Et</button>
    </div>
  );
}

export default App;
