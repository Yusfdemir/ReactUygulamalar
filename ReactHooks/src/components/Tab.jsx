import {useEffect, useState} from 'react'

const Tab = ({children,activeTab,setActiveTab}) => {

    

    

  return (
    <div>
        <nav>
            {children.map((tab,index)=>(
                <button key={index} 
                className={activeTab==index ? 'bg-green-300':'bg-gray-100 m-2'}
                onClick={()=>setActiveTab(index)}
                >
                    {tab.props.title}
                </button>
            ))}
        </nav>
        {children[activeTab]}
    </div>
  )
}

Tab.Panel=function({children,title}){
    return (
        <div>{children} {title}</div>
    )
}

export default Tab