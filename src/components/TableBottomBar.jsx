import { useEffect, useState } from "react"

function TableBottomBar({currentPage=1}){
    const [pageArr, setPageArr] = useState([])

    useEffect(()=>{
        let _pageArray = []
        for(let i=currentPage; i <= 6; i++){
            _pageArray.push(i)
        }
        setPageArr(_pageArray)
    }, [])
    
    return(
        <div className="table-pagination">
            <div style={{fontSize: '12px', color: '#616E85'}}>
                Showing 501 - 601 out of 9896
            </div>
            <div style={{display: "flex", gap: '10px'}}>
                {pageArr.map((page,i)=>(
                    <PaginationBtn key={i} currentPage={currentPage} number={page}  />
                ))}
                <div>...</div>
                <PaginationBtn currentPage={currentPage} number={998} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', fontSize: '12px', gap: '10px'}}>
                <div style={{color: '#616E85'}}> 
                    Show rows
                </div>
                <div>
                    <select style={{
                        border: 'none',
                        backgroundColor: '#EFF2F5'
                    }}>
                        <option value={"100"}>100</option>
                        <option value={"50"}>50</option>
                        <option value={"20"}>20</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function PaginationBtn({number, currentPage=1}){
    return(
        <div 
            style={{
                padding: '5px 10px', 
                color: currentPage === number ? "white" : "",
                backgroundColor: currentPage === number ? "#3861FB" : "",
                borderRadius: '5px',
                fontSize: "15px"
            }}
        >
            <a href={`${window.location.host}${number !== 1 && "/?page="}${number !==1 && number}`}>
                {number}
            </a>
        </div>
    )
}

export default TableBottomBar