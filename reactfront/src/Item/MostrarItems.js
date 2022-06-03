import axios from 'axios'
import { useState,useEffect,Accordion } from 'react'
import {Link, renderMatches, useLinkClickHandler} from 'react-router-dom'
import React from 'react'

const URI = 'http://10.0.0.177:8000/items'

const CompShowItems = () =>{
    const [items, setItems] = useState([])
    useEffect( ()=>{
        getItems()
        

    },[])

    const getItems = async () =>{
        
        const res =  await axios.get(`${URI}`)
        setItems(res.data)

    }
    function handlerChange(event){
        getItem(event.target.value)
    }
    const getItem = async(name)=>{
        const res = await axios.get(`${URI}/search?name=${name}`)
        setItems(res.data)
        console.log(`${URI}/search?name=${name}`)
    }
    /*const getItem = async (id) =>{
        
        const res =  await axios.get(`${URI}/${id}`)
        setItems(res.data)
        
    }*/
    

    
    return(
        
        
        <div className='container'>

            <form className="row g-3 mt-3 mb-3">
            <div className="col-lg-12">
                <div className="row">
                    <label htmlFor="colFormLabelLg" className="col-1 col-form-label col-form-label-lg">Nombre</label>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" onChange={handlerChange} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Repuesto a buscar"/>
                    </div>
                    
                </div>
            </div>

            {/*<div className="col">
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>*/}
            </form>


            
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {items.map((item)=>(
                                <tr className='accordion' key={item.ProductID}>
                                    <div className='accordion'>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                    {/*<td>{item.ProductID}</td>
                                    
                                    <td>{item.ProductName}</td>
                                    <td >
                                            <Link to={`/edit/${item.Productid}`} className='btn btn-info '><i className="fas fa-edit"></i></Link>
                                            <button  className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                    */}
                                    </div>
                                </tr>
                            ))} 
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default CompShowItems