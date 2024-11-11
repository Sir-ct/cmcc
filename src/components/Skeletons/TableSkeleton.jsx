import './skeletons.css'

function TableSkeleton(){
    return(
        <tr>
            <td></td>
            <td></td>
            <td style={{display: "flex", gap: '15px', alignItems: 'center'}}>
                <div className='skeleton dp animate-pulse' />
                <div className='skeleton title animate-pulse'/>
            </td>
            <td>
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' />
            </td>
            <td>
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' />
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' />
            </td>
            <td className="hr">
                <div className='skeleton text animate-pulse' /> 
            </td>
        </tr>
    )
}

export default TableSkeleton