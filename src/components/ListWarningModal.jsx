function ListWarningModal({showModal, closeModal}){
    return(
        <div onClick={()=>{closeModal()}} className="search-modal-wrap" style={{display: showModal===false && "none"}}>
            <div onClick={(e)=>{e.stopPropagation()}} className="warn-modal-body">
                <div className="search-head">
                    <div className="sm-li">
                    </div>
                    <div onClick={closeModal} className="search-modal-close">
                        X
                    </div>
                </div>
                <div style={{height: '80%', display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
                    <div style={{fontWeight: '600', fontSize: 16, margin: '1.5em 0', textAlign: 'center'}}>
                        Feature Unavailable: <span style={{fontSize: 14}}>Listing in Progress</span>
                    </div>
                    <div style={{fontSize: 12, fontWeight: '600', color: '#808A9D', textAlign: 'center'}}>
                        This functionality is currently unavailable as the listing is in progress. Please check back later. We appreciate your patience!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListWarningModal