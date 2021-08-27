import React, {useState} from 'react'
import "./Main.css"
import SearchIcon from "@material-ui/icons/Search"
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import SelectAllOutlinedIcon from '@material-ui/icons/SelectAllOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import data from "./CardData"


const Main = () => {
    const [search,setSearch] = useState("");

    const handleSearch = (e) => {
         setSearch(e.target.value);
    }
    const searchCoffe = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(search.toString().toLowerCase())
            )
    });
    return (
        <div className="main">
            <div className="main-top">
            <div className="main-search">
                <SearchIcon/>
                <input placeholder="fiter content" type="text" value={search} onChange={handleSearch.bind(this)}/>
            </div>
            <StorageOutlinedIcon/>
            <SelectAllOutlinedIcon/>
            </div>
            
            <div className="main-bottom">
            {searchCoffe.map((item)=>{
                return (
                    <div className="card">
                    <img src={item.img} alt=""/>
                    <h5 className="title">{item.title}</h5>
                    <p className="desc">{item.description}</p>
                    <div className="card-icons">
                    <PhoneAndroidOutlinedIcon/>
                    <VisibilityOutlinedIcon/>
                    </div>

                </div>
                )
            })}
                
            </div>
        </div>
    )
}

export default Main
